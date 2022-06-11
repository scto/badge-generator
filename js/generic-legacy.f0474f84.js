"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[899],{99:function(e,l,o){o.d(l,{I9:function(){return r},PL:function(){return n},Wn:function(){return a},t$:function(){return t}});const t="_Your output will appear here_",n="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",r="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",a="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},6742:function(e,l,o){function t(e){return e.replace(/^\/+/,"")}function n(...e){const l=e.join("-");return l.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}o.d(l,{F:function(){return t},l:function(){return n}})},9771:function(e,l,o){o.d(l,{Z:function(){return m}});var t=o(6252),n=o(3577);const r=["for"],a=["id","checked"],s={key:0,class:"note"};function u(e,l,o,u,i,d){const c=(0,t.up)("Markdown");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("label",{for:e.slug},(0,n.zw)(e.label),9,r),(0,t._)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.checked))},null,40,a),e.note?((0,t.wg)(),(0,t.iD)("small",s,[(0,t.Wm)(c,{content:e.note},null,8,["content"])])):(0,t.kq)("",!0)])}var i=o(3945),d=o(6742),c=(0,t.aZ)({name:"CheckboxItem",components:{Markdown:i.Z},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("box",this.label)}}}),g=o(3744);const p=(0,g.Z)(c,[["render",u]]);var m=p},816:function(e,l,o){o.d(l,{Z:function(){return m}});var t=o(6252),n=o(3577);const r=(0,t._)("br",null,null,-1);function a(e,l,o,a,s,u){const i=(0,t.up)("Checkbox");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(i,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":l[0]||(l[0]=l=>e.asHtml=l)},null,8,["modelValue"]),r,(0,t._)("pre",null,[(0,t._)("code",{ref:"codeBlock",class:"markdown"},(0,n.zw)(e.outputCode),513)])])}var s=o(7869),u=o.n(s),i=o(770),d=o(9771),c=(0,t.aZ)({name:"CodeItem",components:{Checkbox:d.Z},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,i.Ae)(this.code);return(0,i.ZF)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;u().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),g=o(3744);const p=(0,g.Z)(c,[["render",a]]);var m=p},8526:function(e,l,o){o.d(l,{Z:function(){return c}});var t=o(6252);const n={class:"app-notes"},r=(0,t._)("h2",null,"Notes",-1);function a(e,l,o,a,s,u){const i=(0,t.up)("Markdown");return(0,t.wg)(),(0,t.iD)("div",n,[r,(0,t._)("p",null,[(0,t.Wm)(i,{content:e.message},null,8,["content"])])])}var s=o(3945),u=(0,t.aZ)({name:"HelpItem",components:{Markdown:s.Z},props:{message:{type:String,required:!0}}}),i=o(3744);const d=(0,i.Z)(u,[["render",a]]);var c=d},8459:function(e,l,o){o.d(l,{Z:function(){return b}});var t=o(6252);const n=e=>((0,t.dD)("data-v-5b828de6"),e=e(),(0,t.Cn)(),e),r={class:"app-results"},a=n((()=>(0,t._)("h2",null,"Output values",-1))),s=n((()=>(0,t._)("h3",null,"Preview",-1))),u=n((()=>(0,t._)("br",null,null,-1))),i=n((()=>(0,t._)("h3",null,"Code",-1)));function d(e,l,o,n,d,c){const g=(0,t.up)("Markdown"),p=(0,t.up)("CodeItem");return(0,t.wg)(),(0,t.iD)("div",r,[a,(0,t._)("div",null,[s,(0,t.Wm)(g,{class:"markdown-preview",content:e.result},null,8,["content"])]),u,(0,t._)("div",null,[i,(0,t.Wm)(p,{code:e.result},null,8,["code"])])])}var c=o(816),g=o(3945),p=(0,t.aZ)({name:"ResultsItem",components:{Markdown:g.Z,CodeItem:c.Z},props:{result:{type:String,required:!0}}}),m=o(3744);const h=(0,m.Z)(p,[["render",d],["__scopeId","data-v-5b828de6"]]);var b=h},6688:function(e,l,o){o.d(l,{Z:function(){return h}});var t=o(6252),n=o(3577);const r=["for"],a={key:0,class:"required"},s=["id","value","placeholder","required","disabled"],u={key:0,class:"note"};function i(e,l,o,i,d,c){const g=(0,t.up)("Markdown");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("label",{for:e.slug},[(0,t.Uk)((0,n.zw)(e.label),1),e.isRequired?((0,t.wg)(),(0,t.iD)("span",a,"*")):(0,t.kq)("",!0)],8,r),(0,t._)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value))},null,40,s),e.note?((0,t.wg)(),(0,t.iD)("small",u,[(0,t.Wm)(g,{content:e.note},null,8,["content"])])):(0,t.kq)("",!0)])}var d=o(6742),c=o(3945),g=(0,t.aZ)({name:"TextInput",components:{Markdown:c.Z},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("text",this.label,this.modelValue)}}}),p=o(3744);const m=(0,p.Z)(g,[["render",i],["__scopeId","data-v-de2a2f90"]]);var h=m},9040:function(e,l,o){o.r(l),o.d(l,{default:function(){return P}});var t=o(6252),n=o(9963);const r={class:"badges container-lg"},a=(0,t._)("div",{class:"row"},[(0,t._)("div",{class:"col-12"},[(0,t._)("h1",null,"Generic badges")])],-1),s={class:"row"},u={class:"col-6"},i={class:"app-input"},d=(0,t._)("h2",null,"Input values",-1),c={name:"text"},g=(0,t._)("legend",null,"Text",-1),p=(0,t._)("br",null,null,-1),m=(0,t._)("br",null,null,-1),h=(0,t._)("br",null,null,-1),b={name:"display-options"},f=(0,t._)("legend",null,"Display options",-1),v=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),k={name:"links"},w=(0,t._)("legend",null,"Links",-1),C=(0,t._)("br",null,null,-1),y=(0,t._)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),V={class:"col-6"},Z={class:"row"},q={class:"col-12"};function x(e,l,o,x,L,I){const W=(0,t.up)("TextInput"),H=(0,t.up)("Checkbox"),S=(0,t.up)("Results"),D=(0,t.up)("Help");return(0,t.wg)(),(0,t.iD)("div",r,[a,(0,t._)("div",s,[(0,t._)("div",u,[(0,t._)("div",i,[d,(0,t._)("form",{onSubmit:l[7]||(l[7]=(0,n.iM)(((...l)=>e.submit&&e.submit(...l)),["prevent"]))},[(0,t._)("fieldset",c,[g,(0,t.Wm)(W,{label:"Label",modelValue:e.label,"onUpdate:modelValue":l[0]||(l[0]=l=>e.label=l)},null,8,["modelValue"]),p,(0,t.Wm)(W,{label:"Message",modelValue:e.message,"onUpdate:modelValue":l[1]||(l[1]=l=>e.message=l),isRequired:""},null,8,["modelValue"]),m]),h,(0,t._)("fieldset",b,[f,(0,t.Wm)(W,{label:"Color",modelValue:e.badgeColor,"onUpdate:modelValue":l[2]||(l[2]=l=>e.badgeColor=l),placeholder:"e.g. blue",note:e.colorHelp},null,8,["modelValue","note"]),(0,t.Wm)(H,{label:"Large",modelValue:e.isLarge,"onUpdate:modelValue":l[3]||(l[3]=l=>e.isLarge=l)},null,8,["modelValue"]),v,(0,t.Wm)(W,{label:"Logo",modelValue:e.logo,"onUpdate:modelValue":l[4]||(l[4]=l=>e.logo=l),note:e.logoHelp},null,8,["modelValue","note"]),(0,t.Wm)(W,{label:"Logo color",modelValue:e.logoColor,"onUpdate:modelValue":l[5]||(l[5]=l=>e.logoColor=l),disabled:""===e.logo,note:e.logoColorHelp},null,8,["modelValue","disabled","note"])]),_,(0,t._)("fieldset",k,[w,(0,t.Wm)(W,{label:"Click target",modelValue:e.target,"onUpdate:modelValue":l[6]||(l[6]=l=>e.target=l),placeholder:"e.g. https://example.com",note:"URL or a local path like `/docs/`. This doesn't have to be set, but a button without a click destination is not so useful."},null,8,["modelValue"])]),C,y],32)])]),(0,t._)("div",V,[(0,t.Wm)(S,{result:e.result},null,8,["result"])])]),(0,t._)("div",Z,[(0,t._)("div",q,[(0,t.Wm)(D,{message:e.note},null,8,["message"])])])])}var L=o(2211),I=o(9930),W=o(99),H=o(9771),S=o(8526),D=o(8459),M=o(6688),U=o(2010);const T="\nThis form lets you create a fixed badge using arbitrary text and a link.\n\nFor example, describe a tools or platforms your repo is built on or built for running. This form takes care of encoding characters so they are safe for the badge URL.\n";var R=(0,t.aZ)({name:"GenericBadges",components:{Checkbox:H.Z,Help:S.Z,Results:D.Z,TextInput:M.Z},data(){return{label:"Foo",message:"Bar",badgeColor:I.b0.Green,isLarge:!1,target:"https://",logo:"",logoColor:"",result:W.t$,note:T,colorHelp:W.PL,logoHelp:W.I9,logoColorHelp:W.Wn}},methods:{submit(){L.e&&(console.debug("Process inputs and render results"),console.debug({label:this.label,message:this.message,badgeColor:this.badgeColor,isLarge:this.isLarge,target:this.target,logo:this.logo,logoColor:this.logoColor}));const e=(0,U.a)(this.label,this.message,this.badgeColor,this.isLarge,this.target,this.logo,this.logoColor,!1),l=(0,U.a)(this.label,this.message,this.badgeColor,this.isLarge,this.target,this.logo,this.logoColor,!0);this.result=`_Dash badge_\n\n${e}\n\n_Query parameter badge_\n\n${l}\n      `}}}),$=o(3744);const B=(0,$.Z)(R,[["render",x]]);var P=B}}]);
//# sourceMappingURL=generic-legacy.f0474f84.js.map