"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[150],{99:function(e,o,n){n.d(o,{I9:function(){return a},PL:function(){return l},Wn:function(){return s},t$:function(){return t}});const t="_Your output will appear here_",l="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",a="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",s="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},6742:function(e,o,n){function t(e){return e.replace(/^\/+/,"")}function l(...e){const o=e.join("-");return o.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}n.d(o,{F:function(){return t},l:function(){return l}})},9771:function(e,o,n){n.d(o,{Z:function(){return g}});var t=n(6252),l=n(3577);const a=["for"],s=["id","checked"],r={key:0,class:"note"};function u(e,o,n,u,i,d){const c=(0,t.up)("Markdown");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("label",{for:e.slug},(0,l.zw)(e.label),9,a),(0,t._)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:o[0]||(o[0]=o=>e.$emit("update:modelValue",o.target.checked))},null,40,s),e.note?((0,t.wg)(),(0,t.iD)("small",r,[(0,t.Wm)(c,{content:e.note},null,8,["content"])])):(0,t.kq)("",!0)])}var i=n(3945),d=n(6742),c=(0,t.aZ)({name:"CheckboxItem",components:{Markdown:i.Z},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("box",this.label)}}}),p=n(3744);const m=(0,p.Z)(c,[["render",u]]);var g=m},816:function(e,o,n){n.d(o,{Z:function(){return g}});var t=n(6252),l=n(3577);const a=(0,t._)("br",null,null,-1);function s(e,o,n,s,r,u){const i=(0,t.up)("Checkbox");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(i,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":o[0]||(o[0]=o=>e.asHtml=o)},null,8,["modelValue"]),a,(0,t._)("pre",null,[(0,t._)("code",{ref:"codeBlock",class:"markdown"},(0,l.zw)(e.outputCode),513)])])}var r=n(7869),u=n.n(r),i=n(770),d=n(9771),c=(0,t.aZ)({name:"CodeItem",components:{Checkbox:d.Z},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,i.Ae)(this.code);return(0,i.ZF)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;u().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),p=n(3744);const m=(0,p.Z)(c,[["render",s]]);var g=m},8526:function(e,o,n){n.d(o,{Z:function(){return c}});var t=n(6252);const l={class:"app-notes"},a=(0,t._)("h2",null,"Notes",-1);function s(e,o,n,s,r,u){const i=(0,t.up)("Markdown");return(0,t.wg)(),(0,t.iD)("div",l,[a,(0,t._)("p",null,[(0,t.Wm)(i,{content:e.message},null,8,["content"])])])}var r=n(3945),u=(0,t.aZ)({name:"HelpItem",components:{Markdown:r.Z},props:{message:{type:String,required:!0}}}),i=n(3744);const d=(0,i.Z)(u,[["render",s]]);var c=d},8459:function(e,o,n){n.d(o,{Z:function(){return b}});var t=n(6252);const l=e=>((0,t.dD)("data-v-5b828de6"),e=e(),(0,t.Cn)(),e),a={class:"app-results"},s=l((()=>(0,t._)("h2",null,"Output values",-1))),r=l((()=>(0,t._)("h3",null,"Preview",-1))),u=l((()=>(0,t._)("br",null,null,-1))),i=l((()=>(0,t._)("h3",null,"Code",-1)));function d(e,o,n,l,d,c){const p=(0,t.up)("Markdown"),m=(0,t.up)("CodeItem");return(0,t.wg)(),(0,t.iD)("div",a,[s,(0,t._)("div",null,[r,(0,t.Wm)(p,{class:"markdown-preview",content:e.result},null,8,["content"])]),u,(0,t._)("div",null,[i,(0,t.Wm)(m,{code:e.result},null,8,["code"])])])}var c=n(816),p=n(3945),m=(0,t.aZ)({name:"ResultsItem",components:{Markdown:p.Z,CodeItem:c.Z},props:{result:{type:String,required:!0}}}),g=n(3744);const h=(0,g.Z)(m,[["render",d],["__scopeId","data-v-5b828de6"]]);var b=h},6688:function(e,o,n){n.d(o,{Z:function(){return h}});var t=n(6252),l=n(3577);const a=["for"],s={key:0,class:"required"},r=["id","value","placeholder","required","disabled"],u={key:0,class:"note"};function i(e,o,n,i,d,c){const p=(0,t.up)("Markdown");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("label",{for:e.slug},[(0,t.Uk)((0,l.zw)(e.label),1),e.isRequired?((0,t.wg)(),(0,t.iD)("span",s,"*")):(0,t.kq)("",!0)],8,a),(0,t._)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:o[0]||(o[0]=o=>e.$emit("update:modelValue",o.target.value))},null,40,r),e.note?((0,t.wg)(),(0,t.iD)("small",u,[(0,t.Wm)(p,{content:e.note},null,8,["content"])])):(0,t.kq)("",!0)])}var d=n(6742),c=n(3945),p=(0,t.aZ)({name:"TextInput",components:{Markdown:c.Z},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("text",this.label,this.modelValue)}}}),m=n(3744);const g=(0,m.Z)(p,[["render",i],["__scopeId","data-v-de2a2f90"]]);var h=g},9800:function(e,o,n){n.r(o),n.d(o,{default:function(){return J}});var t=n(6252),l=n(9963);const a={class:"badges container-lg"},s=(0,t._)("div",{class:"row"},[(0,t._)("div",{class:"col-12"},[(0,t._)("h1",null,"Repo badges"),(0,t._)("p",null," Generate shields about your repo and add them to your README.md file. ")])],-1),r={class:"row"},u={class:"col-6"},i={class:"app-input"},d=(0,t._)("h2",null,"Input values",-1),c={name:"gh-repo"},p=(0,t._)("legend",null,"GitHub repo",-1),m=(0,t._)("br",null,null,-1),g=(0,t._)("br",null,null,-1),h=(0,t._)("br",null,null,-1),b=(0,t._)("label",null,"Version type",-1),f=(0,t._)("label",{for:"one"},"Tag",-1),w=(0,t._)("label",{for:"two"},"Release",-1),v=(0,t._)("br",null,null,-1),y={name:"display-options"},k=(0,t._)("legend",null,"Display options",-1),_=(0,t._)("br",null,null,-1),V={name:"gh-actions"},T=(0,t._)("legend",null,"GitHub Actions workflow",-1),C=(0,t._)("br",null,null,-1),S=(0,t._)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),Z={class:"col-6"},R={class:"row"},U={class:"col-12"};function I(e,o,n,I,N,q){const D=(0,t.up)("TextInput"),H=(0,t.up)("Checkbox"),M=(0,t.up)("Results"),W=(0,t.up)("Help");return(0,t.wg)(),(0,t.iD)("div",a,[s,(0,t._)("div",r,[(0,t._)("div",u,[(0,t._)("div",i,[d,(0,t._)("form",{onSubmit:o[13]||(o[13]=(0,l.iM)(((...o)=>e.submit&&e.submit(...o)),["prevent"]))},[(0,t._)("fieldset",c,[p,(0,t.Wm)(D,{label:"Username",modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=o=>e.username=o),isRequired:""},null,8,["modelValue"]),m,(0,t.Wm)(D,{label:"Repo name",modelValue:e.repoName,"onUpdate:modelValue":o[1]||(o[1]=o=>e.repoName=o),isRequired:""},null,8,["modelValue"]),g,(0,t.Wm)(D,{label:"License",modelValue:e.licenseType,"onUpdate:modelValue":o[2]||(o[2]=o=>e.licenseType=o)},null,8,["modelValue"]),h,(0,t._)("div",null,[b,(0,t._)("span",null,[(0,t.wy)((0,t._)("input",{type:"radio",id:"one",value:"tag","onUpdate:modelValue":o[3]||(o[3]=o=>e.versionType=o)},null,512),[[l.G2,e.versionType]]),f]),(0,t._)("span",null,[(0,t.wy)((0,t._)("input",{type:"radio",id:"two",value:"release","onUpdate:modelValue":o[4]||(o[4]=o=>e.versionType=o)},null,512),[[l.G2,e.versionType]]),w])])]),v,(0,t._)("fieldset",y,[k,(0,t.Wm)(D,{label:"Color",modelValue:e.badgeColor,"onUpdate:modelValue":o[5]||(o[5]=o=>e.badgeColor=o),placeholder:"e.g. blue",note:e.colorHelp},null,8,["modelValue","note"]),(0,t.Wm)(H,{label:"Social badges",modelValue:e.addSocialBadges,"onUpdate:modelValue":o[6]||(o[6]=o=>e.addSocialBadges=o),note:"Show badges about the GitHub repo - not useful for your main README.md on GitHub but these are great for adding to a page on docs site or for linking to your repo from another location you control like a repo or website."},null,8,["modelValue"]),(0,t.Wm)(H,{label:"Issues badge",modelValue:e.addIssues,"onUpdate:modelValue":o[7]||(o[7]=o=>e.addIssues=o),note:"Add a counter for number of open issues. The color will change based on the count."},null,8,["modelValue"]),(0,t.Wm)(H,{label:"Template button",modelValue:e.useThisTemplate,"onUpdate:modelValue":o[8]||(o[8]=o=>e.useThisTemplate=o),note:"Add a <i>Use This Template</i> button."},null,8,["modelValue"]),(0,t.Wm)(H,{label:"GH Pages button",modelValue:e.ghPages,"onUpdate:modelValue":o[9]||(o[9]=o=>e.ghPages=o),note:"Add a link to a GitHub Pages site."},null,8,["modelValue"]),(0,t.Wm)(H,{label:"Documentation section",modelValue:e.addDocsSection,"onUpdate:modelValue":o[10]||(o[10]=o=>e.addDocsSection=o),note:"Add heading and content around documentation."},null,8,["modelValue"]),(0,t.Wm)(H,{label:"License section",modelValue:e.addLicenseSection,"onUpdate:modelValue":o[11]||(o[11]=o=>e.addLicenseSection=o),note:"Add heading and content around license. If enabled, the license badge at the top of the page will point to this section on the page, otherwise it will point to the full URL of the license file."},null,8,["modelValue"])]),_,(0,t._)("fieldset",V,[T,(0,t.Wm)(D,{label:"Name",modelValue:e.workflowName,"onUpdate:modelValue":o[12]||(o[12]=o=>e.workflowName=o),placeholder:"e.g. Node CI",note:'From the "name" field of a GH Actions workflow file. For the default repo settings, you can use "GH Pages Deploy".'},null,8,["modelValue"])]),C,S],32)])]),(0,t._)("div",Z,[(0,t.Wm)(M,{result:e.result},null,8,["result"])])]),(0,t._)("div",R,[(0,t._)("div",U,[(0,t.Wm)(W,{message:e.note},null,8,["message"])])])])}var N=n(2211),q=n(9930),D=n(1409),H=n(99),M=n(8526),W=n(9771),$=n(8459),L=n(6688),B=n(8209),A=n(770);function x({ghURL:e,workflowName:o}){const n=encodeURIComponent(o);return`${e}/workflows/${n}/badge.svg`}function P({ghURL:e,workflowName:o}){const n=o.replace(/ /g,"+");return`${e}/actions?query=workflow:"${n}"`}function G({ghURL:e,workflowName:o}){return{altText:o,imageTarget:x({ghURL:e,workflowName:o}),linkTarget:P({ghURL:e,workflowName:o})}}function E(e,o){const n=e.ghURL(),t=G({ghURL:n,workflowName:o});return(0,A.ad)(t)}var j=n(5638);const F="\n- Where to put the repo metadata badges.\n    - In your `README.md` file.\n- Where to put the social badges.\n    - On a docs site to link back to your repo.\n    - Link to a repo you don't own - such as if you want to link to the Vue repo and show its star count.\n- The first social badge has fixed display logic - so make sure you enter a valid repo as the badge can't tell you it is broken. A positive of this is that it works to point to private repos.\n- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.\n- For centered badges - note that the HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute.\n\nIf you need more content for the body of your README.md or doc files, check out this generic template:\n\n- [![MichaelCurrin - generic-project-template](https://img.shields.io/static/v1?label=MichaelCurrin&message=generic-project-template&color=blue&logo=github)](https://github.com/MichaelCurrin/generic-project-template)\n";var z=(0,t.aZ)({name:"RepoBadges",components:{Checkbox:W.Z,Help:M.Z,Results:$.Z,TextInput:L.Z},data(){const e="tag";return{username:j.Z.getRepoUsername(),repoName:j.Z.getRepoName(),licenseType:D.dU.licenseType,addSocialBadges:!1,addIssues:!1,useThisTemplate:!1,ghPages:!1,addDocsSection:!0,addLicenseSection:!0,badgeColor:q.b0.Default,workflowName:"",versionType:e,result:H.t$,note:F,colorHelp:H.PL}},methods:{submit(){N.e&&(console.debug("Process inputs and render results"),console.debug({username:this.username,repoName:this.repoName,licenseType:this.licenseType,useThisTemplate:this.useThisTemplate,versionType:this.versionType,ghPages:this.ghPages,workflowName:this.workflowName,badgeColor:this.badgeColor})),j.Z.setRepoUsername(this.username),j.Z.setRepoName(this.repoName);const e=new B.MA(this.username,this.repoName,this.licenseType,this.badgeColor);let o="";if(this.addSocialBadges){const n=e.ghBadge(),t=e.ghCounterBadge("stars"),l=e.ghCounterBadge("forks");o=`_Social buttons_\n\n${n}\n${t}\n${l}\n`}const n=this.workflowName?E(e,this.workflowName):"",t=e.tagBadge(this.versionType),l=this.addLicenseSection,a=e.licenseBadge(l),s=this.addIssues?e.ghCounterBadge("issues"):"",r=this.useThisTemplate?e.useThisTemplateBadge():"",u=this.ghPages?e.ghPagesBadge():"",i=this.addDocsSection?e.documentationMessage():"",d=this.addLicenseSection?e.licenseMessage():"";this.result=`${o}\n\n_Repo metadata_\n\n${n}\n${t}\n${a}\n${s}\n\n_Call-to-Action buttons_\n\n<div align="center">\n\n${r}\n\n${u}\n\n</div>\n\n${i}\n\n${d}`}}}),O=n(3744);const Y=(0,O.Z)(z,[["render",I]]);var J=Y}}]);
//# sourceMappingURL=repo-legacy.a2f927f5.js.map