/* Copyright (c) 2016, Marcel Duran */
/* Translation by Wenyu Zhang (http://twitter.com/wyz) */

/*global YUI*/
YUI.add('lang/qrvoice_zh-CN', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'zh-CN', {
        direction: 'ltr', // left-to-right
        description: '为合成语音消息生成QR码',
        tagline: '一张图片能够包含100个字符的消息',
        help: '帮助',
        faq: '常见问题',
        faqFile: 'faq_en-US.html',
        placeholder: '您想说什么？',
        msgTitle: '语音合成（最多100个字符）',
        genLabel: '生成',
        genTitle: '生成QR语音消息',
        whichLang: '用{lang}说', // {lang} will be replaced by a language e.g: in English
        spokenLang: '可以合成的语',
        langs: { // message spoken language
            af: '布尔语(南非荷兰语)',
            sq: '阿尔巴尼亚语',
            ar: '阿拉伯语',
            hy: '亚美尼亚语',
            ca: '加泰罗尼亚语',
            zh: '中文',
            hr: '克罗地亚语',
            cs: '捷克语',
            da: '丹麦语',
            nl: '荷兰语',
            en: '英语',
            eg: '英式英语',
            fi: '芬兰语',
            fr: '法语',
            de: '德语',
            el: '希腊语',
            ht: '海地克里奥尔语',
            hi: '印地语',
            hu: '匈牙利语',
            is: '冰岛语',
            id: '印尼语',
            it: '意大利语',
            ja: '日语',
            ko: '韩语',
            la: '拉丁语',
            lv: '拉脱维亚语',
            mk: '马其顿语',
            no: '挪威语',
            pl: '波兰语',
            pt: '葡萄牙语',
            ro: '罗马尼亚语',
            ru: '俄语',
            sr: '塞尔维亚语',
            sk: '斯洛伐克语',
            es: '西班牙语',
            sw: '斯瓦希里语',
            sv: '瑞典语',
            ta: '泰米尔语',
            tr: '土耳其语',
            vi: '越南语',
            cy: '威尔士语'
        },
        langsNote: '这些语言只是用来回放您的消息，并不是用来翻译您的消息',
        linkTitle: '这个QR码的链',
        imgTitle: '消息回放QR码，保存这张图片并扫描，或者复制上面的连接',
        facebookButton: '喜欢',
        twitterButton: '发推',
        intls: [ // user interface language
            {
                id: 'en-US',
                name: '英文（美国）',
                ownName: 'English (United States)'
            },
            {
                id: 'es-419',
                name: '西班牙文（拉丁美洲）',
                ownName: 'español (Latinoamérica)'
            },
            {
                id: 'fr',
                name: '法文',
                ownName: 'français'
            },
            {
                id: 'hu',
                name: '匈牙利文',
                ownName: 'magyar'
            },
            {
                id: 'it',
                name: '意大利文',
                ownName: 'italiano'
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
                name: '简体中文'
            },
            {
                id: 'zh-TW',
                name: '繁休中文',
                ownName: '繁休中文'
            }
        ],
        intlsTitle: '界面语言',
        disclaimer: '免责声明: qrvoice与Yahoo! Inc.，Google Inc.或bitly Inc.没有任何关系。'
    });
}, '0.0.1');
