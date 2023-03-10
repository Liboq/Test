import{_ as g,r as p,o as D,m as B,a as y,w,s as z,b as r,c as u,d as i,t as h,p as H,e as L,g as F,f as k,h as I,F as C,i as E,u as S,n as M,j as $,k as v,l as T,q as P,v as U,x as N,y as V,z as O,A as j,B as q,C as Y,D as b,E as G,G as J,H as W,I as K,J as Q}from"./vue-i18n.esm-bundler.459ac964.js";var X="./assets/logo.f5b02f2f.png";const Z=n=>(H("data-v-b0d963ec"),n=n(),L(),n),ee={class:"header"},te=Z(()=>i("div",{class:"header-logo"},[i("img",{src:X})],-1)),oe={class:"header-right"},se={class:"header-right-nav"},ne={__name:"DocHeader",setup(n){const t=window.document.getElementsByTagName("body")[0].style,o=+localStorage.getItem("themeIndex"),e=p(o),a=()=>{e.value<y["--am-themeColor"].length-1?e.value+=1:e.value=0};D(()=>{for(const s of B)t.setProperty(s,y[s][e.value]),console.log(s,y[s][e.value])}),w(e,s=>{localStorage.setItem("themeIndex",e.value);for(const _ of B)t.setProperty(_,y[_][e.value]);z(e.value)},{immediate:!0});const{ctx:c}=F(),l=p(!1),f=s=>{s?c.$i18n.locale="en_US":c.$i18n.locale="zh_CN",l.value=!s};return(s,_)=>(r(),u("div",ee,[te,i("div",oe,[i("div",se,[i("span",{onClick:a},h(s.$t("header_nav.themes")),1),i("span",null,h(s.$t("header_nav.design")),1),i("span",null,h(s.$t("header_nav.components")),1)]),i("div",{class:"header-right-i18",onClick:_[0]||(_[0]=d=>f(l.value))},h(s.$t("header.language")),1)])]))}};var ae=g(ne,[["__scopeId","data-v-b0d963ec"]]);const ce={class:"items-header"},re=["onClick"],le={__name:"DocAside",setup(n){const t=p(88),o=p(0);function e(){const{pageYOffset:l}=window;t.value=Math.max(0,88-l)}const a=k(()=>({top:`${t.value}px`,bottom:`${o.value}px`}));window.addEventListener("scroll",e),e();const c=k(()=>I.site);return(l,f)=>(r(),u("div",{class:"Aside",style:M(S(a))},[(r(!0),u(C,null,E(S(c).locales["zh-CN"].nav,(s,_)=>(r(),u("ul",{key:_,class:"aside-items"},[i("li",ce,h(s.title),1),(r(!0),u(C,null,E(s.items,d=>(r(),u("li",{key:d,class:"items",onClick:m=>l.$router.push(d.path)},h(d.title),9,re))),128))]))),128))],4))}};var _e=g(le,[["__scopeId","data-v-648fac07"]]);function ie(n){const t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const o=document.getSelection();if(!o)return;const e=o.rangeCount>0?o.getRangeAt(0):!1;t.select(),document.execCommand("copy"),document.body.removeChild(t),e&&(o.removeAllRanges(),o.addRange(e))}const ue={class:"Main"},de={__name:"DocMain",setup(n){const t=()=>{const o=document.querySelectorAll(".amberm-doc-content pre code");if(!(!o||!o.length))for(let e=0;e<o.length;e++){const a=o[e];let c=null;a.addEventListener("click",()=>{if(c)return;const l=a.innerText;ie(l),a.classList.add("code-copy-success"),c=setTimeout(()=>{a.classList.remove("code-copy-success"),c=null},1400)})}};return D(()=>{t()}),(o,e)=>{const a=$("router-view"),c=$("g-markdown");return r(),u("div",ue,[v(c,null,{default:T(()=>[v(a)]),_:1})])}}};const pe=["src"],me={__name:"DocMobile",setup(n){const{locale:t}=P(),{location:o}=window,e=U(),a=p(88),c=p(0);function l(){const{pageYOffset:m}=window;a.value=Math.max(0,88-m)}const f=k(()=>({top:`${a.value}px`,bottom:`${c.value}px`}));window.addEventListener("scroll",l),l();const s=o.pathname.split("/")[2],_=o.origin.includes("github")?`${o.origin}/Test`:`${o.origin}`;console.log(e);const d=p(`${_}/mobile.html?lang=${t.value}&path=/${s!=null?s:""}`);return w(()=>t.value,()=>{d.value=`${_}/mobile.html?lang=${t.value}&path=/${s!=null?s:""}`}),w(()=>e.path,()=>{var m;d.value=`${_}/mobile.html?lang=${t.value}&path=/${(m=e.path.split("/")[2])!=null?m:""}`}),(m,Ne)=>(r(),u("div",{class:"Mobile",style:M(S(f))},[i("iframe",{scrolling:"auto",src:d.value},null,8,pe)],4))}};var he=g(me,[["__scopeId","data-v-3326a228"]]);const ve=V(" \u5F00\u59CB "),ge={__name:"desktopMain",setup(n){return(t,o)=>{const e=$("router-link");return r(),N(e,{to:"/start"},{default:T(()=>[ve]),_:1})}}};var fe=g(ge,[["__scopeId","data-v-541fd9f2"]]);const ye={class:"container"},$e={__name:"layout",setup(n){return(t,o)=>(r(),u(C,null,[v(ae),i("div",ye,[v(_e),v(de),v(he)])],64))}};var xe=g($e,[["__scopeId","data-v-8841818c"]]);const{locales:be}=I.site;function we(){const n=[],t=Object.keys(b);be?n.push({name:"notFound",path:"/:path(.*)+"}):n.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"start"}});function o(e,a){n.push({name:a||"home",path:`/${a||""}`,component:e,meta:{lang:a}})}return t.forEach(e=>{e==="home"&&o(b[e]),n.push({name:e,path:`${e}`,component:b[e],meta:{name:e}})}),n}const ke=[{path:"/",name:"/",component:fe},{path:"/start",name:"start",component:xe,redirect:"/introduce",children:we()}],x=O({history:j(),routes:ke});x.afterEach(()=>{q(G)});var A;((A=I.site.simulator)==null?void 0:A.syncPathFromSimulator)!==!1&&Y(x);window.vueRouter=x;var Ce={header:{language:"English"},header_nav:{design:"\u8BBE\u8BA1",components:"\u7EC4\u4EF6",themes:"\u4E3B\u9898"}},Se={header:{language:"\u4E2D\u6587"},header_nav:{design:"Design",components:"Components",themes:"Themes"}};const De=J({locale:"en_US",messages:{zh_CN:Ce,en_US:Se}});const Ie={class:"block-container"},Be={__name:"DemoBlock",setup(n){return D(()=>{const t=W();console.dir(t.default)}),(t,o)=>(r(),u("div",Ie,[K(t.$slots,"default")]))}};var Ee={install(n){n.component("DemoBlock",Be)}};const Ae={};function Me(n,t){const o=$("router-view");return r(),N(o)}var Te=g(Ae,[["render",Me]]);const R=Q(Te);R.use(De).use(x).use(Ee).mount("#app");console.log(R);
