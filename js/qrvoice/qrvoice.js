/* Copyright (c) 2015, Marcel Duran */

/*global YUI*/
YUI.add('qrvoice', function (Y) {
  'use strict';
  var
    // uninitialized variables
    ratio, idx, search, params, placeholder, intl, intls,
    listStr, currentLang, lastMsg, lastLang, img, qrcodeUrl,

    // const
    APPID = 'qrvoice',
    BITLY_LOGIN = APPID,
    BITLY_APIKEY = 'R_4f67037aede6407a9cac9e9073c86192',
    BITLY_DOMAIN = 'http://my.qrvoice.net/',
    URL_SHORTEN = 'http://api.bitly.com/v3/shorten?login=' +
      BITLY_LOGIN + '&apiKey=' + BITLY_APIKEY +
      '&longUrl={url}&format=json&callback={callback}',
    URL_VOICE = 'http://translate.google.com/translate_tts?' +
      'ie=UTF-8&client=t&q={msg}&tl={lang}',
    URL_QRCODE = 'http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&' +
      'chs=547x547&chl={url}',
    URL_FACEBOOK = 'http://www.facebook.com/sharer.php?t=QR%20voice&' + 
      'u=http%253A%252F%252Fqrvoice.net%2F%3Fid%3D{id}',
    URL_TWITTER = 'http://twitter.com/share?source=tweetbutton&' +
      'text=QR%20voice&url=http%3A%2F%2Fqrvoice.net%2F%3Fid%3D{id}',
    LANG_ROWS = 11,
    CLASS_HIDDEN = 'hidden',
    CLASS_SELECT = 'lng-sel',
    CLASS_INVISIBLE = 'invis',
    SEL_LBL = '.lbl',
    SEL_BODY = 'body',
    SEL_LINK = '#qrlink',
    SEL_COPY = '#qrcopy',
    SEL_HELP = '#help',
    SEL_LANG = '#lang',

    // minifier helpers
    YONE = Y.one,
    YINTL = Y.Intl,
    INTL = YINTL.get(APPID),
    YLANG = Y.Lang,
    SUBS = YLANG.sub,
    WIN = Y.config.win,
    LOC = WIN.location,
    NAV = WIN.navigator,
    STORAGE = Y.StorageLite,
    STORAGEGET = STORAGE.getItem,
    STORAGESET = STORAGE.setItem,
    YNODE = Y.Node,
    YNODECREATE = YNODE.create,
    YOBJEACH = Y.Object.each,
    YARRAY = Y.Array,
    YARRAYEACH = YARRAY.each,
    DOMNODE = YNODE.getDOMNode,
    ENCODE = encodeURIComponent,
    ROUND = Math.round,
    EMPTY = '',
    NULL = null,
    VALUE = 'value',
    LANG = 'lang',
    PLACEHOLDER = 'placeholder',
    TITLE = 'title',
    CLICK = 'click',
    RTL = 'rtl',
    ID = 'id',
    HREF = 'href',

    // initialized variables
    reId = /^[\d\w\-_]+$/,
    langs = INTL.langs,
    language = NAV.userLanguage || NAV.language,
    languageShort = language.slice(0, 2).toLowerCase(),
    langCount = 0,

    // nodes
    body = YONE(SEL_BODY),
    form = YONE('#form'),
    msg = YONE('#msg'),
    qrimg = YONE('#qrcode-wrp'),
    link = YONE(SEL_LINK),
    copy = YONE(SEL_COPY),
    copyNode = DOMNODE(copy),
    langList = YONE('#lang-lst'),
    langName = YONE('#lang-name'),
    fbLink = YONE('#social .facebook'),
    twLink = YONE('#social .twitter'),
    help = YONE('#help-panel'),

    /**
     * Set location using either pushState when available or
     * hash as a fallback.
     */
    setLocation = (function () {
      var hist = WIN.history;

      return (hist && hist.replaceState) ?
          function (params) {
            hist.replaceState(NULL, NULL,
              params ? '?' + params : '/');
          } :
          function (params) {
            LOC.hash = params;
          };
    }()),

    /**
     * Set placeholder on top of input box on browsers that
     * does not support html5 placeholder attribute.
     * @param {Event} e Event from focus|blur input event, not used.
     * @param {Array} xy The x and y array positions to place over.
     */
    setPlaceholder = function (e, xy) {
      if (!msg.get(VALUE)) {
        placeholder.setXY(xy || msg.getXY());
      }
      if (e) {
        e.halt();
      }
    },

    /**
     * Normalize strings for sort comparison.
     * @param {String} str The string to be normalized.
     * @return {String} Normilized string.
     */
    strNormalizer = function (str) {
      return str.toLowerCase()
        .replace(/[áãâ]/g, 'a')
        .replace(/[éê]/g, 'e')
        .replace(/[í]/g, 'i')
        .replace(/[ô]/g, 'o')
        .replace(/[ú]/g, 'u')
        .replace(/[ç]/g, 'c')
        .replace(/[ñ]/g, 'n');
    },

    /**
     * Sort language arrays alphabetically. To be used by array.sort.
     * @param {Object} lang1 The 1st language obj to be compared.
     * @param {Object} lang2 The 2nd language obj to be compared.
     * @return {Number} -1 when 1st < 2nd or 1 otherwise.
     */
    langSort = function (lang1, lang2) {
      var name1 = strNormalizer(lang1.name),
        name2 = strNormalizer(lang2.name);

      return name1 < name2 ? -1 : 1;
    },

    /**
     * Get the appropriate language code, checking for simplified
     * Chinese edge case, the only one length > 2. currentLang must
     * be set prior to call this function.
     * @return {String} The appropriate language code.
     */
    getLang = function () {
      return currentLang === 'zh' ? 'zh-CN' : currentLang === 'eg' ? 'en-GB' :
        currentLang;
    },

    /**
     * Set language to speak the message. It also treats simplified
     * Chinese edge case and persist user's choice.
     * @param {String} lang The chosen language.
     */
    setLang = function (lang) {
      if (!langs.hasOwnProperty(lang)) {
        lang = 'en';
      }
      currentLang = lang;
      msg.set(LANG, getLang());
      langName.setContent(SUBS(INTL.whichLang, {lang: langs[lang]}));
      STORAGESET(LANG, lang);
    },

    decodeHash = function (hash) {
      var i, len, value;

      hash = hash.split('.');
      len = hash.length;
      for (i = 0; i < len; i++) {
        value = parseInt(hash[i], 36) - len;
        hash[i] = String.fromCharCode(value);
      }

      return {
        lang: hash[0] + hash[len - 1],
        text: hash.slice(1, len - 1).reverse().join(EMPTY)
      };
    },

    generateHash = function (message, lang) {
      var i, len, value, hash;

      lang = lang.split(EMPTY);
      hash = [lang[0]].concat(message.split(EMPTY).reverse(), lang[1]);
      for (i = 0, len = hash.length; i < len; i++) {
        value = hash[i].charCodeAt(0) + len;
        hash[i] = value.toString(36);
      }

      return hash.join('.');
    },

    setShortLink = function(url) {
      copy.removeClass(CLASS_INVISIBLE);
      copy.set(VALUE, url);
      copyNode.focus();
      copyNode.select();
    },

    updateUrls = function (hash, url, init) {
      // create image once
      if (!img) {
        img = YNODECREATE(
          SUBS('<img id="qrcode" alt="{alt}">', {
            alt: INTL.imgTitle
          })
        );
        qrimg.append(img);
      }
      img.set('src', url);
      qrimg.set(HREF, url);
      fbLink.set(HREF, SUBS(URL_FACEBOOK, {id: hash}));
      twLink.set(HREF, SUBS(URL_TWITTER, {id: hash}));
      if (!init) {
        setLocation('id=' + hash);
      }
    },

    generateQrcodeUrl = function(message, lang) {
      var voiceUrl, qrcodeUrl;

      voiceUrl = SUBS(URL_VOICE, {
        msg: message,
        lang: getLang()
      });
      qrcodeUrl = SUBS(URL_QRCODE, {
        url: ENCODE(voiceUrl)
      });

      return qrcodeUrl;
    },

    /**
     * Callback from shorten the final qr-code url from Google Charts
     * API. It sets the image src, share link, social links  and set
     * location for bookmarking.
     * @param {Object} resp The response form bit.ly shorten,
     *    only data.url is used.
     * @param {Boolean} init When initializing jsut set src and link,
     *    not location. 
     */
    shortenQRCode = function (resp, init) {
      var url, hash,
        data = resp && resp.data;

      if (!data) {
        return;
      }
      updateUrls(data.hash, data.url);
      setShortLink(BITLY_DOMAIN + data.hash);
    },

    /**
     * Submit message to be qr-voiced. Actually it just build Google
     * trasnlator voice url and send it to bit.ly shorten API.
     * @param {Event} e The submit form event.
     */
    submitForm = function (e) {
      var hash,
        message = msg.get(VALUE),
        lang = getLang();

      e.halt();
      if (message && (lastMsg !== message || lastLang !== lang)) {
        lastMsg = message;
        lastLang = lang;
        message = ENCODE(message);
        hash = generateHash(message, currentLang);
        qrcodeUrl = generateQrcodeUrl(message, lang);
        updateUrls(hash, qrcodeUrl);
        link.removeClass(CLASS_INVISIBLE);
        copy.addClass(CLASS_INVISIBLE);
        copy.set(VALUE, EMPTY);
      }
    };

  /**
   * Just in case CSS fails to load, force body visible.
   */
  body.setStyle('visibility', 'visible');

  /**
   * Event listeners, mainly delegation on body.
   */

  /**
   * Form submit event from either click button or hit ENTER.
   */
  form.on('submit', submitForm);

  /**
   * Show/hide language list.
   */
  body.delegate(CLICK, function (e) {
    e.halt();
    langList.toggleClass(CLASS_HIDDEN);
  }, SEL_LANG);

  /**
   * Show/hide textless help.
   */
  body.delegate(CLICK, function (e) {
    e.halt();
    YONE('#help-img').setStyle('background',
      'url(/images/help.jpg) no-repeat');
    help.toggleClass(CLASS_INVISIBLE);
  }, SEL_HELP);

  /**
   * Capture clicks around to hide language list/textless help when visible.
   */
  body.delegate(CLICK, function (e) {
    if (!e.target.ancestor(SEL_LANG)) {
      langList.addClass(CLASS_HIDDEN);
    }
    if (!e.target.test(SEL_HELP)) {
      help.addClass(CLASS_INVISIBLE);
    }
  }, SEL_BODY);

  /**
   * Select language from language list.
   */
  body.delegate(CLICK, function (e) {
    var node = e.target;

    e.preventDefault();
    YONE('#lng-'  + currentLang).removeClass(CLASS_SELECT);
    node.addClass(CLASS_SELECT);
    setLang(node.get(ID).slice(4));
  }, '.lng');

  /**
   * Make qr-code image link easy to copy by
   * replacing it by a selected input text box.
   */
  body.delegate('click', function (e) {
    e.halt();
    link.addClass(CLASS_INVISIBLE);
    Y.jsonp(SUBS(URL_SHORTEN, {url: ENCODE(qrcodeUrl)}), {
      on: {
        success: shortenQRCode
      }
    });
  }, SEL_LINK);

  /**
   * Check initial parameters from location (querystring and hash) looking
   * for and ID to be used and display the qr-code image previously generated.
   */
  search = LOC.search;
  idx = search.lastIndexOf('/');
  idx = idx > -1 ? idx : search.length;
  params = search.slice(1, idx).split('&').concat(
    LOC.hash.slice(1).split('&')
  );
  YARRAY.some(params, function (p) {
    var url, message,
      param = p.split('='),
      value = param[1];

    if (param[0] === ID && value) {
      if (reId.test(value)) {
        url = BITLY_DOMAIN + value;
        setShortLink(url);
      } else {
        message = decodeHash(value);
        setLang(message.lang);
        qrcodeUrl = generateQrcodeUrl(message.text, message.lang);
        url = qrcodeUrl;
        link.removeClass(CLASS_INVISIBLE);
      }
      updateUrls(value, url, 1);

      return 1;
    }

  });

  /**
   * i18n, set titles, labels, content and page direction when not LTR.
   */
  if (INTL.direction === RTL) {
    body.addClass(RTL);
  }
  YONE(SEL_HELP)
    .setContent(INTL.help)
    .set(HREF, INTL.faqFile)
    .removeClass(CLASS_HIDDEN);
  YONE('#faq')
    .setContent(INTL.faq)
    .set(HREF, INTL.faqFile);
  YONE('#tagline').setContent(INTL.tagline);
  msg
    .set(PLACEHOLDER, INTL.placeholder)
    .set(TITLE, INTL.msgTitle);
  YONE('#lbl-msg').setContent(INTL.msgTitle);
  YONE('#gen').set(TITLE, INTL.genTitle);
  YONE('#lbl-gen').setContent(INTL.genLabel);
  link
    .setContent(INTL.linkTitle)
    .set(TITLE, INTL.linkTitle);
  qrimg.set(TITLE, INTL.imgTitle);
  YONE('#lbl-intls').setContent(INTL.intlsTitle);
  YONE('#disclaimer').setContent(INTL.disclaimer);
  fbLink.one(SEL_LBL).setContent(INTL.facebookButton);
  twLink.one(SEL_LBL).setContent(INTL.twitterButton);
  if (INTL.description) {
    YONE('meta[name=description]').set('content', INTL.description);
  }

  /**
   * Placeholder workaround for browsers that does not
   * support html5 placeholder attribute.
   */
  if (YLANG.isUndefined(
      DOMNODE(YNODECREATE('<input>'))[PLACEHOLDER]
    )) {
    placeholder = YNODECREATE(
      SUBS('<label class="{cls}" for="msg">{lbl}</label>', {
        cls: PLACEHOLDER,
        lbl: INTL.placeholder
      })
    );
    form.append(placeholder);
    setPlaceholder();
    msg.on('focus', setPlaceholder, NULL, [0, -1e4]);
    msg.on('blur', setPlaceholder);
  }

  /**
   * Set intls list from available languages.
   */
  listStr = EMPTY;
  intl = YINTL.getLang(APPID);
  YARRAYEACH(INTL.intls.sort(langSort), function (value) {
    var id = value.id,
      ownName = value.ownName;

    listStr += SUBS('<option value="{id}"{sel}>{opt}</option>', {
      id: id,
      sel: id === intl ? ' selected' : EMPTY,
      opt: value.name + (ownName ? ' - ' + ownName : EMPTY)
    });
  });
  intls = YNODECREATE(
    SUBS('<select id="intls" title="{title}">{opts}</select>', {
      title: INTL.intlsTitle,
      opts: listStr
    })
  );
  body.one('#intls-wrp').append(intls);

  /**
   * Set user interface language, persisting it and
   * reloading the page to the new language take effect.
   */
  intls.on('change', function () {
    var selIntl = intls.get('options')
      .item(intls.get('selectedIndex')).get(VALUE);

    STORAGESET('intl', selIntl);
    LOC.reload();
  });

  /**
   * Initialization depending on storage-lite readyness. IE<8 issue.
   */
  STORAGE.on('storage-lite:ready', function () {
    var arrLangs = [];

    qrimg.removeClass(CLASS_HIDDEN);

    /**
     * Build spoken languages list and set the current language from
     * persisted user's choice or browser default language.
     * It uses a temporary array to sort languages
     * object in alphabetical order.
     */
    setLang(STORAGEGET(LANG) || languageShort);
    listStr = SUBS(
      '<div id="lang-hd">{title}</div><ul class="lang-col">',
      {
        title: INTL.spokenLang
      }
    );
    YOBJEACH(langs, function (name, id) {
      arrLangs.push({
        id: id,
        name: name
      });
    });
    YARRAYEACH(arrLangs.sort(langSort), function (lang) {
      var id = lang.id;

      listStr += SUBS(
        '<li><a class="lng{cls}" href="#" id="lng-{id}">{name}</a></li>',
        {
          cls: id === currentLang ? ' ' + CLASS_SELECT : EMPTY,
          id: id,
          name: lang.name
        }
      );
      langCount += 1;
      if (langCount % LANG_ROWS === 0) {
        listStr += '</ul><ul class="lang-col">';
      }
    });
    listStr += SUBS('</ul><div id="lang-ft">{note}</div>', {
      note: INTL.langsNote
    });
    langList.setContent(listStr);
  });
}, '0.0.1', {
  lang: ['en-US', 'es-419', 'it', 'ja', 'pt-BR'],
  requires: ['node', 'json', 'jsonp', 'dd-constrain',
    'gallery-center', 'gallery-storage-lite']
});
