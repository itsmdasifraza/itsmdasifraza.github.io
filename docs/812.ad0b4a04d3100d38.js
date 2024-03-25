"use strict";(self.webpackChunkportfolio_angular_client=self.webpackChunkportfolio_angular_client||[]).push([[812],{4812:(L,p,o)=>{o.r(p),o.d(p,{BlogModule:()=>Y});var c=o(6895),s=o(5873),O=o(2340),t=o(6738),h=o(1481),_=o(1347),P=o(900),y=o(8372),w=o(267),T=o(3158),u=o(1637),x=o(5563),d=o(4719),f=o(3189);function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"a",7),t.NdJ("click",function(){const a=t.CHM(e).$implicit,g=t.oxw();return t.KtG(g.setTag(a))}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e)}}function Z(n,i){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16)(2,"div",17)(3,"div",18),t._UZ(4,"img",19),t.qZA(),t._UZ(5,"div",20),t.qZA(),t.TgZ(6,"div",21)(7,"small"),t._uU(8),t.qZA(),t.TgZ(9,"h2"),t._uU(10),t.ALo(11,"slice"),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA()()()()),2&n){const e=i.$implicit;t.xp6(1),t.MGl("routerLink","/blog/",e.slug,""),t.xp6(3),t.s9C("src",e.image,t.LSH),t.s9C("alt",e.slug),t.xp6(4),t.AsE("",e.author,", Last Updated ",e.updated_at,"."),t.xp6(2),t.Oqu(t.Dn7(11,7,e.title,0,100)),t.xp6(3),t.Oqu(e.description)}}function B(n,i){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,Z,14,11,"div",14),t.ALo(2,"filter"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,e.blogPost,e.searchText))}}const b=function(){return{"border-radius":"0px",height:"100%","background-color":"gray"}},J=function(){return{"margin-bottom":"5px","border-radius":"0",height:"15px",width:"80%","background-color":"gray"}},A=function(){return{"margin-bottom":"5px","border-radius":"0",height:"15px","background-color":"gray"}};function Q(n,i){1&n&&(t.TgZ(0,"div",27)(1,"div",23)(2,"div",17)(3,"div",18),t._UZ(4,"ngx-skeleton-loader",24),t.qZA()(),t.TgZ(5,"div",21),t._UZ(6,"ngx-skeleton-loader",24)(7,"ngx-skeleton-loader",25),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("theme",t.DdM(3,b)),t.xp6(2),t.Q6J("theme",t.DdM(4,J)),t.xp6(1),t.Q6J("theme",t.DdM(5,A)))}const U=function(){return{"border-radius":"0",height:"12px",width:"70%","background-color":"gray"}},z=function(){return{"border-radius":"0",height:"20px","background-color":"gray"}},D=function(){return{"border-radius":"0",height:"20px",width:"40%","background-color":"gray"}},m=function(){return{"border-radius":"0",height:"16px","background-color":"gray"}},M=function(){return{"border-radius":"0",height:"16px",width:"90%","background-color":"gray"}};function F(n,i){if(1&n&&(t.TgZ(0,"div",2)(1,"div",22)(2,"div",23)(3,"div",17)(4,"div",18),t._UZ(5,"ngx-skeleton-loader",24),t.qZA()(),t.TgZ(6,"div",21),t._UZ(7,"ngx-skeleton-loader",24)(8,"ngx-skeleton-loader",24)(9,"ngx-skeleton-loader",24)(10,"ngx-skeleton-loader",25)(11,"ngx-skeleton-loader",24)(12,"ngx-skeleton-loader",25)(13,"ngx-skeleton-loader",24)(14,"ngx-skeleton-loader",25),t.qZA()()(),t.YNc(15,Q,8,6,"div",26),t.qZA()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("theme",t.DdM(10,b)),t.xp6(2),t.Q6J("theme",t.DdM(11,U)),t.xp6(1),t.Q6J("theme",t.DdM(12,z)),t.xp6(1),t.Q6J("theme",t.DdM(13,D)),t.xp6(1),t.Q6J("theme",t.DdM(14,m)),t.xp6(1),t.Q6J("theme",t.DdM(15,M)),t.xp6(1),t.Q6J("theme",t.DdM(16,m)),t.xp6(1),t.Q6J("theme",t.DdM(17,M)),t.xp6(1),t.Q6J("theme",t.DdM(18,m)),t.xp6(1),t.Q6J("ngForOf",e.loader)}}const S=[{path:"",component:(()=>{class n{constructor(e,r,l,a){this.titleService=e,this.blogService=r,this.appService=l,this.meta=a,this.admin=O.N.admin,this.origin=window.location.origin,this.location=window.location.href,this.blogPost=[],this.loader=["","",""],this.titleService.setTitle(`Blog | ${this.admin.name}`),this.meta.updateTag({name:"robots",content:"index, follow"}),this.meta.updateTag({name:"keywords",content:`blog, blog ${this.admin.name}, ${this.admin.name}`}),this.meta.updateTag({name:"description",content:"This blog is about web programming, data science and machine learning."}),this.meta.updateTag({property:"og:url",content:`${this.location}`}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:title",content:`Blog | ${this.admin.name}`}),this.meta.updateTag({property:"og:description",content:"This blog is about web programming, data science and machine learning."}),this.meta.updateTag({property:"og:image",content:`${this.origin}/assets/logo/featured_logo.png`}),this.meta.updateTag({property:"og:image:secure_url",content:`${this.origin}/assets/logo/featured_logo.png`}),this.blogsSubscription=this.appService.blogs.subscribe(g=>{if(g){this.loader=[],this.blogPost=g;let C=[];this.blogPost.forEach(v=>{v?.category&&C.push(v.category)}),this.category=[...new Set(C)]}})}ngOnInit(){}setTag(e){this.searchText=e}ngOnDestroy(){this.blogsSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Dx),t.Y36(_.Z),t.Y36(P.z),t.Y36(h.h_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-blog"]],decls:22,vars:4,consts:[[1,"show-blog"],[1,"container"],[1,"row"],[1,"col-12","mobile-no-padding"],[1,"secondary-header"],[1,"link-item"],["drag-scroll-y-disabled","false"],[3,"click"],[3,"click",4,"ngFor","ngForOf"],[1,"col-12"],[1,"searchbox"],["type","text","autocomplete","off","name","search","placeholder","search chat",3,"ngModel","ngModelChange"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],["class","row",4,"ngIf"],["class","item-main col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-md-4 pb-0",4,"ngFor","ngForOf"],[1,"item-main","col-lg-4","col-md-6","col-sm-6","col-xs-12","pb-md-4","pb-0"],[1,"item",3,"routerLink"],[1,"item-image"],[1,"image-section"],["loading","lazy","width","100%","height","100%",3,"src","alt"],[1,"image-bg"],[1,"item-text"],[1,"item-main","col-lg-4","col-md-6","col-sm-6","col-xs-12","pb-md-4","pb-0","d-md-block","d-none"],[1,"item"],["animation","pulse",3,"theme"],["animation","pulse","count","2",3,"theme"],["class","col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-md-4 pb-0",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","pb-md-4","pb-0"]],template:function(e,r){1&e&&(t.TgZ(0,"section"),t._UZ(1,"app-top-loader-line"),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"drag-scroll",6)(9,"a",7),t.NdJ("click",function(){return r.setTag("")}),t._uU(10,"All"),t.qZA(),t.YNc(11,k,2,1,"a",8),t.qZA()()()()(),t.TgZ(12,"div",2)(13,"div",9),t._UZ(14,"app-heading"),t.qZA()(),t.TgZ(15,"div",10)(16,"input",11),t.NdJ("ngModelChange",function(a){return r.searchText=a}),t.qZA()(),t.TgZ(17,"div",2)(18,"div",12),t.YNc(19,B,3,4,"div",13),t.YNc(20,F,16,19,"div",13),t.qZA()()()()(),t._UZ(21,"app-footer")),2&e&&(t.xp6(11),t.Q6J("ngForOf",r.category),t.xp6(5),t.Q6J("ngModel",r.searchText),t.xp6(3),t.Q6J("ngIf",r.blogPost&&r.blogPost.length>0),t.xp6(1),t.Q6J("ngIf",r.loader&&r.loader.length>0))},dependencies:[c.sg,c.O5,s.rH,y.B,w.T,T.c,u.x,x.HU,d.Fj,d.JJ,d.On,c.OU,f.Z],styles:[".show-blog[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.063rem;font-weight:400;letter-spacing:1px;text-transform:capitalize;outline:none;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;word-wrap:break-word;margin-bottom:0}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none!important}.item[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{color:var(--theme-color-primary);cursor:pointer}.item[_ngcontent-%COMP%]{z-index:0!important;cursor:pointer;overflow:hidden;outline:none;text-decoration:none;width:calc(100% + 30px);margin-left:-15px;margin-right:-15px}.item[_ngcontent-%COMP%]:hover{opacity:.9}small[_ngcontent-%COMP%]{margin-bottom:10px}.item-text[_ngcontent-%COMP%]{padding:15px;height:100px;overflow:hidden}.item-image[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;border:none;overflow:hidden;cursor:pointer}.image-bg[_ngcontent-%COMP%]{border:none;position:absolute;inset:0;z-index:4;background-color:gray}.image-section[_ngcontent-%COMP%]{border:none;position:absolute;inset:0;z-index:5}img[_ngcontent-%COMP%]{outline:none}.secondary-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:left;width:calc(100% + 30px);margin:20px -15px;cursor:grab}.secondary-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-color-secondary);padding:8px 10px;margin:0 7.5px;border-radius:20px;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px;background:var(--theme-background-color-secondary)}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{width:100%;overflow:hidden}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-left:15px}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{margin-right:15px}.secondary-header[_ngcontent-%COMP%]   drag-scroll[_ngcontent-%COMP%]{width:100%}.searchbox[_ngcontent-%COMP%]{position:absolute;opacity:0}@media only screen and (min-width : 576px){.item[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0;transition:.1s ease;-webkit-transition:.1s ease;-moz-transition:.1s ease;-ms-transition:.1s ease;-o-transition:.1s ease}.item[_ngcontent-%COMP%]:active{transform:scale(.98);-webkit-transform:scale(.98);-moz-transform:scale(.98);-ms-transform:scale(.98);-o-transform:scale(.98)}.item-text[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.show-blog[_ngcontent-%COMP%]{padding-top:var(--compo-padding-top);padding-bottom:var(--compo-padding-bottom)}.item-image[_ngcontent-%COMP%]{border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px}.secondary-header[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-left:0}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{margin-right:0}}@media only screen and (min-width : 768px){.item-main[_ngcontent-%COMP%]:first-child{max-width:100%!important;flex:100%}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]{display:flex;height:175px;overflow:hidden}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]{width:calc(50% - 15px);padding-top:25.25%}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%]{width:calc(50% + 15px);padding:0 0 0 30px;height:100%}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.188rem}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block!important;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box!important;-webkit-box-orient:vertical;word-wrap:break-word}}@media only screen and (min-width : 992px){.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]{height:235px}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-line-clamp:4}}@media only screen and (min-width : 1200px){.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]{height:280px}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-line-clamp:5}}"]}),n})()}];let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(S),s.Bz]}),n})();var N=o(8928);let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,$,N.m,u.h,f.h,x.l1,d.u5]}),n})()}}]);