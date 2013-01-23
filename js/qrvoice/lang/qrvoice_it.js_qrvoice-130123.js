/* Copyright (c) 2013, Marcel Duran */
YUI.add("lang/qrvoice_it",function(e){"use strict";e.Intl.add("qrvoice","it",{direction:"ltr",tagline:"quando una imagine vale più che cento lettere",help:"aiuto",faq:"faq",faqFile:"faq_en-US.html",placeholder:"che vuoi dire?",msgTitle:"testo che vuoi tradurre (massimo 100 lettere)",genLabel:"generare",genTitle:"generare qr-voice",whichLang:"in {lang}",spokenLang:"Lingua parlata",langs:{af:"afrikaans",sq:"albanese",ar:"arabo",hy:"armeno",ca:"catalano",zh:"cinese",hr:"croato",cs:"ceco",da:"danese",nl:"olandese",en:"inglese",fi:"finlandese",fr:"francese",de:"tedesco",el:"greco",ht:"creolo haitiano",hi:"hindi",hu:"ungherese",is:"islandese",id:"indonesiano",it:"italiano",ja:"giapponese",ko:"coreano",la:"latino",lv:"lettone",mk:"macedone",no:"norvegese (Bokmål)",pl:"polacco",pt:"portoghese",ro:"rumeno",ru:"russo",sr:"serbo",sk:"slovacco",es:"spagnolo",sw:"svedese",sv:"swahili",ta:"tamil",tr:"turco",vi:"vietnamita",cy:"gallese"},langsNote:"lingue solo per riproduzione, nessuna traduzione",resizeTitle:"ridimensionare qr-code",linkTitle:"link per la qr-code imagine",imgTitle:"qr-code per la riproduzione del messaggio, salvare/catturare questa imagine o copiare il link",facebookButton:"Mi piace",twitterButton:"Tweet",intls:[{id:"en-US",name:"inglese (Stati Uniti)",ownName:"English (United States)"},{id:"es-419",name:"spagnolo (America Latina)",ownName:"español (Latinoamérica)"},{id:"fr",name:"francese",ownName:"français"},{id:"hu",name:"ungherese",ownName:"magyar"},{id:"it",name:"italiano"},{id:"ja",name:"giapponese",ownName:"日本語"},{id:"pt-BR",name:"portoghese (Brasile)",ownName:"português (Brasil)"}],intlsTitle:"lingua del user",disclaimer:"nota: qrvoice non é affiliato con Yahoo!&trade; Inc., Google&trade; Inc. o bitly&trade; Inc. in nessuna forma."})},"0.0.10");YUI.add("qrvoice",function(e){"use strict";var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m="qrvoice",g=m,y="R_039525bc02a0dbe1e6456752fdc17997",b="http://my.qrvoice.net/",w="http://api.bitly.com/v3/shorten?login="+g+"&apiKey="+y+"&longUrl={url}&format=json&callback={callback}",E="http://translate.google.com/translate_tts?ie=UTF-8&q={msg}&tl={lang}",S="http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs={size}x{size}&chl={url}",x="http://www.facebook.com/sharer.php?t=QR%20voice&u=http%253A%252F%252Fqrvoice.net%2F%3Fid%3D{id}",T="http://twitter.com/share?source=tweetbutton&text=QR%20voice&url=http%3A%2F%2Fqrvoice.net%2F%3Fid%3D{id}",N=33,C=547,k=10,L="hidden",A="lng-sel",O="invis",M=".lbl",_="body",D="#qrlink",P="#qrcopy",H="#help",B="#lang",j=e.one,F=e.Intl,I=F.get(m),q=e.Lang,R=q.sub,U=e.config.win,z=U.location,W=U.navigator,X=e.StorageLite,V=X.getItem,$=X.setItem,J=e.Node,K=J.create,Q=e.Object.each,G=e.Array,Y=G.each,Z=J.getDOMNode,et=encodeURIComponent,tt=Math.round,nt=null,rt="value",it="lang",st="placeholder",ot="title",ut="click",at="size",ft="rtl",lt="id",ct="href",ht=/[\d\w\-_]/g,pt=I.langs,dt=W.userLanguage||W.language,vt=dt.slice(0,2).toLowerCase(),mt=0,gt=j(_),yt=j("#form"),bt=j("#msg"),wt=j("#size"),Et=j("#slider-thumb"),St=j("#qrcode-wrp"),xt=j(D),Tt=j(P),Nt=Z(Tt),Ct=j("#slider-box"),kt=j("#lang-lst"),Lt=j("#lang-name"),At=j("#social .facebook"),Ot=j("#social .twitter"),Mt=j("#help-panel"),_t=(new e.apm.SimpleSlider({node:Ct})).render(),Dt=function(){var e=U.history;return e&&e.replaceState?function(t){e.replaceState(nt,nt,t?"?"+t:"/")}:function(e){z.hash=e}}(),Pt=function(e,t){bt.get(rt)||s.setXY(t||bt.getXY()),e&&e.halt()},Ht=function(e){return e.toLowerCase().replace(/[áãâ]/g,"a").replace(/[éê]/g,"e").replace(/[í]/g,"i").replace(/[ô]/g,"o").replace(/[ú]/g,"u").replace(/[ç]/g,"c").replace(/[ñ]/g,"n")},Bt=function(e,t){var n=Ht(e.name),r=Ht(t.name);return n<r?-1:1},jt=function(){return l==="zh"?"zh-CN":l},Ft=function(e){pt.hasOwnProperty(e)||(e="en"),l=e,bt.set(it,jt()),Lt.setContent(R(I.whichLang,{lang:pt[e]})),$(it,e)},It=function(e,t){var n,r,i=e&&e.data;if(!i)return;n=i.url,r=i.hash,v||(v=K(R('<img id="qrcode" alt="{alt}">',{alt:I.imgTitle})),St.append(v)),v.set("src",n),St.set(ct,n),xt.set(ct,n).setContent(n),At.set(ct,R(x,{id:r})),Ot.set(ct,R(T,{id:r})),t||Dt("id="+r)},qt=function(t){var n,r,i=t&&t.data;if(!i)return;n=R(S,{size:u,url:et(i.url)}),r=R(w,{url:et(n)}),e.jsonp(r,{on:{success:It}})},Rt=function(t){var n,r,i=bt.get(rt),s=jt();t.halt(),i&&(c!==i||h!==s)&&(c=i,h=s,e.log(i),i=et(i),e.log(i),n=R(E,{msg:i,lang:s}),e.log(n),r=R(w,{url:et(n)}),e.log(r),e.jsonp(r,{on:{success:qt}}))};gt.setStyle("visibility","visible"),yt.on("submit",Rt),gt.delegate(ut,function(e){e.halt(),kt.toggleClass(L)},B),gt.delegate(ut,function(e){e.halt(),j("#help-img").setStyle("background","url(/images/help.jpg) no-repeat"),Mt.toggleClass(O)},H),gt.delegate(ut,function(e){e.target.ancestor(B)||kt.addClass(L),e.target.test(H)||Mt.addClass(O)},_),gt.delegate(ut,function(e){var t=e.target;e.preventDefault(),j("#lng-"+l).removeClass(A),t.addClass(A),Ft(t.get(lt).slice(4))},".lng"),gt.delegate("mouseover",function(){xt.addClass(O),Tt.removeClass(O).set(rt,xt.getContent()),Nt.focus(),Nt.select()},D),gt.delegate("mouseout",function(){xt.removeClass(O),Tt.addClass(O)},P),_t.on("valueChange",function(e){var n=d||tt(e.newVal[0]*t)+N;d=0,n=n<N?N:n>C?C:n,u=n,$(at,n),wt.setContent(n+"x"+n),St.setStyles({height:n,width:n})}),r=z.search,n=r.lastIndexOf("/"),n=n>-1?n:r.length,i=r.slice(1,n).split("&").concat(z.hash.slice(1).split("&")),G.some(i,function(e){var t=e.split("="),n=t[1];if(t[0]===lt&&ht.test(n))return It({data:{url:b+n,hash:n}},1),1}),I.direction===ft&&gt.addClass(ft),j(H).setContent(I.help).set(ct,I.faqFile).removeClass(L),j("#faq").setContent(I.faq).set(ct,I.faqFile),j("#tagline").setContent(I.tagline),bt.set(st,I.placeholder).set(ot,I.msgTitle),j("#lbl-msg").setContent(I.msgTitle),j("#gen").set(ot,I.genTitle),j("#lbl-gen").setContent(I.genLabel),Et.set(ot,I.resizeTitle),xt.set(ot,I.linkTitle),St.set(ot,I.imgTitle),j("#lbl-intls").setContent(I.intlsTitle),j("#disclaimer").setContent(I.disclaimer),At.one(M).setContent(I.facebookButton),Ot.one(M).setContent(I.twitterButton),q.isUndefined(Z(K("<input>"))[st])&&(s=K(R('<label class="{cls}" for="msg">{lbl}</label>',{cls:st,lbl:I.placeholder})),yt.append(s),Pt(),bt.on("focus",Pt,nt,[0,-1e4]),bt.on("blur",Pt)),f="",o=F.getLang(m),Y(I.intls.sort(Bt),function(e){var t=e.id,n=e.ownName;f+=R('<option value="{id}"{sel}>{opt}</option>',{id:t,sel:t===o?" selected":"",opt:e.name+(n?" - "+n:"")})}),a=K(R('<select id="intls" title="{title}">{opts}</select>',{title:I.intlsTitle,opts:f})),gt.one("#intls-wrp").append(a),a.on("change",function(){var e=a.get("options").item(a.get("selectedIndex")).get(rt);$("intl",e),z.reload()}),X.on("storage-lite:ready",function(){var e=[];p=parseInt(Ct.getStyle("width"),10),t=(C-N+1)/p,u=V(at),u?d=u:u=p,_t.update([tt((u-N)/t),0]),Et.removeClass(L),St.removeClass(L),Ft(V(it)||vt),f=R('<div id="lang-hd">{title}</div><ul class="lang-col">',{title:I.spokenLang}),Q(pt,function(t,n){e.push({id:n,name:t})}),Y(e.sort(Bt),function(e){var t=e.id;f+=R('<li><a class="lng{cls}" href="#" id="lng-{id}">{name}</a></li>',{cls:t===l?" "+A:"",id:t,name:e.name}),mt+=1,mt%k===0&&(f+='</ul><ul class="lang-col">')}),f+=R('</ul><div id="lang-ft">{note}</div>',{note:I.langsNote}),kt.setContent(f)})},"0.0.10",{lang:["en-US","es-419","it","ja","pt-BR"],requires:["node","json","jsonp","dd-constrain","gallery-center","gallery-simpleslider","gallery-storage-lite"]})