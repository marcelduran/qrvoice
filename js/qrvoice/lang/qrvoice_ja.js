/* Copyright (c) 2011, Marcel Duran */
/* Translation by Eugene Kashida (http://twitter.com/ekashida) */

/*global YUI*/
YUI.add('lang/qrvoice_ja', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'ja', {
        direction: 'ltr', // left-to-right
        tagline: '百文字は一見にしかず',
        help: 'ヘルプ',
        faq: 'よくある質問',
        faqFile: 'faq_en-US.html',
        placeholder: '何て？',
        msgTitle: 'テキスト・トゥ・スピーチ （100文字以内）',
        genLabel: '作る',
        genTitle: 'qr-voice を作る',
        whichLang: '{lang}で', // {lang} will be replaced by a language e.g: in English
        spokenLang: '話し言葉',
        langs: { // message spoken language
            af: 'アフリカーンス語',
            sq: 'アルバニア語',
            ar: 'アラビア語',
            hy: 'アルメニア語',
            ca: 'カタロニア語',
            zh: '中国語',
            hr: 'クロアチア語',
            cs: 'チェコ語',
            da: 'デンマーク語',
            nl: 'オランダ語',
            en: '英語',
            fi: 'フィンランド語',
            fr: 'フランス語',
            de: 'ドイツ語',
            el: 'ギリシャ語',
            ht: 'ハイチ語',
            hi: 'ヒンディー語',
            hu: 'ハンガリー語',
            is: 'アイスランド語',
            id: 'インドネシア語',
            it: 'イタリア語',
            ja: '日本語',
            ko: '韓国語',
            la: 'ラテン語',
            lv: 'ラトヴィア語',
            mk: 'マケドニア語',
            no: 'ノルウェー語',
            pl: 'ポーランド語',
            pt: 'ポルトガル語',
            ro: 'ルーマニア語',
            ru: 'ロシア語',
            sr: 'セルビア語',
            sk: 'スロバキア語',
            es: 'スペイン語',
            sw: 'スワヒリ語',
            sv: 'スウェーデン語',
            ta: 'タミル語',
            tr: 'トルコ語',
            vi: 'ベトナム語',
            cy: 'ウェールズ語'
        },
        langsNote: '言語はメッセージ再生のためであり、通訳のためではありません',
        resizeTitle: 'qr-code のサイズ変更',
        linkTitle: 'この qr-code へのリンク',
        imgTitle: 'この qr-code を保存、あるいは上のリンクをコピーしてください',
        facebookButton: 'いいね！',
        twitterButton: 'ツイートする',
        intls: [ // user interface language
            {
                id: 'en-US',
                name: '英語（米国）',
                ownName: 'English (United States)'
            },
            {
                id: 'es-419',
                name: 'スペイン語（南米）',
                ownName: 'español (Latinoamérica)'
            },
            /*{
                id: 'fr',
                name: 'フランス語',
                ownName: 'français'
            },*/
            {
                id: 'it',
                name: 'イタリア語',
                ownName: 'italiano'
            },
            {
                id: 'ja',
                name: '日本語'
            },
            {
                id: 'pt-BR',
                name: 'ポルトガル語（ブラジル）',
                ownName: 'português (Brasil)'
            }/*,
            {
                id: 'zh-CN',
                name: '中国語（简体）',
                ownName: '中文（简体中文）'
            }*/
        ],
        intlsTitle: 'ユーザーインターフェース言語',
        disclaimer: '本サービスはYahoo!&trade;社、Google&trade;社、bitly&trade;社、とは全く関係がございません。'
    });
}, '0.0.1');
