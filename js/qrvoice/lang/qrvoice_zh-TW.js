/* Copyright (c) 2016, Marcel Duran */
/* Translation by Wenyu Zhang (http://twitter.com/wyz) */

/*global YUI*/
YUI.add('lang/qrvoice_zh-TW', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'zh-TW', {
        direction: 'ltr', // left-to-right
        description: '為合成語音訊息生成QR碼',
        tagline: '一張圖片能夠包含100個字符的訊息',
        help: '幫助',
        faq: '常見問題',
        faqFile: 'faq_en-US.html',
        placeholder: '您想說什麼？',
        msgTitle: '語音合成（最多100個字符）',
        genLabel: '生成',
        genTitle: '生成QR語音訊息',
        whichLang: '用{lang}說', // {lang} will be replaced by a language e.g: in English
        spokenLang: '可以合成的語言',
        langs: { // message spoken language
            af: '南非荷蘭語',
            sq: '阿爾巴尼亞文',
            ar: '阿拉伯文',
            hy: '亞美尼亞文',
            ca: '加泰羅尼亞文',
            zh: '中文',
            hr: '克羅埃西亞文',
            cs: '捷克文',
            da: '丹麥文',
            nl: '荷蘭文',
            en: '英文',
            eg: '英式英語',
            fi: '芬蘭文',
            fr: '法文',
            de: '德文',
            el: '希臘文',
            ht: '海地克里奧文',
            hi: '印度文',
            hu: '匈牙利文',
            is: '冰島文',
            id: '印尼文',
            it: '義大利文',
            ja: '日文',
            ko: '韓文',
            la: '拉丁文',
            lv: '拉脫維亞文',
            mk: '馬其頓文',
            no: '挪威文',
            pl: '波蘭文',
            pt: '葡萄牙文',
            ro: '羅馬尼亞文',
            ru: '俄文',
            sr: '塞爾維亞文',
            sk: '斯洛伐克文',
            es: '西班牙文',
            sw: '斯瓦希里文',
            sv: '瑞典文',
            ta: '泰米爾文',
            tr: '土耳其文',
            vi: '越南文',
            cy: '威爾斯文'
        },
        langsNote: '這些語言只是用來回放您的訊息，並不是用來翻譯您的訊息',
        linkTitle: '這個QR碼的鏈接',
        imgTitle: '訊息回放QR碼，保存這張圖片並掃描，或者拷貝上面的連接',
        facebookButton: '喜歡',
        twitterButton: '推文',
        intls: [ // user interface language
            {
                id: 'en-US',
                name: '英文（美國）',
                ownName: 'English (United States)'
            },
            {
                id: 'es-419',
                name: '西班牙文（拉丁美洲）',
                ownName: 'español (Latinoamérica)'
            },
            {
                id: 'hu',
                name: '匈牙利文',
                ownName: 'magyar'
            },
            {
                id: 'it',
                name: '義大利文',
                ownName: 'italiano'
            },
            {
                id: 'fr',
                name: '法文',
                ownName: 'français'
            },
            {
                id: 'ja',
                name: '日文',
                ownName: '日本語'
            },
            {
                id: 'pt-BR',
                name: '葡萄牙文（巴西）',
                ownName: 'português (Brasil)'
            },
            {
                id: 'zh-CN',
                name: '簡體中文',
                ownName: '简体中文'
            },
            {
                id: 'zh-TW',
                name: '繁體中文'
            }
        ],
        intlsTitle: '界面語言',
        disclaimer: '免責聲明: qrvoice與Yahoo! Inc.，Google Inc.或bitly Inc.沒有任何關係。'
    });
}, '0.0.1');
