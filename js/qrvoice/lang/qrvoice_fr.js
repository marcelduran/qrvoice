/* Copyright (c) 2012, Marcel Duran */
/* Translation by Romain Laboisse (labrom@gmail.com) */

/*global YUI*/
YUI.add('lang/qrvoice_fr', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'fr', {
        direction: 'ltr', // left-to-right
        tagline: 'quand une image vaut mille mots',
        help: 'aide',
        faq: 'foire aux questions',
        faqFile: 'faq_en-US.html',
        placeholder: 'que voulez-vous dire?',
        msgTitle: 'texte à lire (100 caractères maximum)',
        genLabel: 'générer',
        genTitle: 'générer un qr-voice',
        whichLang: 'en {lang}', // {lang} will be replaced by a language e.g: in English
        spokenLang: 'Langue parlée',
        langs: { // message spoken language
            af: 'afrikaans',
            sq: 'albanais',
            ar: 'arabe',
            hy: 'arménien',
            ca: 'catalan',
            zh: 'chinois',
            hr: 'croate',
            cs: 'tchèque',
            da: 'danois',
            nl: 'néerlandais',
            en: 'anglais',
            fi: 'finnois',
            fr: 'français',
            de: 'allemand',
            el: 'grec',
            ht: 'créole haïtien',
            hi: 'hindi',
            hu: 'hongrois',
            is: 'islandais',
            id: 'indonésien',
            it: 'italien',
            ja: 'japonais',
            ko: 'coréen',
            la: 'latin',
            lv: 'letton',
            mk: 'macédonien',
            no: 'norvégien',
            pl: 'polonais',
            pt: 'portugais',
            ro: 'roumain',
            ru: 'russe',
            sr: 'serbe',
            sk: 'slovaque',
            es: 'espagnol',
            sw: 'swahili',
            sv: 'suédois',
            ta: 'tamul',
            tr: 'turc',
            vi: 'vietnamien',
            cy: 'gallois'
        },
        langsNote: 'les langues s\'appliquent uniquement à la lecture audio, pas à la traduction',
        resizeTitle: 'redimensionner le qr-code',
        linkTitle: 'lien vers l\'image du qr-code',
        imgTitle: 'qr-code permettant de lire le message, sauvegardez ou scannez cette image, ou copiez le lien ci-dessus',
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
        intlsTitle: 'langue de l\'interface utilisateur',
        disclaimer: 'Avertissement: qrvoice n\'est affilié d\'aucune manière à Yahoo!&trade; Inc., Google&trade; Inc. ni bitly&trade; Inc.'
    });
}, '0.0.1');

