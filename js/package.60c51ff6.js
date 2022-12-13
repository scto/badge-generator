"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[359],{99:function(e,l,o){o.d(l,{I9:function(){return a},PL:function(){return t},Wn:function(){return r},t$:function(){return n}});const n="_Your output will appear here_",t="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",a="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",r="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},6742:function(e,l,o){function n(e){return e.replace(/^\/+/,"")}function t(...e){const l=e.join("-");return l.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}o.d(l,{F:function(){return n},l:function(){return t}})},9771:function(e,l,o){o.d(l,{Z:function(){return m}});var n=o(6252),t=o(3577);const a=["for"],r=["id","checked"],d={key:0,class:"note"};function u(e,l,o,u,s,i){const p=(0,n.up)("Markdown");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("label",{for:e.slug},(0,t.zw)(e.label),9,a),(0,n._)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.checked))},null,40,r),e.note?((0,n.wg)(),(0,n.iD)("small",d,[(0,n.Wm)(p,{content:e.note},null,8,["content"])])):(0,n.kq)("",!0)])}var s=o(3945),i=o(6742),p=(0,n.aZ)({name:"CheckboxItem",components:{Markdown:s.Z},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,i.l)("box",this.label)}}}),c=o(3744);const g=(0,c.Z)(p,[["render",u]]);var m=g},816:function(e,l,o){o.d(l,{Z:function(){return m}});var n=o(6252),t=o(3577);const a=(0,n._)("br",null,null,-1);function r(e,l,o,r,d,u){const s=(0,n.up)("Checkbox");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(s,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":l[0]||(l[0]=l=>e.asHtml=l)},null,8,["modelValue"]),a,(0,n._)("pre",null,[(0,n._)("code",{ref:"codeBlock",class:"markdown"},(0,t.zw)(e.outputCode),513)])])}var d=o(7869),u=o.n(d),s=o(770),i=o(9771),p=(0,n.aZ)({name:"CodeItem",components:{Checkbox:i.Z},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,s.Ae)(this.code);return(0,s.ZF)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;u().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),c=o(3744);const g=(0,c.Z)(p,[["render",r]]);var m=g},8526:function(e,l,o){o.d(l,{Z:function(){return p}});var n=o(6252);const t={class:"app-notes"},a=(0,n._)("h2",null,"Notes",-1);function r(e,l,o,r,d,u){const s=(0,n.up)("Markdown");return(0,n.wg)(),(0,n.iD)("div",t,[a,(0,n._)("p",null,[(0,n.Wm)(s,{content:e.message},null,8,["content"])])])}var d=o(3945),u=(0,n.aZ)({name:"HelpItem",components:{Markdown:d.Z},props:{message:{type:String,required:!0}}}),s=o(3744);const i=(0,s.Z)(u,[["render",r]]);var p=i},8459:function(e,l,o){o.d(l,{Z:function(){return v}});var n=o(6252);const t=e=>((0,n.dD)("data-v-5b828de6"),e=e(),(0,n.Cn)(),e),a={class:"app-results"},r=t((()=>(0,n._)("h2",null,"Output values",-1))),d=t((()=>(0,n._)("h3",null,"Preview",-1))),u=t((()=>(0,n._)("br",null,null,-1))),s=t((()=>(0,n._)("h3",null,"Code",-1)));function i(e,l,o,t,i,p){const c=(0,n.up)("Markdown"),g=(0,n.up)("CodeItem");return(0,n.wg)(),(0,n.iD)("div",a,[r,(0,n._)("div",null,[d,(0,n.Wm)(c,{class:"markdown-preview",content:e.result},null,8,["content"])]),u,(0,n._)("div",null,[s,(0,n.Wm)(g,{code:e.result},null,8,["code"])])])}var p=o(816),c=o(3945),g=(0,n.aZ)({name:"ResultsItem",components:{Markdown:c.Z,CodeItem:p.Z},props:{result:{type:String,required:!0}}}),m=o(3744);const b=(0,m.Z)(g,[["render",i],["__scopeId","data-v-5b828de6"]]);var v=b},6688:function(e,l,o){o.d(l,{Z:function(){return b}});var n=o(6252),t=o(3577);const a=["for"],r={key:0,class:"required"},d=["id","value","placeholder","required","disabled"],u={key:0,class:"note"};function s(e,l,o,s,i,p){const c=(0,n.up)("Markdown");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("label",{for:e.slug},[(0,n.Uk)((0,t.zw)(e.label),1),e.isRequired?((0,n.wg)(),(0,n.iD)("span",r,"*")):(0,n.kq)("",!0)],8,a),(0,n._)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value))},null,40,d),e.note?((0,n.wg)(),(0,n.iD)("small",u,[(0,n.Wm)(c,{content:e.note},null,8,["content"])])):(0,n.kq)("",!0)])}var i=o(6742),p=o(3945),c=(0,n.aZ)({name:"TextInput",components:{Markdown:p.Z},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,i.l)("text",this.label,this.modelValue)}}}),g=o(3744);const m=(0,g.Z)(c,[["render",s],["__scopeId","data-v-de2a2f90"]]);var b=m},9208:function(e,l,o){o.r(l),o.d(l,{default:function(){return ae}});var n=o(6252),t=o(9963),a=o(3577);const r={class:"badges container-lg"},d=(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-12"},[(0,n._)("h1",null,"Package badges"),(0,n._)("p",null," Show your project's dependencies as badges in your docs, including an external link to the package in a registry. ")])],-1),u={class:"row"},s={class:"col-6"},i={class:"app-input"},p=(0,n._)("h2",null,"Input values",-1),c={name:"package"},g=(0,n._)("legend",null,"Package metadata",-1),m=(0,n._)("br",null,null,-1),b=(0,n._)("span",null,"Type: ",-1),v=(0,n._)("label",{for:"python"},"Python (PyPI)",-1),h=(0,n._)("label",{for:"node"},"Node (NPM)",-1),y=(0,n._)("label",{for:"ruby"},"Ruby (RubyGems)",-1),f=(0,n._)("label",{for:"go"},"Go",-1),_=(0,n._)("br",null,null,-1),k=(0,n._)("span",null,"Environment: ",-1),w=["value","disabled"],C={for:"env-prod"},V=["value","disabled"],Z={for:"env-dev"},T=(0,n._)("br",null,null,-1),q={name:"ghRepo"},N=(0,n._)("legend",null,"GitHub repo",-1),G=(0,n._)("br",null,null,-1),I=(0,n._)("br",null,null,-1),P={name:"display-options"},S=(0,n._)("legend",null,"Display options",-1),U=(0,n._)("br",null,null,-1),H=(0,n._)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),R={class:"col-6"},W={class:"row"},$={class:"col-12"};function x(e,l,o,x,D,B){const M=(0,n.up)("TextInput"),E=(0,n.up)("Results"),L=(0,n.up)("Help");return(0,n.wg)(),(0,n.iD)("div",r,[d,(0,n._)("div",u,[(0,n._)("div",s,[(0,n._)("div",i,[p,(0,n._)("form",{onSubmit:l[12]||(l[12]=(0,t.iM)(((...l)=>e.submit&&e.submit(...l)),["prevent"]))},[(0,n._)("fieldset",c,[g,(0,n.Wm)(M,{label:"Name",modelValue:e.pkgName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.pkgName=l),placeholder:"e.g. vue",isRequired:""},null,8,["modelValue"]),m,(0,n._)("div",null,[b,(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"radio",id:"python",name:"package-type",value:"Python","onUpdate:modelValue":l[1]||(l[1]=l=>e.pkgType=l),checked:""},null,512),[[t.G2,e.pkgType]]),v]),(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"radio",id:"node",name:"package-type",value:"Node","onUpdate:modelValue":l[2]||(l[2]=l=>e.pkgType=l)},null,512),[[t.G2,e.pkgType]]),h]),(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"radio",id:"ruby",name:"package-type",value:"Ruby","onUpdate:modelValue":l[3]||(l[3]=l=>e.pkgType=l)},null,512),[[t.G2,e.pkgType]]),y]),(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{type:"radio",id:"go",name:"package-type",value:"Go","onUpdate:modelValue":l[4]||(l[4]=l=>e.pkgType=l)},null,512),[[t.G2,e.pkgType]]),f])]),_,(0,n._)("div",{class:(0,a.C_)(e.dynamicBadgeEnabled?"":e.disabledClass)},[k,(0,n._)("span",null,[(0,n.wy)((0,n._)("input",{type:"radio",id:"env-prod",name:"env-type",value:e.prodOption,disabled:!e.dynamicBadgeEnabled,"onUpdate:modelValue":l[5]||(l[5]=l=>e.envType=l),checked:""},null,8,w),[[t.G2,e.envType]]),(0,n._)("label",C,(0,a.zw)(e.prodOption),1)]),(0,n._)("span",null,[(0,n.wy)((0,n._)("input",{type:"radio",id:"env-dev",name:"env-type",value:e.devOption,disabled:!e.dynamicBadgeEnabled,"onUpdate:modelValue":l[6]||(l[6]=l=>e.envType=l)},null,8,V),[[t.G2,e.envType]]),(0,n._)("label",Z,(0,a.zw)(e.devOption),1)])],2)]),T,(0,n._)("fieldset",q,[N,(0,n.Wm)(M,{label:"Username",modelValue:e.username,"onUpdate:modelValue":l[7]||(l[7]=l=>e.username=l),disabled:!e.dynamicBadgeEnabled},null,8,["modelValue","disabled"]),G,(0,n.Wm)(M,{label:"Repo name",modelValue:e.repoName,"onUpdate:modelValue":l[8]||(l[8]=l=>e.repoName=l),disabled:!e.dynamicBadgeEnabled},null,8,["modelValue","disabled"])]),I,(0,n._)("fieldset",P,[S,(0,n.Wm)(M,{label:"Color",modelValue:e.badgeColor,"onUpdate:modelValue":l[9]||(l[9]=l=>e.badgeColor=l),placeholder:"e.g. blue",note:e.colorHelp},null,8,["modelValue","note"]),(0,n.Wm)(M,{label:"Logo",modelValue:e.logo,"onUpdate:modelValue":l[10]||(l[10]=l=>e.logo=l),placeholder:"e.g. vue.js",note:e.logoHelp},null,8,["modelValue","note"]),(0,n.Wm)(M,{label:"Logo color",modelValue:e.logoColor,"onUpdate:modelValue":l[11]||(l[11]=l=>e.logoColor=l),disabled:""===e.logo||!e.dynamicBadgeEnabled,class:(0,a.C_)(""===e.logo?e.disabledClass:""),placeholder:"e.g. white or #fff or #ffffff",note:e.logoColorHelp},null,8,["modelValue","disabled","class","note"])]),U,H],32)])]),(0,n._)("div",R,[(0,n.Wm)(E,{result:e.result},null,8,["result"])])]),(0,n._)("div",W,[(0,n._)("div",$,[(0,n.Wm)(L,{message:e.note},null,8,["message"])])])])}var D=o(2211),B=o(9930),M=o(99),E=o(8526),L=o(8459),j=o(6688),z=o(4037),O=o(1409),A=o(2334),F=o(2010),Q=o(770),Y=o(4879);function J(e,l,o,n){const t=`${l}/${e}`;return(0,F.a)(O.j$.label,e,n||O.j$.color,O.j$.isLarge,t,o.logo,o.logoColor)}function K(e,l,o,n,t){const a=`Package - ${l}`;o.isLarge=O.P7.IS_LARGE;const r=(0,Y.Bn)(e,l,n),d=(0,Y.DT)(o);t&&(d.color=t);const u=(0,A.Q)(r,d),s=`${z.zZ.Node}/${l}`;return(0,Q.ad)({altText:a,imageTarget:u,linkTarget:s})}var X=o(8209),ee=o(5638);const le="\n- For NPM, the badge is dynamic - whatever package name you set, the version of that package in your repo will be used, without having to update the badge code. The Environent setting is for prod vs dev dependencies.\n- For the rest, the badge is just static - it does not care about your repo. If you put a version number in your badge, you'll have to remember to update it manually.\n- Sample name values for Go: 'http' (redirects to 'net/http') or 'encoding/json'.\n";var oe=(0,n.aZ)({name:"PackageBadges",components:{Help:E.Z,Results:L.Z,TextInput:j.Z},data(){return{pkgName:"vue",pkgType:"Node",devOption:Y.Gv[Y.Gv.Dev],prodOption:Y.Gv[Y.Gv.Prod],envType:Y.Gv[Y.Gv.Prod],username:ee.Z.getRepoUsername(),repoName:ee.Z.getRepoName(),badgeColor:B.b0.Default,logo:"",logoColor:B.b0.LogoDefault,result:M.t$,note:le,colorHelp:M.PL,logoHelp:M.I9,logoColorHelp:M.Wn,disabledClass:"disabled-text"}},computed:{dynamicBadgeEnabled(){return"Node"===this.pkgType}},methods:{submit(){D.e&&console.debug("Process inputs and render results");const e={logo:this.logo,logoColor:this.logoColor},l=this.pkgType,o=z.zZ[l],n=o?J(this.pkgName,o,e,this.badgeColor):"";ee.Z.setRepoUsername(this.username),ee.Z.setRepoName(this.repoName);const t=new X.MA(this.username,this.repoName),a=this.envType,r=Y.Gv[a],d=o===z.zZ.Node?K(t,this.pkgName,e,r,this.badgeColor):"";this.result=`${n}\n\n${d}\n        `}}}),ne=o(3744);const te=(0,ne.Z)(oe,[["render",x]]);var ae=te}}]);
//# sourceMappingURL=package.60c51ff6.js.map