(function(e){function a(a){for(var n,i,s=a[0],c=a[1],d=a[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(a);while(p.length)p.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(n=!1)}n&&(r.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},o={app:0},r=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/DevMarlon/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var l=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("NavBar"),t("v-main",[t("Content")],1)],1)},r=[],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-navigation-drawer",{attrs:{dark:"",app:"",clipped:""},model:{value:e.drawer,callback:function(a){e.drawer=a},expression:"drawer"}},[t("v-img",{staticClass:"rounded-circle ma-4",attrs:{alt:e.dataDev.image.alt,height:"13rem",src:e.dataDev.image.src}}),t("div",{staticClass:"d-flex justify-center flex-column ma-2"},[t("h2",{staticClass:"white--text font-weight-medium"},[e._v(e._s(e.dataDev.nome))]),t("h4",{staticClass:"white--text font-weight-medium"},[e._v(e._s(e.dataDev.dev))])]),t("v-divider"),t("v-expansion-panels",{attrs:{dark:"",accordion:""}},e._l(e.painels,(function(a,n){return t("v-expansion-panel",{key:n},[t("v-expansion-panel-header",[e._v(e._s(a.title))]),e._l(a.content,(function(a,n){return t("v-expansion-panel-content",{key:n},[e._v(" "+e._s(a)+" ")])}))],2)})),1)],1),t("v-app-bar",{attrs:{dense:"",app:"",dark:"","clipped-left":""}},[t("v-app-bar-nav-icon",{attrs:{color:"primary"},on:{click:function(a){a.stopPropagation(),e.drawer=!e.drawer}}}),t("v-btn",{attrs:{color:"primary",icon:"",dark:""},on:{click:function(a){return e.redirect(e.github)}}},[t("v-icon",[e._v("mdi-github")])],1),t("v-btn",{attrs:{color:"primary",icon:"",dark:""},on:{click:function(a){return e.redirect(e.email)}}},[t("v-icon",[e._v("mdi-email")])],1),t("v-spacer"),t("v-btn",{attrs:{color:"primary",icon:"",dark:""},on:{click:function(a){return e.redirect(e.facebook)}}},[t("v-icon",[e._v("mdi-facebook")])],1),t("v-btn",{attrs:{color:"primary",icon:"",dark:""},on:{click:function(a){return e.redirect(e.instagram)}}},[t("v-icon",[e._v("mdi-instagram")])],1),t("v-btn",{attrs:{color:"primary",icon:"",dark:""},on:{click:function(a){return e.redirect(e.whatsapp)}}},[t("v-icon",[e._v("mdi-whatsapp")])],1)],1)],1)},s=[],c={data:function(){return{dataDev:{nome:"Marlon Rodrigues",dev:"Desenvolvedor",image:{src:"https://avatars0.githubusercontent.com/u/42067419?s=400&u=a4833b5dd0f63825490467dcbf8dda910cf49cfa&v=4",alt:"FotoMarlonDev"}},drawer:!1,modal:!1,github:"https://github.com/m4rlonr",facebook:"https://www.facebook.com/M4rlon.R0drigues",instagram:"https://www.instagram.com/m4rlon.r/",whatsapp:"https://api.whatsapp.com/send?phone=5565984060387&text=Ol%C3%A1%2C%20Marlon!",email:"marlon.rodrigues14@outlook.com",painels:[{id:0,title:"Perfil",content:["Estudioso, gosto de obter conhecimento e para isso invisto varias horas em pesquisas e leitura","Dedicado, sempre buscando cumprir com objetivos e metas ","Fácil convivio, facilidade em comunicação e trabalho em equipe","Dinâmico, fácil adaptação em situações diversas"]},{id:1,title:"Habilidades",content:["Desenvolvimento com JavaScript, Css3 e HTML4","Uso de React-Native uma FrameWork poderosa para desenvolvimento mobile","Uso de ReactJs uma FrameWork usada para desenvolvimento Web","Uso de VueJs uma FrameWork com muitos recursos e com inúmeras possibilidades que possibilitam uma ótima experiência e construção de sistemas e páginas Web","Uso de BootStrap4 junto com HTML5 e JavaScript, ótima para contruções simples e que visa simplicidade de desenpenho","Uso de Python, Linguagem muito poderosa de Alto nível muito usada em Ciência de dados","Uso de Git, facilita o trabalho em equipe e controle de código"]},{id:2,title:"Escolaridade",content:["Ensino fundamental completo, concluído no ano de 2014","Ensino médio completo, concluído no ano de 2017","Cursando ensino superior, Bacharel em Ciência da Computação, turma 2018/1"]},{id:3,title:"Hobbys",content:["Praticante de Musculação","Musico, apreciador e estudante de musica","Grande admirador de artes marciais como JiuJitsu","Estudo de novas tecnologias em diversas áreas como eletrônica, desenvolvimento e etc"]},{id:4,title:"Construção do site",content:["Construído com FrameWork VueJs com o plugin Vuetify e Axios","VueJs é uma FrameWork de fácil uso, com funções bem definidas e boa documentação","Vuetify é usada construção de Layouts, o uso de seus componentes deixam o projeto muito bonito com diversas propriedades","Axios usados para chamadas HTTP, plugin muito usado e disponível para diversas FrameWork como ReactJs e etc"]}]}},methods:{redirect:function(e){e!==this.email?window.open(e,"_blank"):(alert("Você enviará mensagem para: marlon.rodrigues14@outlook.com"),window.open("mailto:".concat(this.email),"_blank"))}}},d=c,l=t("2877"),u=t("6544"),p=t.n(u),m=t("40dc"),v=t("5bc1"),f=t("8336"),h=t("ce7e"),b=t("cd55"),g=t("49e2"),w=t("c865"),x=t("0393"),_=t("132d"),k=t("adda"),y=t("f774"),V=t("2fa4"),C=Object(l["a"])(d,i,s,!1,null,null,null),j=C.exports;p()(C,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VDivider:h["a"],VExpansionPanel:b["a"],VExpansionPanelContent:g["a"],VExpansionPanelHeader:w["a"],VExpansionPanels:x["a"],VIcon:_["a"],VImg:k["a"],VNavigationDrawer:y["a"],VSpacer:V["a"]});var D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"d-flex",attrs:{fluid:""}},[t("v-row",e._l(e.listItens,(function(a){return t("v-col",{key:a.id,attrs:{cols:"12",xl:"3",lg:"3",md:"4",sm:"6",xs:"12"}},[t("v-card",{staticClass:"mx-auto ma-1",attrs:{dark:"","max-width":"21rem"}},[t("v-img",{staticClass:"align-end",attrs:{src:a.imagem,contain:"",height:"15rem"}}),t("v-card-title",[e._v(e._s(a.displayName))]),t("v-card-text",[t("span",[e._v("Desenvolvimento: "+e._s(a.language))])]),t("v-card-actions",[t("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.redirect(a.html_url)}}},[e._v(" Ir ao repositório ")]),t("v-spacer"),t("v-btn",{attrs:{icon:""},on:{click:function(a){e.show=!e.show}}},[t("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t("v-expand-transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[t("v-divider"),t("v-card-text",[e._v(" "+e._s(a.description)+" ")])],1)])],1)],1)})),1)],1)},O=[],P=(t("99af"),t("a15b"),t("d81d"),t("fb6a"),t("b0c0"),t("ac1f"),t("1276"),t("96cf"),t("1da1")),M=t("bc3a"),E=t.n(M),J={data:function(){return{show:!1,panel:[],listItens:[]}},methods:{redirect:function(e){window.open("".concat(e),"_blank")}},mounted:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function a(){var t,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.get("https://api.github.com/users/m4rlonr/repos");case 3:t=a.sent,n=t.data,n.map((function(e){e.displayName=e.name.charAt(0).toUpperCase()+e.name.slice(1).split("_").join(" "),e.imagem="https://raw.githubusercontent.com/".concat(e.owner.login,"/").concat(e.name,"/master/").concat(e.name,".png")})),e.listItens=n,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("Deu erro");case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()}},A=J,S=t("b0af"),T=t("99d9"),I=t("62ad"),B=t("a523"),F=t("0789"),N=t("0fd9"),R=Object(l["a"])(A,D,O,!1,null,null,null),W=R.exports;p()(R,{VBtn:f["a"],VCard:S["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:I["a"],VContainer:B["a"],VDivider:h["a"],VExpandTransition:F["a"],VIcon:_["a"],VImg:k["a"],VRow:N["a"],VSpacer:V["a"]});var U={name:"App",components:{NavBar:j,Content:W},data:function(){return{posts:[]}}},H=U,q=t("7496"),L=t("f6c4"),$=Object(l["a"])(H,o,r,!1,null,null,null),G=$.exports;p()($,{VApp:q["a"],VMain:L["a"]});var z=t("f309");n["a"].use(z["a"]);var K=new z["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:K,render:function(e){return e(G)}}).$mount("#app")}});
//# sourceMappingURL=app.b0f506e9.js.map