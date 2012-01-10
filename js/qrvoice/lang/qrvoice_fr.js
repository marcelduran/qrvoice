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
        whichLang: 'in {lang}', // {lang} will be replaced by a language e.g: in English
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
        resizeTitle: 'resize qr-code',
        linkTitle: 'link to this qr-code image',
        imgTitle: 'qr-code to message playback, save/scan this image or copy link above',
        facebookButton: 'J\'aime',
        twitterButton: 'Tweeter',
        intls: [ // user interface language
            {
                id: 'en-US',
                name: 'anglais (États-Unis)',
                ownName: 'English (United States)'
            },
            {
                id: 'es-419',
                name: 'espagnol (Amérique latine)',
                ownName: 'español (Latinoamérica)'
            },
            {
                id: 'fr',
                name: 'français'
            },
            {
                id: 'it',
                name: 'italien',
                ownName: 'italiano'
            },
            {
                id: 'ja',
                name: 'japonais',
                ownName: '日本語'
            },
            {
                id: 'pt-BR',
                name: 'portugais (Brésil)',
                ownName: 'português (Brasil)'
            }/*,
            {
                id: 'zh-CN',
                name: 'chinois (idéogrammes han simplifiés)',
                ownName: '中文（简体中文）'
            }*/
        ],
        intlsTitle: 'user interface language',
        disclaimer: 'disclaimer: qrvoice is not affiliated with Yahoo!&trade; Inc., Google&trade; Inc. or bitly&trade; Inc. in any way.'
    });
}, '0.0.1');

