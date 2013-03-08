/* Copyright (c) 2013, Marcel Duran */

/*global YUI*/
YUI.add('lang/qrvoice_pt-BR', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'pt-BR', {
        direction: 'ltr', // left-to-right
        description: 'Gerador de QR-code para mensagem de voz sintetizada',
        tagline: 'quando uma imagem vale cem caracteres',
        help: 'ajuda',
        faq: 'perguntas frequentes',
        faqFile: 'faq_pt-BR.html',
        placeholder: 'dizer o quê?',
        msgTitle: 'texto à ser falado (no máximo 100 caracteres)',
        genLabel: 'gerar',
        genTitle: 'gerar qr-voice',
        whichLang: 'em {lang}', // {lang} will be replaced by a language e.g: in English
        spokenLang: 'Língua falada',
        langs: { // message spoken language
            af: 'africâner',
            sq: 'albanês',
            ar: 'árabe',
            hy: 'armênio',
            ca: 'catalão',
            zh: 'chinês',
            hr: 'croata',
            cs: 'tcheco',
            da: 'dinamarquês',
            nl: 'holandês',
            en: 'inglês',
            fi: 'finlandês',
            fr: 'francês',
            de: 'alemão',
            el: 'grego',
            ht: 'crioulo haitiano',
            hi: 'hindi',
            hu: 'húngaro',
            is: 'islandês',
            id: 'indonésio',
            it: 'italiano',
            ja: 'japonês',
            ko: 'coreano',
            la: 'latim',
            lv: 'letão',
            mk: 'macedônio',
            no: 'norueguês',
            pl: 'polonês',
            pt: 'português',
            ro: 'romeno',
            ru: 'russo',
            sr: 'sérvio',
            sk: 'eslovaco',
            es: 'espanhol',
            sw: 'suaíli',
            sv: 'sueco',
            ta: 'tâmil',
            tr: 'turco',
            vi: 'vietnamita',
            cy: 'galês'
        },
        langsNote: 'línguas para reprodução de áudio, não para tradução',
        resizeTitle: 'redimensionar qr-code',
        linkTitle: 'link para esta imagem de qr-code',
        imgTitle: 'qr-code para reproduzir a mensagem, salve/capture esta imagem ou copie o link acima',
        facebookButton: 'Curtir',
        twitterButton: 'Tweetar',
        intls: [ // user interface language
            {
                id: 'en-US',
                name: 'inglês (Estados Unidos)',
                ownName: 'English (United States)'
            },
            {
                id: 'es-419',
                name: 'espanhol (América Latina)',
                ownName: 'español (Latinoamérica)'
            },
            {
                id: 'fr',
                name: 'francês',
                ownName: 'français'
            },
            {
                id: 'hu',
                name: 'húngaro',
                ownName: 'magyar'
            },
            {
                id: 'it',
                name: 'italiano',
                ownName: 'italiano'
            },
            {
                id: 'ja',
                name: 'japonês',
                ownName: '日本語'
            },
            {
                id: 'pt-BR',
                name: 'português (Brasil)'
            },
            {
                id: 'zh-CN',
                name: 'chinês (han simplificado)',
                ownName: '简体中文'
            },
            {
                id: 'zh-TW',
                name: 'chinês (han tradicional)',
                ownName: '繁體中文'
            },
        ],
        intlsTitle: 'idioma da interface do usuário',
        disclaimer: 'nota: qrvoice não é afiliado ao Yahoo!&trade; Inc., Google&trade; Inc. ou bitly&trade; Inc. em qualquer forma.'
    });
}, '0.0.1');
