/* Copyright (c) 2011, Marcel Duran */

/*global YUI*/
YUI.add('lang/qrvoice_pt-BR', function (Y) {
    'use strict';
    Y.Intl.add('qrvoice', 'pt-BR', {
        direction: 'ltr', // left-to-right
        tagline: 'quando uma imagem vale literalmente mil palavras',
        placeholder: 'dizer o quê?',
        msgTitle: 'texto à ser falado (no máximo 99 caracteres)',
        genLabel: 'gerar',
        genTitle: 'gerar qr-voice',
        whichLang: 'em {lang}',
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
        'resizeTitle': 'redimensionar qr-code',
        linkTitle: 'link para esta imagem de qr-code',
        imgTitle: 'qr-code para reproduzir a mensagem, salve/capture esta imagem ou copie o link acima',
        facebookButton: 'Curtir',
        twitterButton: 'Tweetar',
        intls: { // user interface language
            'en-US': {
                name: 'inglês (Estados Unidos)',
                ownName: 'English (United States)'
            },
            'pt-BR': {
                name: 'português (Brasil)'
            }
        },
        intlsTitle: 'idioma da interface do usuário',
        disclaimer: 'nota: qrvoice não é afiliado ao Yahoo!&trade; Inc., Google&trade; Inc. ou bitly&trade; Inc. em qualquer forma.'
    });
}, '0.0.1');
