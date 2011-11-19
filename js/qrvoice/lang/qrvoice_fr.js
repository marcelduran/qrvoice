/* Copyright (c) 2011, Marcel Duran */

/*global YUI*/
YUI.add('lang/qrvoice_fr', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'fr', {
        direction: 'ltr', // left-to-right
        tagline: 'when a picture is worth a hundred characters',
        help: 'help',
        faq: 'f.a.q',
        faqFile: 'faq_en-US.html',
        placeholder: 'say what?',
        msgTitle: 'text to speech (100 characters maximum length)',
        genLabel: 'generate',
        genTitle: 'generate qr-voice',
        whichLang: 'in {lang}',
        spokenLang: 'Spoken language',
        langs: { // message spoken language
            af: 'Afrikaans',
            sq: 'Albanian',
            ar: 'Arabic',
            hy: 'Armenian',
            ca: 'Catalan',
            zh: 'Chinese',
            hr: 'Croatian',
            cs: 'Czech',
            da: 'Danish',
            nl: 'Dutch',
            en: 'English',
            fi: 'Finnish',
            fr: 'French',
            de: 'German',
            el: 'Greek',
            ht: 'Haitian Creole',
            hi: 'Hindi',
            hu: 'Hungarian',
            is: 'Icelandic',
            id: 'Indonesian',
            it: 'Italian',
            ja: 'Japanese',
            ko: 'Korean',
            la: 'Latin',
            lv: 'Latvian',
            mk: 'Macedonian',
            no: 'Norwegian',
            pl: 'Polish',
            pt: 'Portuguese',
            ro: 'Romanian',
            ru: 'Russian',
            sr: 'Serbian',
            sk: 'Slovak',
            es: 'Spanish',
            sw: 'Swahili',
            sv: 'Swedish',
            ta: 'Tamil',
            tr: 'Turkish',
            vi: 'Vietnamese',
            cy: 'Welsh'
        },
        langsNote: 'languages for playback only, not for translation',
        'resizeTitle': 'resize qr-code',
        linkTitle: 'link to this qr-code image',
        imgTitle: 'qr-code to message playback, save/scan this image or copy link above',
        facebookButton: 'Like',
        twitterButton: 'Tweet',
        intls: { // user interface language
            'en-US': {
                name: 'English (United States)',
                ownName: 'English (United States)'
            },
            'es-419': {
                name: 'Spanish (Latin America)',
                ownName: 'español (Latinoamérica)'
            },
            'fr': {
                name: 'français'
            },
            'ja': {
                name: 'Japanese',
                ownName: '日本語'
            },
            'pt-BR': {
                name: 'Portuguese',
                ownName: 'português (Brasil)'
            },
            'zh-CN': {
                name: 'Chinese (Simplified)',
                ownName: '中文（简体中文）'
            }
        },
        intlsTitle: 'user interface language',
        disclaimer: 'disclaimer: qrvoice is not affiliated with Yahoo!&trade; Inc., Google&trade; Inc. or bitly&trade; Inc. in any way.'
    });
}, '0.0.1');

