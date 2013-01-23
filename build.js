#!/usr/bin/env node

/**
 * qrvoice.net builder
 * Copyright (c) 2013, Marcel Duran 
 */
var
    // files, dirs and programs
    TMP_DIR = '/tmp/',
    SRC_DIR = './',
    BUILD_DIR = process.argv[3] || './build/',
    IMG_DIR = 'images/',
    JS_DIR = 'js/qrvoice/',
    LANG_DIR = JS_DIR + 'lang/',
    CSS_DIR = 'css/',
    CSS_URL = 'http://qrvoice.net/' + CSS_DIR,
    INDEX_HTML = 'index.html',
    FAVICON = 'favicon.ico',
    LOGO = 'logo.png',
    HELP = 'help.jpg',
    MAIN_JS = 'qrvoice.js',
    MAIN_CSS = 'qrvoice.css',
    IE_MHT = 'qrvoice.mht',
    IE_CSS = 'qrvoice.ie',
    IE_MHTML = 'qrvoice.mhtml',
    YUICOMPRESSOR = 'yuicompressor ',
    COPYRIGHT = 'Copyright (c) ' +
        (new Date()).getFullYear() + ', Marcel Duran',

    // required modules
    fs = require('fs'),
    exec = require('child_process').exec,
    htmlMinifier = require('html-minifier'),
    uglifyjs = require('uglify-js'),
    jsp = uglifyjs.parser,
    pro = uglifyjs.uglify,

    // timestamp
    ts = new Date(),
    
    // create directory
    createDir = function (dir, callback) {
        console.log('creating ' + dir);
        exec('mkdir -p ' + dir, callback);
    },

    // copy all files
    copyFiles = function (src, dest) {
        console.log('copying files from ' + src + ' to ' + dest);
        exec('cp -r ' + src +  ' ' + dest);
    },

    // js minifier
    minifyJSCode = function (code) {
        var minified;
        
        // set version
        code = code.replace(/, '\d+\.\d+\.\d+'/, ',\'' + version + '\'');

        minified = pro.gen_code(
            pro.ast_squeeze(
                pro.ast_mangle(
                    jsp.parse(code)
                )
            )
        );

        return {
            type: 'JS',
            original: code,
            minified: minified
        };
    },

    // css minifier
    minifyCSSCode = function (input, output, callback) {
        exec(YUICOMPRESSOR + input, function (error, stdout) {
            if (error) {
                throw error;
            }
            fs.readFile(input, function (error, data) {
                callback(input, output, {
                    type: 'CSS',
                    original: data.toString('utf8'),
                    minified: stdout
                });
            });
        });
    },

    // save file displaying statistics
    saveFile = function (input, output, data) {
        var content = data.minified;

        if (data.type === 'HTML') {
            content += '\n<!-- ' + COPYRIGHT + '-->';
        } else {
            content = '/* ' + COPYRIGHT + ' */\n' + content;
        }
        fs.writeFile(output, content, function (error) {
            var sourceLen, targetLen, savings;

            if (error) {
                throw error;
            }
            sourceLen = data.original.length;
            targetLen = data.minified.length;
            savings = (1 - targetLen / sourceLen) * 100;
            console.log([
                data.type + ' minified (' + savings.toFixed(1) + '% savings):',
                '\tsource: ' + input + ' = ' +  sourceLen,
                '\ttarget: ' + output + ' = ' + targetLen
            ].join('\n'));
        });
    };

    // minify file
    minifyFile = function (input, output, conf) {
        var addSuffix = function (name) {
                var ext,
                    idx = name.lastIndexOf('.');
                idx = idx > -1 ? idx : name.length;
                ext = name.slice(idx);
                return name.slice(0, idx) + conf.suffix + ext;
            };
        
        if (conf.suffix) {
            output = addSuffix(output);
        }
        if (conf.append) {
            output += conf.append;
        }
        if (conf.async) {
            conf.minifier(input, output, saveFile);
        } else {
            fs.readFile(input, function (error, data) {
                if (error) {
                    throw error;
                }
                data = conf.minifier(data.toString('utf8'));
                if (conf.post) {
                    data.minified += conf.term + conf.post.minified;
                    data.original += conf.term + conf.post.original;
                }
                if (conf.callback) {
                    conf.callback(data, '_' + addSuffix(conf.filename));
                } else {
                    saveFile(input, output, data);
                }
            });
        }
    };

    // minify dir
    minifyDir = function (srcDir, destDir, conf) {
        fs.readdir(srcDir, function (error, files) {
            files.forEach(function (filename) {
                if (filename.slice(filename.lastIndexOf('.')) === conf.ext) {
                    conf.filename = filename;
                    minifyFile(srcDir + filename, destDir + filename, conf);
                }
            });
        });
    },

    // minify HTML after creating dir
    goHTML = function () {
        // minify index.html inline js and html
        fs.readFile(SRC_DIR + INDEX_HTML, function (error, data) {
            var minified,
                reScript = /<script>([\d\w\s\-:=;,\.\(\)\{\}\/\\\|&'\[\]!\+\?#@]+)<\/script>/g;

            if (error) {
                throw error;
            }

            data = data.toString('utf8').replace(reScript, function (all, match) {
                // remove filter, so use YUI default
                match = match.replace(/\s*filter:.*,/, '');

                // combine
                match = match.replace(/\s*base:.*,/, '');
                match = match.replace(/\s*combine:.*,/g, 'combine:true,');

                // set module path
                match = match.replace(/\s*path:.*,/,
                    'path:\'qrvoice' + ts + '.js\',');

                // minify code
                return '<script>' + minifyJSCode(match).minified + '</script>';
            });

            // set css path
            data = data.replace(RegExp(MAIN_CSS, 'g'),
                MAIN_CSS.replace('.', ts + '.'));
            data = data.replace(RegExp(IE_MHT, 'g'),
                IE_MHT.replace('.', + ts + '.'));

            // minify html
            minified = htmlMinifier.minify(data, {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            });

            // write output
            saveFile(SRC_DIR + INDEX_HTML, BUILD_DIR + INDEX_HTML, {
                type: 'HTML',
                original: data,
                minified: minified
            });
        });

        // minify faqs inline js/css and html
        fs.readdir(SRC_DIR, function (error, files) {
            if (error) {
                throw error;
            }
            files.forEach(function (file) {
                if (/^faq_.+\.html/.test(file)) {
                    fs.readFile(SRC_DIR + file, function (error, data) {
                        var minified, tempfile,
                            reScript = /<script>([\d\w\s\-:=;,\.\(\)\{\}\/\\\|&'\[\]!\+\?#@]+)<\/script>/g,
                            reStyle = /<style type="text\/css">([\d\w\s\-:=;,\.\(\)\{\}\/\\\|&'\[\]!\+\?#@%]+)<\/style>/;

                        if (error) {
                            throw error;
                        }

                        // minify js
                        data = data.toString('utf8').replace(reScript, function (all, match) {
                            return '<script>' + minifyJSCode(match).minified + '</script>';
                        });

                        // minify css
                        inline = reStyle.exec(data);
                        inline = (inline && inline[1]) || '';
                        tempfile = 'qr_' + parseInt(Math.random() * 1e9, 10) + '.css',
                        // save content of inline css into temp file
                        (function (file, data, tempfile, inline) {
                            fs.writeFile(TMP_DIR + tempfile, inline, function (error) {
                                if (error) {
                                    throw error;
                                }
                                // minify temp css file
                                minifyCSSCode(TMP_DIR + tempfile, null, function (input, output, inlineData) {
                                    var minified;
                                    // remove temp file
                                    fs.unlink(TMP_DIR + tempfile);

                                    // replace minified inline css
                                    data = data.replace(reStyle, function () {
                                        return '<style type="text/css">' + inlineData.minified + '</style>';
                                    });

                                    // minify html
                                    minified = htmlMinifier.minify(data, {
                                        removeComments: true,
                                        collapseWhitespace: true,
                                        removeAttributeQuotes: true
                                    });

                                    // write output
                                    saveFile(SRC_DIR + file, BUILD_DIR + file, {
                                        type: 'HTML',
                                        original: data,
                                        minified: minified
                                    });
                                });
                            });
                        }(file, data, tempfile, inline));
                    });
                }
            });
        });

        // copy favicon
        copyFiles(SRC_DIR + FAVICON, BUILD_DIR + FAVICON);
    };

    // minify JSs after creating dirs
    goJS = function () {
        minifyDir(SRC_DIR + JS_DIR, BUILD_DIR + JS_DIR, {
            ext: '.js',
            minifier: minifyJSCode,
            suffix: ts,
            callback: function (post, append) {
                minifyDir(SRC_DIR + LANG_DIR, BUILD_DIR + LANG_DIR, {
                    ext: '.js',
                    minifier: minifyJSCode,
                    post: post,
                    append: append,
                    term: ';'
                });
            }
        });
    },
    
    // minify CSSs after creating dirs
    goCSS = function () {
        minifyDir(SRC_DIR + CSS_DIR, BUILD_DIR + CSS_DIR, {
            ext: '.css',
            minifier: minifyCSSCode,
            suffix: ts,
            async: true
        });
        // IE [6,7]
        // get main css content
        fs.readFile(SRC_DIR + CSS_DIR + MAIN_CSS, function (err, css) {
            css = css.toString('utf8');
            // replace data uri from main css
            css = css.replace(/url\(data:.+\)/, 'url(mhtml:{CSS_URL}!qr)');
            css = css.replace(/url\(data:.+\)/, 'url(mhtml:{CSS_URL}!icons)');
            // get ie css content
            fs.readFile(SRC_DIR + CSS_DIR + IE_CSS, function (err, ie) {
                // generate temp file for yuicompressor and final css ie filename
                var filename = 'qr_' + parseInt(Math.random() * 1e9, 10) + '.css',
                    cssFilename = IE_MHT.replace('.', ts + '.');
                ie = ie.toString('utf8');
                // assign new css ie filename to mhtml refs
                css = css.replace(/\{CSS_URL\}/g, CSS_URL + cssFilename);
                // save content of main css and ie css into temp file
                fs.writeFile(TMP_DIR + filename, css + ie, function (error) {
                    if (error) {
                        throw error;
                    }
                    // minify temp css file
                    minifyCSSCode(TMP_DIR + filename, null, function (input, output, data) {
                        // remove temp file
                        fs.unlink(TMP_DIR + filename);
                        // get mhtml content
                        fs.readFile(SRC_DIR + CSS_DIR + IE_MHTML, function (err, mhtml) {
                            // prepend html into minified css
                            mhtml = mhtml.toString('utf8');
                            data.original = mhtml + data.original;
                            data.minified = mhtml + data.minified;
                            // save final css ie file
                            saveFile(TMP_DIR + filename, BUILD_DIR + CSS_DIR +
                                cssFilename, data);
                        });
                    });
                });
            });
        });
    };

// set timestamp
ts = '-' + ts.getFullYear().toString().slice(2) + (('00' + (ts.getMonth() + 1))
    .slice((ts.getMonth() + 1).toString().length)) + ts.getDate() +
    (process.argv[2] || '');

// get version
version = fs.readFileSync(SRC_DIR + 'CHANGELOG')
    .toString('utf8').split('\n')[0].split(' ');
version = version[version.length - 1];
console.log('QR voice ' + version);

// build directories
createDir(BUILD_DIR, goHTML);
createDir(BUILD_DIR + LANG_DIR, goJS);
createDir(BUILD_DIR + CSS_DIR, goCSS);
createDir(BUILD_DIR + IMG_DIR, function () {
    copyFiles(SRC_DIR + IMG_DIR + LOGO, BUILD_DIR + IMG_DIR + LOGO);
    copyFiles(SRC_DIR + IMG_DIR + HELP, BUILD_DIR + IMG_DIR + HELP);
});
