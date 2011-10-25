/*global YUI*/
YUI.add('lang/qrvoice_en-US', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'en-US', {
        direction: 'ltr', // left-to-right
        tagline: 'when a picture is literally worth a thousand words',
        placeholder: 'say what?',
        msgTitle: 'text to speech',
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
        imgTitle: 'qr-code to message playback, save/scan this image or use link above',
        intls: { // user interface language
            'en-US': {
                name: 'English (United States)'
            },
            'pt-BR': {
                name: 'Portuguese',
                ownName: 'português (Brasil)'
            }
        },
        intlsTitle: 'user interface language',
        disclaimer: 'disclaimer: qrvoice is not affiliated with Yahoo!&trade; Inc., Google&trade; Inc. or bitly&trade; Inc. in any way.'
    });
}, '0.0.1');

