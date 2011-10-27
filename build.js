#!/usr/bin/env node

/**
 * qrvoice.net builder
 * Copyright (c) 2011, Marcel Duran 
 */
var
    // files, dirs and programs
    TMP_DIR = '/tmp/',
    SRC_DIR = './',
    BUILD_DIR = './build/',
    IMG_DIR = 'images/',
    JS_DIR = 'js/qrvoice/',
    LANG_DIR = JS_DIR + 'lang/',
    CSS_DIR = 'css/',
    COMBO_DIR = 'js/_qrvoice/lang/',
    INDEX_HTML = 'index.html',
    FAVICON = 'favicon.ico',
    MAIN_JS = 'qrvoice.js',
    MAIN_CSS = 'qrvoice.css',
    YUICOMPRESSOR = 'java -jar ~/bin/yuicompressor-2.4.6.jar ',
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
        var idx, ext;
        
        if (conf.suffix) {
            idx = output.lastIndexOf('.');
            idx = idx > -1 ? idx : output.length;
            ext = output.slice(idx);
            output = output.slice(0, idx) + conf.suffix + ext;
        }
        if (conf.async) {
            conf.minifier(input, output, saveFile);
        } else {
            fs.readFile(input, function (error, data) {
                if (error) {
                    throw error;
                }
                data = conf.minifier(data.toString('utf8'));
                if (conf.pre) {
                    data.original += '\n' + conf.pre.original;
                    data.minified += '\n' + conf.pre.minified;
                }
                if (conf.appendFilename) {
                    output += conf.appendFilename;
                }
                saveFile(input, output, data);
            });
        }
    };

    // minify dir
    minifyDir = function (srcDir, destDir, conf) {
        fs.readdir(srcDir, function (error, files) {
            files.forEach(function (filename) {
                if (filename.slice(filename.lastIndexOf('.')) === conf.ext) {
                    minifyFile(srcDir + filename, destDir + filename, conf);
                }
            });
        });
    },

    // minify HTML after creating dir
    goHTML = function () {
        // minify index.html inline js and html
        fs.readFile(SRC_DIR + INDEX_HTML, function (error, data) {
            var minified, content,
                reScript = /<script>([\s\S]+)<\/script>/;

            if (error) {
                throw error;
            }

            data = data.toString('utf8');
            content = reScript.exec(data)[1];

            if (content) {
                // remove filter, so use YUI default
                content = content.replace(/\s*filter:.*,/, '');

                // set combine = true
                content = content.replace(/\s*combine:.*,/,
                    'combine:true,');

                // set module path
                content = content.replace(/\s*path:.*,/,
                    'path:\'qrvoice' + ts + '.js\',');

                // minify code
                content = minifyJSCode(content).minified;

                // replace raw code with minified version
                content = data.replace(reScript, function (script) {
                    return '<script>' + content + '</script>';
                });

                // set css path
                content = content.replace(MAIN_CSS,
                    MAIN_CSS.replace('.css', ts + '.css'));

                // minify html
                minified = htmlMinifier.minify(content, {
                    removeComments: true,
                    collapseWhitespace: true
                });

                // write output
                saveFile(SRC_DIR + INDEX_HTML, BUILD_DIR + INDEX_HTML, {
                    type: 'HTML',
                    original: content,
                    minified: minified
                });
            }
        });
    };

    // minify JSs after creating dirs
    goJS = function () {
        fs.readFile(SRC_DIR + JS_DIR + MAIN_JS, function (error, data) {
            data = minifyJSCode(data.toString('utf8'));

            minifyDir(SRC_DIR + LANG_DIR, BUILD_DIR + COMBO_DIR, {
                ext: '.js',
                minifier: minifyJSCode,
                pre: data,
                appendFilename: '&_' + MAIN_JS.replace('.js', ts + '.js')
            });
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
    };

// set timestamp
ts = '-' + ts.getFullYear().toString().slice(2) +
    (ts.getMonth() + 1) + ts.getDate();

// get version
version = fs.readFileSync(SRC_DIR + 'CHANGELOG')
    .toString('utf8').split('\n')[0].split(' ');
version = version[version.length - 1];
console.log('QR voice ' + version);

// build directories
createDir(BUILD_DIR, goHTML);
createDir(BUILD_DIR + COMBO_DIR, goJS);
createDir(BUILD_DIR + CSS_DIR, goCSS);

// copy images
copyFiles(SRC_DIR + IMG_DIR, BUILD_DIR + IMG_DIR);
copyFiles(SRC_DIR + FAVICON, BUILD_DIR + FAVICON);
