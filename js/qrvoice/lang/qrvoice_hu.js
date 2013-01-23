/* Copyright (c) 2013, Marcel Duran */
/* Translation by András Tuna (http://tuna.hu) */

/*global YUI*/
YUI.add('lang/qrvoice_hu', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'hu', {
        direction: 'ltr', // left-to-right
        tagline: 'Amikor egy kép száz betűt ér...',
        help: 'Súgó',
        faq: 'GyIK',
        faqFile: 'faq_en-US.html',
        placeholder: 'Mi a mondandó?',
        msgTitle: 'A mondandó szöveg (legfeljebb 100 betű)',
        genLabel: 'Létrehozás',
        genTitle: 'A QR Voice létrehozása',
        whichLang: '{lang}', // {lang} will be replaced by a language e.g: in English
        spokenLang: 'A beszélt nyelv',
        langs: { // message spoken language
            af: 'afrikaans',
            sq: 'albán',
            ar: 'arab',
            hy: 'örmény',
            ca: 'katalán',
            zh: 'kínai',
            hr: 'horvát',
            cs: 'cseh',
            da: 'dán',
            nl: 'holland',
            en: 'angol',
            fi: 'finn',
            fr: 'francia',
            de: 'német',
            el: 'görög',
            ht: 'haiti kreol',
            hi: 'hindu',
            hu: 'magyar',
            is: 'izlandi',
            id: 'indonéz',
            it: 'olasz',
            ja: 'japán',
            ko: 'koreai',
            la: 'latin',
            lv: 'lett',
            mk: 'macedón',
            no: 'norvég',
            pl: 'lengyel',
            pt: 'portugál',
            ro: 'román',
            ru: 'orosz',
            sr: 'szerb',
            sk: 'szlovák',
            es: 'spanyol',
            sw: 'szuahéli',
            sv: 'svéd',
            ta: 'tamil',
            tr: 'török',
            vi: 'vietnami',
            cy: 'walesi'
        },
        langsNote: 'Nyelvek csak visszajátszásra – nem fordításra',
        resizeTitle: 'A QR-kód átméretezése',
        linkTitle: 'Ennek a QR-kód képnek a címe',
        imgTitle: 'A QR-kód visszajátszásához mentse el/szkennelje be ezt a képet, vagy másolja le a fenti címet.',
        facebookButton: 'Tetszik',
        twitterButton: 'Tweet',
        intls: [ // user interface language
            {
                id: 'en-US',
                name: 'angol (egyesült államokbeli)',
                ownName: 'English (United States)'
            },
            {
                id: 'es-419',
                name: 'spanyol (latin-amerikai)',
                ownName: 'español (Latinoamérica)'
            },
            {
                id: 'fr',
                name: 'francia',
                ownName: 'français'
            },
            {
                id: 'hu',
                name: 'magyar'
            },
            {
                id: 'it',
                name: 'olasz',
                ownName: 'italiano'
            },
            {
                id: 'ja',
                name: 'japán',
                ownName: '日本語'
            },
            {
                id: 'pt-BR',
                name: 'portugál (brazíl)',
                ownName: 'português (Brasil)'
            }/*,
            {
                id: 'zh-CN',
                name: 'kínai (Egyszerűsített Han)',
                ownName: '中文（简体中文）'
            }*/
        ],
        intlsTitle: 'A felhasználói felület nyelve',
        disclaimer: 'Jogi nyilatkozat: nincs semmilyen kapcsolat a QR Voice és a Yahoo!&trade; Inc., a Google&trade; Inc. vagy a bitly&trade; Inc. között.'
    });
}, '0.0.1');
