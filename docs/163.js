"use strict";(self.webpackChunkportfolio_angular_client=self.webpackChunkportfolio_angular_client||[]).push([[163],{5163:($,b,n)=>{n.r(b),n.d(b,{SingleportfolioModule:()=>U});var c=n(6895),a=n(7359),x=n(2340),t=n(6738),v=n(900),m=n(1481),P=n(267),k=n(3158),h=n(1637),u=n(8757);function w(e,r){if(1&e&&(t.TgZ(0,"article")(1,"div",20),t._UZ(2,"div",21),t.ALo(3,"safe"),t.qZA()()),2&e){const o=t.oxw(2);t.xp6(2),t.Q6J("innerHtml",t.xi3(3,1,o.singleProject.article,"html"),t.oJD)}}function M(e,r){1&e&&(t.TgZ(0,"div",22)(1,"h1"),t._uU(2,"Related Project"),t.qZA()())}function C(e,r){if(1&e&&(t.TgZ(0,"div",23)(1,"div",24)(2,"div",25)(3,"div",11),t._UZ(4,"img",12),t.qZA(),t._UZ(5,"div",13),t.qZA(),t.TgZ(6,"div",26)(7,"small"),t._uU(8),t.qZA(),t.TgZ(9,"h6"),t._uU(10),t.qZA()()()()),2&e){const o=r.$implicit;t.xp6(1),t.s9C("routerLink","/project/"+o.slug),t.xp6(3),t.s9C("src",o.image,t.LSH),t.s9C("alt",o.slug),t.xp6(4),t.AsE("",o.developer,", Last Updated ",o.updated_at,"."),t.xp6(2),t.Oqu(o.title)}}function _(e,r){if(1&e&&(t.TgZ(0,"div",8)(1,"article")(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"div",9)(5,"small"),t._uU(6),t.qZA()(),t.TgZ(7,"div",10)(8,"div",11),t._UZ(9,"img",12),t.qZA(),t._UZ(10,"div",13),t.qZA(),t.TgZ(11,"p")(12,"a",14)(13,"button",15),t._uU(14,"GitHub"),t.qZA()(),t.TgZ(15,"a",14)(16,"button",16),t._uU(17,"Preview"),t.qZA()()()(),t.YNc(18,w,4,4,"article",17),t.YNc(19,M,3,0,"div",18),t.TgZ(20,"div",2),t.YNc(21,C,11,6,"div",19),t.qZA()()),2&e){const o=t.oxw();t.xp6(3),t.Oqu(o.singleProject.title),t.xp6(3),t.AsE("",o.singleProject.developer,", Last Updated ",o.singleProject.updated_at,"."),t.xp6(3),t.s9C("src",o.singleProject.image,t.LSH),t.s9C("alt",o.singleProject.slug),t.xp6(3),t.s9C("href",o.singleProject.github_link,t.LSH),t.xp6(3),t.s9C("href",o.singleProject.live_link,t.LSH),t.xp6(3),t.Q6J("ngIf",o.singleProject&&o.singleProject.article),t.xp6(1),t.Q6J("ngIf",o.relatedProject&&o.relatedProject.length>0),t.xp6(2),t.Q6J("ngForOf",o.relatedProject)}}const y=function(){return{"border-radius":"0",height:"15px","background-color":"gray"}},Z=function(){return{"border-radius":"0",height:"15px",width:"60%","background-color":"gray"}},O=function(){return{"border-radius":"0",height:"100%","background-color":"gray"}},p=function(){return{"border-radius":"0",height:"13px","background-color":"gray"}},f=function(){return{"border-radius":"0",height:"13px",width:"90%","background-color":"gray"}},j=function(){return{"border-radius":"0",height:"13px",width:"83%","background-color":"gray"}},T=function(){return{"border-radius":"0",height:"13px",width:"100%","background-color":"gray"}};function S(e,r){1&e&&(t.TgZ(0,"div",8)(1,"div"),t._UZ(2,"ngx-skeleton-loader",27)(3,"ngx-skeleton-loader",27)(4,"ngx-skeleton-loader",27),t.TgZ(5,"div",10)(6,"div",11),t._UZ(7,"ngx-skeleton-loader",27),t.qZA()(),t.TgZ(8,"div"),t._UZ(9,"ngx-skeleton-loader",28)(10,"ngx-skeleton-loader",27)(11,"ngx-skeleton-loader",28)(12,"ngx-skeleton-loader",27)(13,"ngx-skeleton-loader",28)(14,"ngx-skeleton-loader",27)(15,"ngx-skeleton-loader",28)(16,"ngx-skeleton-loader",27),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("theme",t.DdM(12,y)),t.xp6(1),t.Q6J("theme",t.DdM(13,y)),t.xp6(1),t.Q6J("theme",t.DdM(14,Z)),t.xp6(3),t.Q6J("theme",t.DdM(15,O)),t.xp6(2),t.Q6J("theme",t.DdM(16,p)),t.xp6(1),t.Q6J("theme",t.DdM(17,f)),t.xp6(1),t.Q6J("theme",t.DdM(18,p)),t.xp6(1),t.Q6J("theme",t.DdM(19,j)),t.xp6(1),t.Q6J("theme",t.DdM(20,p)),t.xp6(1),t.Q6J("theme",t.DdM(21,f)),t.xp6(1),t.Q6J("theme",t.DdM(22,p)),t.xp6(1),t.Q6J("theme",t.DdM(23,T)))}const A=[{path:"",component:(()=>{class e{constructor(o,i,l,s,d){this.appService=o,this.activatedRoute=i,this.router=l,this.title=s,this.meta=d,this.admin=x.N.admin,this.origin=window.location.origin,this.loader=!0,this.location="",this.relatedProject=[],this.month=["","January","February","March","April","May","June","July","August","September","October","November","December"]}ngOnInit(){var o=document.getElementById("scrollable");this.activatedRoute.params.subscribe(i=>{window.scroll({behavior:"smooth",top:0}),o.scroll({behavior:"smooth",top:0}),setTimeout(()=>{this.singleProject=void 0,this.loader=!0,this.location=window.location.href,this.relatedProject=[],this.getSingleProject(i.id)},500)})}getSingleProject(o){this.projectSubscription=this.appService.readSingleProjectPost(o).subscribe(i=>{if(i){this.loader=!1,this.singleProject=i.data;const l=new Date(this.singleProject.updated_at);this.singleProject.updated_at=`${l.getDate()-1} ${this.month[l.getMonth()+1]} ${l.getFullYear()}`,setTimeout(()=>{let s=document.getElementsByClassName("gist-github-67677");for(let d=0;d<s.length;d++){let Q=`<html><body style="margin :0 !important;"><style type="text/css">\n                \n                 /* width */\n                 ::-webkit-scrollbar {\n                   height: 8px;\n                 }\n                 \n             .gist-meta{\n               display:none !important;\n             }\n             .gist .gist-file , .gist .gist-data {\n               border: none !important;    \n              border-radius: 7px !important;\n              overflow: hidden !important;        \n           }\n           @media only screen and (max-width : 575px){\n             ::-webkit-scrollbar {\n               height: 0;\n             }\n             .gist .gist-file , .gist .gist-data {\n              border-radius: 0 !important;        \n           }\n           }\n           .gist .blob-wrapper tr:first-child td {\n             padding-top: 15px !important;\n         }\n         .gist .blob-wrapper tr:last-child td {\n           padding-bottom: 15px !important;\n       }\n       @media (prefers-color-scheme: light){\n         body .gist .highlight {\n           background: #e0e0e0;\n       }\n         body .gist .blob-code{\n           background-color: #ededed;\n         }\n         ::-webkit-scrollbar-track {\n           background: #ededed;\n         }\n         /* Handle */\n                 ::-webkit-scrollbar-thumb {\n                   background: #bbbbbb;\n                 }\n       }\n       @media (prefers-color-scheme: dark){\n        body .gist .highlight {\n          background: #303030;\n      }\n      body .gist .blob-code{\n         background-color: #202020;\n      }\n      ::-webkit-scrollbar-track {\n       background: #202020;\n     }\n     ::-webkit-scrollbar-thumb {\n       background: #565656;\n     }\n      body .gist .blob-num,\n      body .gist .blob-code-inner,\n      body .gist .highlight,\n      body .gist .pl-enm,\n      body .gist .pl-ko,\n      body .gist .pl-mo,\n      body .gist .pl-mp1 .pl-sf,\n      body .gist .pl-ms,\n      body .gist .pl-pdc1,\n      body .gist .pl-scp,\n      body .gist .pl-smc,\n      body .gist .pl-som,\n      body .gist .pl-va,\n      body .gist .pl-vpf,\n      body .gist .pl-vpu,\n      body .gist .pl-mdr {\n           color: #aab1bf;\n      }\n      body .gist .pl-mb,\n      body .gist .pl-pdb {\n           font-weight: 700;\n      }\n      body .gist .pl-c,\n      body .gist .pl-c span,\n      body .gist .pl-pdc {\n           color: #5b6270;\n           font-style: italic;\n      }\n      body .gist .pl-sr .pl-cce {\n           color: #56b5c2;\n           font-weight: 400;\n      }\n      body .gist .pl-ef,\n      body .gist .pl-en,\n      body .gist .pl-enf,\n      body .gist .pl-eoai,\n      body .gist .pl-kos,\n      body .gist .pl-mh .pl-pdh,\n      body .gist .pl-mr {\n           color: #61afef;\n      }\n      body .gist .pl-ens,\n      body .gist .pl-vi {\n           color: #be5046;\n      }\n      body .gist .pl-enti,\n      body .gist .pl-mai .pl-sf,\n      body .gist .pl-ml,\n      body .gist .pl-sf,\n      body .gist .pl-sr,\n      body .gist .pl-sr .pl-sra,\n      body .gist .pl-src,\n      body .gist .pl-st,\n      body .gist .pl-vo {\n           color: #56b5c2;\n      }\n      body .gist .pl-eoi,\n      body .gist .pl-mri,\n      body .gist .pl-pds,\n      body .gist .pl-pse .pl-s1,\n      body .gist .pl-s,\n      body .gist .pl-s1 {\n           color: #97c279;\n      }\n      body .gist .pl-k,\n      body .gist .pl-kolp,\n      body .gist .pl-mc,\n      body .gist .pl-pde {\n           color: #c578dd;\n      }\n      body .gist .pl-mi,\n      body .gist .pl-pdi {\n           color: #c578dd;\n           font-style: italic;\n      }\n      body .gist .pl-mp,\n      body .gist .pl-stp {\n           color: #818896;\n      }\n      body .gist .pl-mdh,\n      body .gist .pl-mdi,\n      body .gist .pl-mdr {\n           font-weight: 400;\n      }\n      body .gist .pl-mdht,\n      body .gist .pl-mi1 {\n           color: #97c279;\n           background: #020;\n      }\n      body .gist .pl-md,\n      body .gist .pl-mdhf {\n           color: #df6b75;\n           background: #200;\n      }\n      body .gist .pl-corl {\n           color: #df6b75;\n           text-decoration: underline;\n      }\n      body .gist .pl-ib {\n           background: #df6b75;\n      }\n      body .gist .pl-ii {\n           background: #e0c184;\n           color: #fff;\n      }\n      body .gist .pl-iu {\n           background: #e05151;\n      }\n      body .gist .pl-ms1 {\n           color: #aab1bf;\n           background: #373b41;\n      }\n      body .gist .pl-c1,\n      body .gist .pl-cn,\n      body .gist .pl-e,\n      body .gist .pl-eoa,\n      body .gist .pl-eoac,\n      body .gist .pl-eoac .pl-pde,\n      body .gist .pl-kou,\n      body .gist .pl-mm,\n      body .gist .pl-mp .pl-s3,\n      body .gist .pl-mq,\n      body .gist .pl-s3,\n      body .gist .pl-sok,\n      body .gist .pl-sv,\n      body .gist .pl-mb {\n           color: #d19965;\n      }\n      body .gist .pl-enc,\n      body .gist .pl-entc,\n      body .gist .pl-pse .pl-s2,\n      body .gist .pl-s2,\n      body .gist .pl-sc,\n      body .gist .pl-smp,\n      body .gist .pl-sr .pl-sre,\n      body .gist .pl-stj,\n      body .gist .pl-v,\n      body .gist .pl-pdb {\n           color: #e4bf7a;\n      }\n      body .gist .pl-ent,\n      body .gist .pl-entl,\n      body .gist .pl-entm,\n      body .gist .pl-mh,\n      body .gist .pl-pdv,\n      body .gist .pl-smi,\n      body .gist .pl-sol,\n      body .gist .pl-mdh,\n      body .gist .pl-mdi {\n           color: #df6b75;\n      }\n       }     \n                 \n         </style>${s[d].innerHTML}</body></html>`,g=document.createElement("iframe");g.setAttribute("srcdoc",Q),g.setAttribute("frameborder","0"),g.setAttribute("style","min-width: 200px;  height: auto;"),g.setAttribute("scrolling","no"),g.setAttribute("seamless","seamless"),g.setAttribute("onload","this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"),s[d].innerHTML="",s[d].appendChild(g)}},0),this.title.setTitle(`${this.singleProject.title} | ${this.admin.name}`),this.meta.updateTag({name:"robots",content:"index, follow"}),this.meta.updateTag({name:"keywords",content:`${this.singleProject.keywords}`}),this.meta.updateTag({name:"description",content:`${this.singleProject.description}`}),this.meta.updateTag({property:"og:url",content:`${this.location}`}),this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:title",content:`${this.singleProject.title} | ${this.admin.name}`}),this.meta.updateTag({property:"og:description",content:`${this.singleProject.description}`}),this.meta.updateTag({property:"og:image",content:`${this.singleProject.featuredImage}`}),this.meta.updateTag({property:"og:image:secure_url",content:`${this.singleProject.featuredImage}`}),this.getRelatedPost(this.singleProject.category)}},i=>{})}getRelatedPost(o){this.relatedSubscription=this.appService.readRelatedProjectPost(o).subscribe(i=>{i&&i.data.forEach(l=>{if(l.slug!=this.singleProject.slug){const s=new Date(l.updated_at);l.updated_at=`${s.getDate()-1} ${this.month[s.getMonth()+1]} ${s.getFullYear()}`,this.relatedProject.push(l)}})},i=>{})}ngOnDestroy(){this.projectSubscription.unsubscribe(),this.relatedSubscription.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v.z),t.Y36(a.gz),t.Y36(a.F0),t.Y36(m.Dx),t.Y36(m.h_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-singleportfolio"]],decls:13,vars:2,consts:[[1,"single-post"],[1,"container"],[1,"row"],[1,"col-lg-8","col-xs-12","pb-sm-4","pb-0"],["class","sing-post",4,"ngIf"],[1,"col-lg-4","col-xs-12","pb-4","d-lg-block","d-none"],[2,"height","100%"],[2,"position","-webkit-sticky","position","sticky","top","90px !important"],[1,"sing-post"],[1,"mb-2"],[1,"item-image"],[1,"image-section"],["width","100%","height","100%",3,"src","alt"],[1,"image-bg"],["target","_blank",3,"href"],[1,"my-custom-button","git-button"],[1,"my-custom-button","live-button"],[4,"ngIf"],["class","mb-4",4,"ngIf"],["class","col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-sm-4 pb-0",4,"ngFor","ngForOf"],[1,"art-box"],[3,"innerHtml"],[1,"mb-4"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-xs-12","pb-sm-4","pb-0"],[1,"related",3,"routerLink"],[1,"related-img"],[1,"related-content"],["animation","pulse",3,"theme"],["animation","pulse","count","2",3,"theme"]],template:function(o,i){1&o&&(t.TgZ(0,"section"),t._UZ(1,"app-top-loader-line"),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3),t.YNc(6,_,22,10,"div",4),t.YNc(7,S,17,24,"div",4),t.qZA(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t._UZ(11,"div",2),t.qZA()()()()()()(),t._UZ(12,"app-footer")),2&o&&(t.xp6(6),t.Q6J("ngIf",i.singleProject),t.xp6(1),t.Q6J("ngIf",1==i.loader))},dependencies:[c.sg,c.O5,a.rH,P.T,k.c,h.x,u.w],styles:[".single-post[_ngcontent-%COMP%]{position:relative;padding-top:20px;z-index:0}h1[_ngcontent-%COMP%]{margin-bottom:0}.related-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.063rem}small[_ngcontent-%COMP%]{margin-bottom:10px}.item-image[_ngcontent-%COMP%]{width:calc(100% + 30px);margin:20px -15px 25px;padding-top:56.25%;position:relative;border:none;overflow:hidden}.image-bg[_ngcontent-%COMP%]{border:none;position:absolute;inset:0;z-index:4;background-color:gray}.image-section[_ngcontent-%COMP%]{border:none;position:absolute;inset:0;z-index:5}.related[_ngcontent-%COMP%]{cursor:pointer!important;outline:none;text-decoration:none;overflow:hidden;width:calc(100% + 30px);margin-left:-15px;margin-right:-15px}.related[_ngcontent-%COMP%]   .related-img[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;border:none;overflow:hidden;cursor:pointer}.related[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]{border:none;position:absolute;inset:0;z-index:5}.related[_ngcontent-%COMP%]   .image-bg[_ngcontent-%COMP%]{border:none;position:absolute;inset:0;z-index:4;background-color:gray}.related[_ngcontent-%COMP%]   .related-content[_ngcontent-%COMP%]{padding:15px;height:100px;overflow:hidden}.related[_ngcontent-%COMP%]   .related-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:400;outline:none;text-transform:capitalize;color:var(--theme-color-secondary);margin-bottom:0;letter-spacing:1px;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;word-wrap:break-word}.related[_ngcontent-%COMP%]:hover   h6[_ngcontent-%COMP%]{color:var(--theme-color-primary)!important}.related[_ngcontent-%COMP%]:hover{opacity:.9}.git-button[_ngcontent-%COMP%]{border:1px solid var(--theme-color-primary)!important;background-color:transparent;margin-right:20px;color:var(--theme-color-secondary);width:30%;padding-left:30px;padding-right:30px}.live-button[_ngcontent-%COMP%]{width:calc(70% - 20px);padding-left:40px;padding-right:40px}@media only screen and (min-width : 576px){.item-image[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0;border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px}.single-post[_ngcontent-%COMP%]{padding:40px 0}.related[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0;transition:.1s ease;-webkit-transition:.1s ease;-moz-transition:.1s ease;-ms-transition:.1s ease;-o-transition:.1s ease}.related[_ngcontent-%COMP%]:active{transform:scale(.98);-webkit-transform:scale(.98);-moz-transform:scale(.98);-ms-transform:scale(.98);-o-transform:scale(.98)}.related[_ngcontent-%COMP%]   .related-content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.related[_ngcontent-%COMP%]   .related-img[_ngcontent-%COMP%]{border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px}.git-button[_ngcontent-%COMP%], .live-button[_ngcontent-%COMP%]{width:auto;width:initial}}"]}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(A),a.Bz]}),e})();var D=n(8928);let U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,J,D.m,h.h,u.Z]}),e})()}}]);