/* Copyright (c) 2015, Marcel Duran */
/* Translation by Giuliana Mesquita (giuliana_mesquita@hotmail.com) */

/*global YUI*/
YUI.add('lang/qrvoice_it', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'it', {
        direction: 'ltr', // left-to-right
        tagline: 'quando una imagine vale più che cento lettere',
        help: 'aiuto',
        faq: 'faq',
        faqFile: 'faq_en-US.html',
        placeholder: 'che vuoi dire?',
        msgTitle: 'testo che vuoi tradurre (massimo 100 lettere)',
        genLabel: 'generare',
        genTitle: 'generare qr-voice',
        whichLang: 'in {lang}',
        spokenLang: 'Lingua parlata',
        langs: { // message spoken language
            af: 'afrikaans',
            sq: 'albanese',
            ar: 'arabo',
            hy: 'armeno',
            ca: 'catalano',
            zh: 'cinese',
            hr: 'croato',
            cs: 'ceco',
            da: 'danese',
            nl: 'olandese',
            en: 'inglese',
            fi: 'finlandese',
            fr: 'francese',
            de: 'tedesco',
            el: 'greco',
            ht: 'creolo haitiano',
            hi: 'hindi',
            hu: 'ungherese',
            is: 'islandese',
            id: 'indonesiano',
            it: 'italiano',
            ja: 'giapponese',
            ko: 'coreano',
            la: 'latino',
            lv: 'lettone',
            mk: 'macedone',
            no: 'norvegese (Bokmål)',
            pl: 'polacco',
            pt: 'portoghese',
            ro: 'rumeno',
            ru: 'russo',
            sr: 'serbo',
            sk: 'slovacco',
            es: 'spagnolo',
            sw: 'svedese',
            sv: 'swahili',
            ta: 'tamil',
            tr: 'turco',
            vi: 'vietnamita',
            cy: 'gallese'
        },
        langsNote: 'lingue solo per riproduzione, nessuna traduzione',
        linkTitle: 'link per la qr-code imagine',
        imgTitle: 'qr-code per la riproduzione del messaggio, salvare/catturare questa imagine o copiare il link',
        facebookButton: 'Mi piace',
        twitterButton: 'Tweet',
        intls: [ // user interface language
            {
                id: 'en-US',
                name: 'inglese (Stati Uniti)',
                ownName: 'English (United States)'
            },
            {
                id: 'es-419',
                name: 'spagnolo (America Latina)',
                ownName: 'español (Latinoamérica)'
            },
            {
                id: 'fr',
                name: 'francese',
                ownName: 'français'
            },
            {
                id: 'hu',
                name: 'ungherese',
                ownName: 'magyar'
            },
            {
                id: 'it',
                name: 'italiano'
            },
            {
                id: 'ja',
                name: 'giapponese',
                ownName: '日本語'
            },
            {
                id: 'pt-BR',
                name: 'portoghese (Brasile)',
                ownName: 'português (Brasil)'
            },
            {
                id: 'zh-CN',
                name: 'cinese (han semplificato)',
                ownName: '简体中文'
            },
            {
                id: 'zh-TW',
                name: 'cinese (han tradizionale)',
                ownName: '繁體中文'
            }
        ],
        intlsTitle: 'lingua del user',
        disclaimer: 'nota: qrvoice non é affiliato con Yahoo!&trade; Inc., Google&trade; Inc. o bitly&trade; Inc. in nessuna forma.'
    });
}, '0.0.1');

