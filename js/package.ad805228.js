(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["package"],{1092:function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));const n="_Your output will appear here_"},"1cf6":function(e,t,l){"use strict";var n=l("7a23");const a=Object(n["h"])("br",null,null,-1);function o(e,t,l,o,c,d){const r=Object(n["x"])("Checkbox");return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])(r,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":t[1]||(t[1]=t=>e.asHtml=t)},null,8,["modelValue"]),a,Object(n["h"])("pre",null,[Object(n["h"])("code",{ref:"codeBlock",class:"markdown"},Object(n["z"])(e.outputCode),513)])])}var c=l("1487"),d=l.n(c),r=l("7cba"),u=l("7737"),s=Object(n["i"])({name:"Code",components:{Checkbox:u["a"]},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=Object(r["d"])(this.code);return Object(r["a"])(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;d.a.highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}});s.render=o;t["a"]=s},2156:function(e,t,l){"use strict";l("bdd2")},"446e":function(e,t,l){"use strict";var n=l("7a23");const a=Object(n["G"])("data-v-de2a2f90");Object(n["t"])("data-v-de2a2f90");const o={key:0,class:"required"},c={key:0,class:"note"};Object(n["r"])();const d=a((e,t,l,a,d,r)=>{const u=Object(n["x"])("Markdown");return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])("label",{for:e.slug},[Object(n["g"])(Object(n["z"])(e.label),1),e.isRequired?(Object(n["q"])(),Object(n["d"])("span",o,"*")):Object(n["e"])("",!0)],8,["for"]),Object(n["h"])("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value))},null,40,["id","value","placeholder","required","disabled"]),e.note?(Object(n["q"])(),Object(n["d"])("small",c,[Object(n["h"])(u,{content:e.note},null,8,["content"])])):Object(n["e"])("",!0)])});var r=l("84f8"),u=l("e6e0"),s=Object(n["i"])({name:"TextInput",components:{Markdown:u["a"]},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(r["a"])("text",this.label,this.modelValue)}}});l("2156");s.render=d,s.__scopeId="data-v-de2a2f90";t["a"]=s},7737:function(e,t,l){"use strict";var n=l("7a23");const a={key:0,class:"note"};function o(e,t,l,o,c,d){const r=Object(n["x"])("Markdown");return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])("label",{for:e.slug},Object(n["z"])(e.label),9,["for"]),Object(n["h"])("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,["id","checked"]),e.note?(Object(n["q"])(),Object(n["d"])("small",a,[Object(n["h"])(r,{content:e.note},null,8,["content"])])):Object(n["e"])("",!0)])}var c=l("e6e0"),d=l("84f8"),r=Object(n["i"])({name:"Checkbox",components:{Markdown:c["a"]},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(d["a"])("box",this.label)}}});r.render=o;t["a"]=r},8169:function(e,t,l){"use strict";var n=l("7a23");const a=Object(n["G"])("data-v-58367787");Object(n["t"])("data-v-58367787");const o={class:"app-results"},c=Object(n["h"])("h2",null,"Output values",-1),d=Object(n["h"])("h3",null,"Preview",-1),r=Object(n["h"])("br",null,null,-1),u=Object(n["h"])("h3",null,"Code",-1);Object(n["r"])();const s=a((e,t,l,a,s,i)=>{const b=Object(n["x"])("Markdown"),p=Object(n["x"])("Code");return Object(n["q"])(),Object(n["d"])("div",o,[c,Object(n["h"])("div",null,[d,Object(n["h"])(b,{class:"markdown-preview",content:e.result},null,8,["content"])]),r,Object(n["h"])("div",null,[u,Object(n["h"])(p,{code:e.result},null,8,["code"])])])});var i=l("1cf6"),b=l("e6e0"),p=Object(n["i"])({name:"Results",components:{Markdown:b["a"],Code:i["a"]},props:{result:{type:String,required:!0}}});l("aa3a");p.render=s,p.__scopeId="data-v-58367787";t["a"]=p},"84f8":function(e,t,l){"use strict";function n(e){return e.replace(/^\/+/,"")}function a(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}l.d(t,"b",(function(){return n})),l.d(t,"a",(function(){return a}))},"97c7":function(e,t,l){},aa3a:function(e,t,l){"use strict";l("97c7")},b086:function(e,t,l){"use strict";l.r(t);var n=l("7a23");const a={class:"badges container-lg"},o=Object(n["h"])("div",{class:"row"},[Object(n["h"])("div",{class:"col-12"},[Object(n["h"])("h1",null,"Package badges"),Object(n["h"])("p",null," Show your project's dependencies as badges in your docs, including an external link to the package in a registry. ")])],-1),c={class:"row"},d={class:"col-6"},r={class:"app-input"},u=Object(n["h"])("h2",null,"Input values",-1),s={name:"package"},i=Object(n["h"])("legend",null,"Package metadata",-1),b=Object(n["h"])("br",null,null,-1),p=Object(n["h"])("span",null,"Type: ",-1),h=Object(n["h"])("label",{for:"python"},"Python (PyPI)",-1),O=Object(n["h"])("label",{for:"node"},"Node (NPM)",-1),j=Object(n["h"])("label",{for:"ruby"},"Ruby (Rubygems)",-1),g=Object(n["h"])("label",{for:"go"},"Go",-1),m=Object(n["h"])("br",null,null,-1),v=Object(n["h"])("span",null,"Environment: ",-1),y={for:"env-prod"},f={for:"env-dev"},k=Object(n["h"])("br",null,null,-1),w={name:"ghRepo"},V=Object(n["h"])("legend",null,"GitHub repo",-1),q=Object(n["h"])("br",null,null,-1),T=Object(n["h"])("br",null,null,-1),x={name:"appearance"},C=Object(n["h"])("legend",null,"Dynamic badge appearance",-1),N=Object(n["h"])("br",null,null,-1),S=Object(n["h"])("input",{class:"btn",type:"submit",value:"Submit"},null,-1),E={class:"col-6"},P={class:"row"},R={class:"col-12"};function U(e,t,l,U,B,M){const I=Object(n["x"])("TextInput"),$=Object(n["x"])("Results"),H=Object(n["x"])("Help");return Object(n["q"])(),Object(n["d"])("div",a,[o,Object(n["h"])("div",c,[Object(n["h"])("div",d,[Object(n["h"])("div",r,[u,Object(n["h"])("form",{onSubmit:t[12]||(t[12]=Object(n["F"])((...t)=>e.submit&&e.submit(...t),["prevent"]))},[Object(n["h"])("fieldset",s,[i,Object(n["h"])(I,{label:"Name",modelValue:e.pkgName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pkgName=t),placeholder:"e.g. vue",isRequired:""},null,8,["modelValue"]),b,Object(n["h"])("div",null,[p,Object(n["h"])("div",null,[Object(n["E"])(Object(n["h"])("input",{type:"radio",id:"python",name:"package-type",value:"Python","onUpdate:modelValue":t[2]||(t[2]=t=>e.pkgType=t),checked:""},null,512),[[n["B"],e.pkgType]]),h]),Object(n["h"])("div",null,[Object(n["E"])(Object(n["h"])("input",{type:"radio",id:"node",name:"package-type",value:"Node","onUpdate:modelValue":t[3]||(t[3]=t=>e.pkgType=t)},null,512),[[n["B"],e.pkgType]]),O]),Object(n["h"])("div",null,[Object(n["E"])(Object(n["h"])("input",{type:"radio",id:"ruby",name:"package-type",value:"Ruby","onUpdate:modelValue":t[4]||(t[4]=t=>e.pkgType=t)},null,512),[[n["B"],e.pkgType]]),j]),Object(n["h"])("div",null,[Object(n["E"])(Object(n["h"])("input",{type:"radio",id:"go",name:"package-type",value:"Go","onUpdate:modelValue":t[5]||(t[5]=t=>e.pkgType=t)},null,512),[[n["B"],e.pkgType]]),g])]),m,Object(n["h"])("div",{class:e.envEnabled?"":e.disabledClass},[v,Object(n["E"])(Object(n["h"])("input",{type:"radio",id:"env-prod",name:"env-type",value:e.prodOption,"onUpdate:modelValue":t[6]||(t[6]=t=>e.envType=t),disabled:!e.envEnabled,checked:""},null,8,["value","disabled"]),[[n["B"],e.envType]]),Object(n["h"])("label",y,Object(n["z"])(e.prodOption),1),Object(n["E"])(Object(n["h"])("input",{type:"radio",id:"env-dev",name:"env-type",value:e.devOption,"onUpdate:modelValue":t[7]||(t[7]=t=>e.envType=t),disabled:!e.envEnabled},null,8,["value","disabled"]),[[n["B"],e.envType]]),Object(n["h"])("label",f,Object(n["z"])(e.devOption),1)],2)]),k,Object(n["h"])("fieldset",w,[V,Object(n["h"])(I,{label:"Username",modelValue:e.username,"onUpdate:modelValue":t[8]||(t[8]=t=>e.username=t)},null,8,["modelValue"]),q,Object(n["h"])(I,{label:"Repo name",modelValue:e.repoName,"onUpdate:modelValue":t[9]||(t[9]=t=>e.repoName=t)},null,8,["modelValue"])]),T,Object(n["h"])("fieldset",x,[C,Object(n["h"])(I,{label:"Logo",modelValue:e.logo,"onUpdate:modelValue":t[10]||(t[10]=t=>e.logo=t),placeholder:"e.g. vue.js",note:"Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`"},null,8,["modelValue"]),Object(n["h"])(I,{label:"Logo color",modelValue:e.logoColor,"onUpdate:modelValue":t[11]||(t[11]=t=>e.logoColor=t),disabled:""===e.logo,class:""===e.logo?e.disabledClass:"",placeholder:"e.g. white or #fff or #ffffff",note:"You can override with your own color, or leave blank to use the badge's own rich colors (these are often poor for reading on a dark background, while `white` is bland but most readable)."},null,8,["modelValue","disabled","class"])]),N,S],32)])]),Object(n["h"])("div",E,[Object(n["h"])($,{result:e.result},null,8,["result"])])]),Object(n["h"])("div",P,[Object(n["h"])("div",R,[Object(n["h"])(H,{message:e.note},null,8,["message"])])])])}var B=l("17a3"),M=l("1092"),I=l("ca2c"),$=l("8169"),H=l("446e"),_=l("0356"),L=l("a5a3"),G=l("b8e9"),z=l("5167"),D=l("7cba"),A=l("8dd6");function J(e,t,l){const n=`${t}/${e}`;return Object(z["a"])(L["f"].label,e,L["f"].color,L["f"].isLarge,n,l.logo,l.logoColor)}function Y(e,t,l,n){const a="Package - "+t;l.isLarge=L["e"].IS_LARGE;const o=Object(A["e"])(e,t,n),c=Object(A["d"])(l),d=Object(G["a"])(o,c),r=`${_["e"].Node}/${t}`;return Object(D["b"])({altText:a,imageTarget:d,linkTarget:r})}var F=l("2eda");const K="\n- Environent setting is for Node packages only and must match whether the package is in \"dependencies\" or \"devDependencies\".\n- Optionally set Repo fields to your _own_ project, so the badge dynamically pick up version number of the package chosen above.\n- Only NPM is currently supported for the dynamic package.\n- Sample name values for Go: 'http' (redirects to 'net/http') or 'encoding/json'.\n";var Q=Object(n["i"])({name:"PackageBadges",components:{Help:I["a"],Results:$["a"],TextInput:H["a"]},data(){return{pkgName:"vue",pkgType:"Node",devOption:A["a"][A["a"].Dev],prodOption:A["a"][A["a"].Prod],envType:A["a"][A["a"].Prod],username:"MichaelCurrin",repoName:"badge-generator",logo:"",logoColor:B["a"].LogoDefault,result:M["a"],note:K,disabledClass:"disabled-text"}},computed:{envEnabled(){return"Node"===this.pkgType}},methods:{submit(){console.debug("Process inputs and render results");const e={logo:this.logo,logoColor:this.logoColor},t=this.pkgType,l=_["e"][t],n=l?J(this.pkgName,l,e):"",a=new F["a"](this.username,this.repoName),o=this.envType,c=A["a"][o],d=l===_["e"].Node?Y(a,this.pkgName,e,c):"";this.result=`${n}\n\n${d}\n        `}}});Q.render=U;t["default"]=Q},bdd2:function(e,t,l){},ca2c:function(e,t,l){"use strict";var n=l("7a23");const a={class:"app-notes"},o=Object(n["h"])("h2",null,"Notes",-1);function c(e,t,l,c,d,r){const u=Object(n["x"])("Markdown");return Object(n["q"])(),Object(n["d"])("div",a,[o,Object(n["h"])("p",null,[Object(n["h"])(u,{content:e.message},null,8,["content"])])])}var d=l("e6e0"),r=Object(n["i"])({name:"Help",components:{Markdown:d["a"]},props:{message:{type:String,required:!0}}});r.render=c;t["a"]=r}}]);
//# sourceMappingURL=package.ad805228.js.map