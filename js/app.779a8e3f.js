(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/maintenanced-template/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"040e":function(t,e,a){},"0a46":function(t,e,a){},"330d":function(t,e,a){"use strict";var r=a("0a46"),n=a.n(r);n.a},"4aa7":function(t){t.exports={a:{frame:"",invite:""},b:"https://web.facebook.com/sky.m4n",d:"https://twitter.com/skyimun",c:"https://www.instagram.com/sirienz_sama",e:"https://www.youtube.com/channel/UC1IXWxj35gSRq-8z8JT6_dg"}},5307:function(t,e,a){t.exports=a.p+"img/facebook.456a33b9.png"},"64a9":function(t,e,a){},7391:function(t){t.exports={a:"Maaf, website ini sedang mengalami proses perbaikan.",b:"Singgah lain kali lagi yaa!"}},"7fee":function(t){t.exports={c:"Ojek Offline",d:"2019",a:"PT. Bukan Kaleng-Kaleng",b:"#4c4c4c"}},b8a7:function(t,e,a){"use strict";var r=a("040e"),n=a.n(r);n.a},c7f8:function(t,e,a){t.exports=a.p+"img/instagram.3b3b281d.png"},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto d-flex h-100 flex-column",attrs:{id:"app"}},[a("title",[t._v(t._s(t.globalData.about.corporate_name)+" | Under Maintenanced")]),a("meta",{attrs:{name:"author",content:t.globalData.about.name+" | Under Maintenanced"}}),a("meta",{attrs:{name:"description",content:t.globalData.ctx.main_text}}),a("header",{staticClass:"mb-auto"}),a("Filler",{attrs:{main_text:t.globalData.ctx.main_text,sub_text:t.globalData.ctx.sub_text,discord_frame:t.globalData.social_media.discord.frame}}),a("Footer",{attrs:{project_name:t.globalData.about["name"],corporate_name:t.globalData.about["corporate_name"],project_year_start:t.globalData.about["project_year_start"],socmed:t.getFooterSocmed(),footer_color:t.globalData.about.footer_color}})],1)},o=[],i=(a("7f7f"),a("2f62")),s=a("7fee"),c=a("4aa7"),l=a("7391");r["a"].use(i["a"]);var u=new i["a"].Store({state:{about:{name:s["c"],corporate_name:s["a"],project_year_start:s["d"],footer_color:s["b"]||"#4c4c4c"},social_media:{discord:{frame:c["a"]["frame"],invite:c["a"]["invite"]},facebook:c["b"],twitter:c["d"],instagram:c["c"],youtube:c["e"]},ctx:{main_text:l["a"],sub_text:l["b"]}}}),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"filler",attrs:{id:"filler"}},[a("div",{staticClass:"container"},[t.discord_frame.length>0?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 my-auto"},[a("h1",{staticClass:"display-3 mt-5",attrs:{id:"main-text-half"}},[t._v(t._s(t.main_text))]),a("hr",{attrs:{id:"border-half"}}),a("h3",{attrs:{id:"sub-text-half"}},[t._v(t._s(t.sub_text))])]),a("div",{staticClass:"col-lg-4 mt-5 mb-5 text-center"},[a("iframe",{staticClass:"mx-auto my-auto",attrs:{src:t.discord_frame,frameborder:"0",id:"discord-frame"}})])]):a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 my-auto"},[a("h1",{staticClass:"display-3 mt-5",attrs:{id:"main-text-full"}},[t._v(t._s(t.main_text))]),a("hr",{attrs:{id:"border-full"}}),a("h3",{attrs:{id:"sub-text-full"}},[t._v(t._s(t.sub_text))])])])])])},f=[],p=r["a"].extend({props:{main_text:{type:String,required:!0},sub_text:{type:String,required:!0},discord_frame:{type:String}}}),m=p,b=(a("330d"),a("2877")),g=Object(b["a"])(m,d,f,!1,null,null,null),_=g.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer mt-auto"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row py-3",style:{backgroundColor:t.footer_color}},[r("div",{staticClass:"col-lg-7 offset-lg-1 my-auto",attrs:{id:"copy-right"}},[r("span",{attrs:{title:t.copyright}},[r("a",{attrs:{href:"https://github.com/skymunn",target:"_blank",rel:"noopener norefferer"}},[t._v("©")]),t._v(" "+t._s(t.project_year_start)+"-"+t._s(t.yearNow)+" "+t._s(t.project_name)+" | "+t._s(t.corporate_name)+". All right reserved.\r\n        ")])]),r("div",{staticClass:"col-lg-3 text-center align-middle my-auto"},[t.socmed.fb.length>0?r("a",{attrs:{href:t.socmed["fb"],target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a("5307"),alt:"facebook.png",id:"facebook"}})]):r("a",{attrs:{id:"blank"}}),t.socmed.twit.length>0?r("a",{attrs:{href:t.socmed["twit"],target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a("e4d7"),alt:"twitter.png",id:"twitter"}})]):r("a",{attrs:{id:"blank"}}),t.socmed.dc.length>0?r("a",{attrs:{href:t.socmed["dc"],target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a("eb10"),alt:"discord.png",id:"discord"}})]):r("a",{attrs:{id:"blank"}}),t.socmed.ig.length>0?r("a",{attrs:{href:t.socmed["ig"],target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a("c7f8"),alt:"instagram.png",id:"instagram"}})]):r("a",{attrs:{id:"blank"}}),t.socmed.yt.length>0?r("a",{attrs:{href:t.socmed["yt"],target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:a("e63a"),alt:"youtube.png",id:"youtube"}})]):r("a",{attrs:{id:"blank"}})])])])])},h=[],v=new Date,x=r["a"].extend({props:{project_name:{type:String,required:!0},corporate_name:{type:String,required:!0},project_year_start:{type:String,required:!0},socmed:{type:Object},footer_color:{type:String}},data:function(){return{yearNow:v.getFullYear(),copyright:"Made by github/skymunn. Click over (C) to see my profile!"}}}),w=x,k=(a("b8a7"),Object(b["a"])(w,y,h,!1,null,null,null)),j=k.exports,C=r["a"].extend({data:function(){return{globalData:u.state,titleWebsite:"".concat(u.state.about.name," | Under Maintenanced")}},methods:{getFooterSocmed:function(){var t=u.state.social_media;return{fb:t.facebook,twit:t.twitter,ig:t.instagram,yt:t.youtube,dc:t.discord.invite}}},components:{Filler:_,Footer:j}}),S=C,O=(a("034f"),Object(b["a"])(S,n,o,!1,null,null,null)),D=O.exports;r["a"].config.productionTip=!1,new r["a"]({store:u,render:function(t){return t(D)}}).$mount("#app")},e4d7:function(t,e,a){t.exports=a.p+"img/twitter.ce453507.png"},e63a:function(t,e,a){t.exports=a.p+"img/youtube.d8378e4b.png"},eb10:function(t,e,a){t.exports=a.p+"img/discord.da344283.png"}});
//# sourceMappingURL=app.779a8e3f.js.map