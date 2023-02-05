"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[892],{6742:function(e,o,t){function n(e){return e.replace(/^\/+/,"")}function r(...e){const o=e.join("-");return o.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}t.d(o,{F:function(){return n},l:function(){return r}})},9771:function(e,o,t){t.d(o,{Z:function(){return p}});var n=t(6252),r=t(3577);const l=["for"],a=["id","checked"],u={key:0,class:"note"};function s(e,o,t,s,c,d){const i=(0,n.up)("Markdown");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("label",{for:e.slug},(0,r.zw)(e.label),9,l),(0,n._)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:o[0]||(o[0]=o=>e.$emit("update:modelValue",o.target.checked))},null,40,a),e.note?((0,n.wg)(),(0,n.iD)("small",u,[(0,n.Wm)(i,{content:e.note},null,8,["content"])])):(0,n.kq)("",!0)])}var c=t(3945),d=t(6742),i=(0,n.aZ)({name:"CheckboxItem",components:{Markdown:c.Z},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("box",this.label)}}}),h=t(3744);const g=(0,h.Z)(i,[["render",s]]);var p=g},816:function(e,o,t){t.d(o,{Z:function(){return p}});var n=t(6252),r=t(3577);const l=(0,n._)("br",null,null,-1);function a(e,o,t,a,u,s){const c=(0,n.up)("Checkbox");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(c,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":o[0]||(o[0]=o=>e.asHtml=o)},null,8,["modelValue"]),l,(0,n._)("pre",null,[(0,n._)("code",{ref:"codeBlock",class:"markdown"},(0,r.zw)(e.outputCode),513)])])}var u=t(7869),s=t.n(u),c=t(770),d=t(9771),i=(0,n.aZ)({name:"CodeItem",components:{Checkbox:d.Z},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,c.Ae)(this.code);return(0,c.ZF)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;s().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),h=t(3744);const g=(0,h.Z)(i,[["render",a]]);var p=g},1990:function(e,o,t){t.r(o),t.d(o,{default:function(){return w}});var n=t(6252);const r={class:"images container-lg"},l=(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-12"},[(0,n._)("h1",null,"Catalogue"),(0,n._)("p",null," Choose from pre-built badges that can be copied to your docs and mostly used as they are. You can tweak the version numbers as needed. "),(0,n._)("p",null," The badges are all static so they will always look the same. They not rely on anything in your project to load. External links are included using the homepage of the tool. "),(0,n._)("p",null,[(0,n.Uk)(" Related - "),(0,n._)("a",{href:"https://ileriayo.github.io/markdown-badges/"},"Markdown Badges"),(0,n.Uk)(" site with a large catalogue of products using logos and colors, or "),(0,n._)("a",{href:"https://simpleicons.org/"},"Simple Icons"),(0,n.Uk)(" if you want to use their search feature then use the icon and color that comes up for your own shields.io badge. ")])])],-1),a={class:"row"},u={class:"col-12"},s=(0,n._)("br",null,null,-1);function c(e,o,t,c,d,i){const h=(0,n.up)("Markdown"),g=(0,n.up)("CodeItem");return(0,n.wg)(),(0,n.iD)("div",r,[l,(0,n._)("div",a,[(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.renderedBadges,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n.Wm)(h,{content:e},null,8,["content"]),(0,n.Wm)(g,{code:e},null,8,["code"]),s])))),128))])])])}var d=t(816),i=t(3945),h=t(2451),g=t(2010);function p(){return h.nm.map((e=>{const o="undefined"!==typeof e.isLarge?e.isLarge:h.oS.IS_LARGE;return(0,g.a)(e.label,e.message,h.oS.COLOR,o,e.target,e.logo,e.logo?h.oS.LOGO_COLOR:"",!1,e.altText,e.hoverTitle)}))}var m=(0,n.aZ)({name:"CatalogueItem",components:{Markdown:i.Z,CodeItem:d.Z},computed:{renderedBadges(){return p()}}}),f=t(3744);const k=(0,f.Z)(m,[["render",c]]);var w=k}}]);
//# sourceMappingURL=catalogue.95f23e63.js.map