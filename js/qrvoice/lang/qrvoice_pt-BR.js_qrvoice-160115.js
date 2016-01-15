/* Copyright (c) 2016, Marcel Duran */
YUI.add("lang/qrvoice_pt-BR",function(a){"use strict";a.Intl.add("qrvoice","pt-BR",{direction:"ltr",description:"Gerador de QR-code para mensagem de voz sintetizada",tagline:"quando uma imagem vale cem caracteres",help:"ajuda",faq:"perguntas frequentes",faqFile:"faq_pt-BR.html",placeholder:"dizer o quê?",msgTitle:"texto à ser falado (no máximo 100 caracteres)",genLabel:"gerar",genTitle:"gerar qr-voice",whichLang:"em {lang}",spokenLang:"Língua falada",langs:{af:"africâner",sq:"albanês",ar:"árabe",hy:"armênio",ca:"catalão",zh:"chinês",hr:"croata",cs:"tcheco",da:"dinamarquês",nl:"holandês",en:"inglês",eg:"inglês britânico",fi:"finlandês",fr:"francês",de:"alemão",el:"grego",ht:"crioulo haitiano",hi:"hindi",hu:"húngaro",is:"islandês",id:"indonésio",it:"italiano",ja:"japonês",ko:"coreano",la:"latim",lv:"letão",mk:"macedônio",no:"norueguês",pl:"polonês",pt:"português",ro:"romeno",ru:"russo",sr:"sérvio",sk:"eslovaco",es:"espanhol",sw:"suaíli",sv:"sueco",ta:"tâmil",tr:"turco",vi:"vietnamita",cy:"galês"},langsNote:"línguas para reprodução de áudio, não para tradução",linkTitle:"link para esta imagem de qr-code",imgTitle:"qr-code para reproduzir a mensagem, salve/capture esta imagem ou copie o link acima",facebookButton:"Curtir",twitterButton:"Tweetar",intls:[{id:"en-US",name:"inglês (Estados Unidos)",ownName:"English (United States)"},{id:"es-419",name:"espanhol (América Latina)",ownName:"español (Latinoamérica)"},{id:"fr",name:"francês",ownName:"français"},{id:"hu",name:"húngaro",ownName:"magyar"},{id:"it",name:"italiano",ownName:"italiano"},{id:"ja",name:"japonês",ownName:"日本語"},{id:"pt-BR",name:"português (Brasil)"},{id:"zh-CN",name:"chinês (han simplificado)",ownName:"简体中文"},{id:"zh-TW",name:"chinês (han tradicional)",ownName:"繁體中文"}],intlsTitle:"idioma da interface do usuário",disclaimer:"nota: qrvoice não é afiliado ao Yahoo!&trade; Inc., Google&trade; Inc. ou bitly&trade; Inc. em qualquer forma."})},"0.0.20");;YUI.add("qrvoice",function(e){"use strict";var t,n,l,a,s,i,o,r,c,g,d,u,p="qrvoice",h=p,f="R_4f67037aede6407a9cac9e9073c86192",m="http://my.qrvoice.net/",v="http://api.bitly.com/v3/shorten?login="+h+"&apiKey="+f+"&longUrl={url}&format=json&callback={callback}",C="http://translate.google.com/translate_tts?ie=UTF-8&client=t&q={msg}&tl={lang}",b="http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=547x547&chl={url}",q="http://www.facebook.com/sharer.php?t=QR%20voice&u=http%253A%252F%252Fqrvoice.net%2F%3Fid%3D{id}",w="http://twitter.com/share?source=tweetbutton&text=QR%20voice&url=http%3A%2F%2Fqrvoice.net%2F%3Fid%3D{id}",y=11,k="hidden",F="lng-sel",T="invis",j=".lbl",L="body",I="#qrlink",S="#qrcopy",U="#help",x="#lang",N=e.one,R=e.Intl,A=R.get(p),B=e.Lang,D=B.sub,O=e.config.win,Y=O.location,_=O.navigator,z=e.StorageLite,M=z.getItem,Q=z.setItem,X=e.Node,G=X.create,K=e.Object.each,P=e.Array,$=P.each,E=X.getDOMNode,H=encodeURIComponent,J=(Math.round,""),V=null,W="value",Z="lang",ee="placeholder",te="title",ne="click",le="rtl",ae="id",se="href",ie=/^[\d\w\-_]+$/,oe=A.langs,re=_.userLanguage||_.language,ce=re.slice(0,2).toLowerCase(),ge=0,de=N(L),ue=N("#form"),pe=N("#msg"),he=N("#qrcode-wrp"),fe=N(I),me=N(S),ve=E(me),Ce=N("#lang-lst"),be=N("#lang-name"),qe=N("#social .facebook"),we=N("#social .twitter"),ye=N("#help-panel"),ke=function(){var e=O.history;return e&&e.replaceState?function(t){e.replaceState(V,V,t?"?"+t:"/")}:function(e){Y.hash=e}}(),Fe=function(e,t){pe.get(W)||a.setXY(t||pe.getXY()),e&&e.halt()},Te=function(e){return e.toLowerCase().replace(/[áãâ]/g,"a").replace(/[éê]/g,"e").replace(/[í]/g,"i").replace(/[ô]/g,"o").replace(/[ú]/g,"u").replace(/[ç]/g,"c").replace(/[ñ]/g,"n")},je=function(e,t){var n=Te(e.name),l=Te(t.name);return l>n?-1:1},Le=function(){return"zh"===r?"zh-CN":"eg"===r?"en-GB":r},Ie=function(e){oe.hasOwnProperty(e)||(e="en"),r=e,pe.set(Z,Le()),be.setContent(D(A.whichLang,{lang:oe[e]})),Q(Z,e)},Se=function(e){var t,n,l;for(e=e.split("."),n=e.length,t=0;n>t;t++)l=parseInt(e[t],36)-n,e[t]=String.fromCharCode(l);return{lang:e[0]+e[n-1],text:e.slice(1,n-1).reverse().join(J)}},Ue=function(e,t){var n,l,a,s;for(t=t.split(J),s=[t[0]].concat(e.split(J).reverse(),t[1]),n=0,l=s.length;l>n;n++)a=s[n].charCodeAt(0)+l,s[n]=a.toString(36);return s.join(".")},xe=function(e){me.removeClass(T),me.set(W,e),ve.focus(),ve.select()},Ne=function(e,t,n){d||(d=G(D('<img id="qrcode" alt="{alt}">',{alt:A.imgTitle})),he.append(d)),d.set("src",t),he.set(se,t),qe.set(se,D(q,{id:e})),we.set(se,D(w,{id:e})),n||ke("id="+e)},Re=function(e,t){var n,l;return n=D(C,{msg:e,lang:Le()}),l=D(b,{url:H(n)})},Ae=function(e,t){var n=e&&e.data;n&&(Ne(n.hash,n.url),xe(m+n.hash))},Be=function(e){var t,n=pe.get(W),l=Le();e.halt(),!n||c===n&&g===l||(c=n,g=l,n=H(n),t=Ue(n,r),u=Re(n,l),Ne(t,u),fe.removeClass(T),me.addClass(T),me.set(W,J))};de.setStyle("visibility","visible"),ue.on("submit",Be),de.delegate(ne,function(e){e.halt(),Ce.toggleClass(k)},x),de.delegate(ne,function(e){e.halt(),N("#help-img").setStyle("background","url(/images/help.jpg) no-repeat"),ye.toggleClass(T)},U),de.delegate(ne,function(e){e.target.ancestor(x)||Ce.addClass(k),e.target.test(U)||ye.addClass(T)},L),de.delegate(ne,function(e){var t=e.target;e.preventDefault(),N("#lng-"+r).removeClass(F),t.addClass(F),Ie(t.get(ae).slice(4))},".lng"),de.delegate("click",function(t){t.halt(),fe.addClass(T),e.jsonp(D(v,{url:H(u)}),{on:{success:Ae}})},I),n=Y.search,t=n.lastIndexOf("/"),t=t>-1?t:n.length,l=n.slice(1,t).split("&").concat(Y.hash.slice(1).split("&")),P.some(l,function(e){var t,n,l=e.split("="),a=l[1];return l[0]===ae&&a?(ie.test(a)?(t=m+a,xe(t)):(n=Se(a),Ie(n.lang),u=Re(n.text,n.lang),t=u,fe.removeClass(T)),Ne(a,t,1),1):void 0}),A.direction===le&&de.addClass(le),N(U).setContent(A.help).set(se,A.faqFile).removeClass(k),N("#faq").setContent(A.faq).set(se,A.faqFile),N("#tagline").setContent(A.tagline),pe.set(ee,A.placeholder).set(te,A.msgTitle),N("#lbl-msg").setContent(A.msgTitle),N("#gen").set(te,A.genTitle),N("#lbl-gen").setContent(A.genLabel),fe.setContent(A.linkTitle).set(te,A.linkTitle),he.set(te,A.imgTitle),N("#lbl-intls").setContent(A.intlsTitle),N("#disclaimer").setContent(A.disclaimer),qe.one(j).setContent(A.facebookButton),we.one(j).setContent(A.twitterButton),A.description&&N("meta[name=description]").set("content",A.description),B.isUndefined(E(G("<input>"))[ee])&&(a=G(D('<label class="{cls}" for="msg">{lbl}</label>',{cls:ee,lbl:A.placeholder})),ue.append(a),Fe(),pe.on("focus",Fe,V,[0,-1e4]),pe.on("blur",Fe)),o=J,s=R.getLang(p),$(A.intls.sort(je),function(e){var t=e.id,n=e.ownName;o+=D('<option value="{id}"{sel}>{opt}</option>',{id:t,sel:t===s?" selected":J,opt:e.name+(n?" - "+n:J)})}),i=G(D('<select id="intls" title="{title}">{opts}</select>',{title:A.intlsTitle,opts:o})),de.one("#intls-wrp").append(i),i.on("change",function(){var e=i.get("options").item(i.get("selectedIndex")).get(W);Q("intl",e),Y.reload()}),z.on("storage-lite:ready",function(){var e=[];he.removeClass(k),Ie(M(Z)||ce),o=D('<div id="lang-hd">{title}</div><ul class="lang-col">',{title:A.spokenLang}),K(oe,function(t,n){e.push({id:n,name:t})}),$(e.sort(je),function(e){var t=e.id;o+=D('<li><a class="lng{cls}" href="#" id="lng-{id}">{name}</a></li>',{cls:t===r?" "+F:J,id:t,name:e.name}),ge+=1,ge%y===0&&(o+='</ul><ul class="lang-col">')}),o+=D('</ul><div id="lang-ft">{note}</div>',{note:A.langsNote}),Ce.setContent(o)})},"0.0.20",{lang:["en-US","es-419","it","ja","pt-BR"],requires:["node","json","jsonp","dd-constrain","gallery-center","gallery-storage-lite"]});