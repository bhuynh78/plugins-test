import{importShared as I}from"./__federation_fn_import-C3MGflHL.js";import{g as re}from"./_commonjsHelpers-C932wzq6.js";var ae={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const oe=re(ae);var ie=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function D(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(oe[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}for(var o=new RegExp(ie),s=null;(s=o.exec(e))!==null;)if(s[0].trim())if(s[1]){var i=s[1].trim(),u=[i,""];i.indexOf("=")>-1&&(u=i.split("=")),t.attrs[u[0]]=u[1],o.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var ce=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,ue=/^\s*$/,le=Object.create(null);function G(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var r=[];for(var o in n)r.push(o+'="'+n[o]+'"');return r.length?" "+r.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(G,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var pe={parse:function(e,t){t||(t={}),t.components||(t.components=le);var n,r=[],o=[],s=-1,i=!1;if(e.indexOf("<")!==0){var u=e.indexOf("<");r.push({type:"text",content:u===-1?e:e.substring(0,u)})}return e.replace(ce,function(p,c){if(i){if(p!=="</"+n.name+">")return;i=!1}var m,E=p.charAt(1)!=="/",$=p.startsWith("<!--"),v=c+p.length,w=e.charAt(v);if($){var h=D(p);return s<0?(r.push(h),r):((m=o[s]).children.push(h),r)}if(E&&(s++,(n=D(p)).type==="tag"&&t.components[n.name]&&(n.type="component",i=!0),n.voidElement||i||!w||w==="<"||n.children.push({type:"text",content:e.slice(v,e.indexOf("<",v))}),s===0&&r.push(n),(m=o[s-1])&&m.children.push(n),o[s]=n),(!E||n.voidElement)&&(s>-1&&(n.voidElement||n.name===p.slice(2,-1))&&(s--,n=s===-1?r:o[s]),!i&&w!=="<"&&w)){m=s===-1?r:o[s].children;var g=e.indexOf("<",v),f=e.slice(v,g===-1?void 0:g);ue.test(f)&&(f=" "),(g>-1&&s+m.length>=0||f!==" ")&&m.push({type:"text",content:f})}}),r},stringify:function(e){return e.reduce(function(t,n){return t+G("",n)},"")}};function A(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const V={};function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&V[t[0]]||(typeof t[0]=="string"&&(V[t[0]]=new Date),A(...t))}const X=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function J(e,t,n){e.loadNamespaces(t,X(e,n))}function q(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,X(e,r))}function fe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],o=t.options?t.options.fallbackLng:!1,s=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const i=(u,p)=>{const c=t.services.backendConnector.state[`${u}|${p}`];return c===-1||c===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||i(r,e)&&(!o||i(s,e)))}function de(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?(F("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(o,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,e))return!1}}):fe(e,t,n)}function Z(e){return e.displayName||e.name||(typeof e=="string"&&e.length>0?e:"Unknown")}const ge=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,me={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},he=e=>me[e],ye=e=>e.replace(ge,he);let U={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:ye};function be(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};U={...U,...e}}function Q(){return U}let _;function xe(e){_=e}function R(){return _}const{Fragment:ve,isValidElement:z,cloneElement:Ne,createElement:O,Children:we}=await I("react");function K(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function M(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?L(t):t}function $e(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>z(t))}function L(e){return Array.isArray(e)?e:[e]}function Ee(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function ee(e,t){if(!e)return"";let n="";const r=L(e),o=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return r.forEach((s,i)=>{if(typeof s=="string")n+=`${s}`;else if(z(s)){const u=Object.keys(s.props).length,p=o.indexOf(s.type)>-1,c=s.props.children;if(!c&&p&&u===0)n+=`<${s.type}/>`;else if(!c&&(!p||u!==0))n+=`<${i}></${i}>`;else if(s.props.i18nIsDynamicList)n+=`<${i}></${i}>`;else if(p&&u===1&&typeof c=="string")n+=`<${s.type}>${c}</${s.type}>`;else{const m=ee(c,t);n+=`<${i}>${m}</${i}>`}}else if(s===null)A("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:u,...p}=s,c=Object.keys(p);if(c.length===1){const m=u?`${c[0]}, ${u}`:c[0];n+=`{{${m}}}`}else A("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else A("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function Se(e,t,n,r,o,s){if(t==="")return[];const i=r.transKeepBasicHtmlNodesFor||[],u=t&&new RegExp(i.map(g=>`<${g}`).join("|")).test(t);if(!e&&!u&&!s)return[t];const p={};function c(g){L(g).forEach(l=>{typeof l!="string"&&(K(l)?c(M(l)):typeof l=="object"&&!z(l)&&Object.assign(p,l))})}c(e);const m=pe.parse(`<0>${t}</0>`),E={...p,...o};function $(g,f,l){const b=M(g),y=w(b,f.children,l);return $e(b)&&y.length===0||g.props&&g.props.i18nIsDynamicList?b:y}function v(g,f,l,b,y){g.dummy?(g.children=f,l.push(Ne(g,{key:b},y?void 0:f))):l.push(...we.map([g],d=>{const a={...d.props};return delete a.i18nIsDynamicList,O(d.type,{...a,key:b,ref:d.ref},y?null:f)}))}function w(g,f,l){const b=L(g);return L(f).reduce((d,a,x)=>{const j=a.children&&a.children[0]&&a.children[0].content&&n.services.interpolator.interpolate(a.children[0].content,E,n.language);if(a.type==="tag"){let T=b[parseInt(a.name,10)];l.length===1&&!T&&(T=l[0][a.name]),T||(T={});const N=Object.keys(a.attrs).length!==0?Ee({props:a.attrs},T):T,k=z(N),C=k&&K(a,!0)&&!a.voidElement,P=u&&typeof N=="object"&&N.dummy&&!k,B=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,a.name);if(typeof N=="string"){const S=n.services.interpolator.interpolate(N,E,n.language);d.push(S)}else if(K(N)||C){const S=$(N,a,l);v(N,S,d,x)}else if(P){const S=w(b,a.children,l);v(N,S,d,x)}else if(Number.isNaN(parseFloat(a.name)))if(B){const S=$(N,a,l);v(N,S,d,x,a.voidElement)}else if(r.transSupportBasicHtmlNodes&&i.indexOf(a.name)>-1)if(a.voidElement)d.push(O(a.name,{key:`${a.name}-${x}`}));else{const S=w(b,a.children,l);d.push(O(a.name,{key:`${a.name}-${x}`},S))}else if(a.voidElement)d.push(`<${a.name} />`);else{const S=w(b,a.children,l);d.push(`<${a.name}>${S}</${a.name}>`)}else if(typeof N=="object"&&!k){const S=a.children[0]?j:null;S&&d.push(S)}else v(N,j,d,x,a.children.length!==1||!j)}else if(a.type==="text"){const T=r.transWrapTextNodes,N=s?r.unescape(n.services.interpolator.interpolate(a.content,E,n.language)):n.services.interpolator.interpolate(a.content,E,n.language);T?d.push(O(T,{key:`${a.name}-${x}`},N)):d.push(N)}return d},[])}const h=w([{dummy:!0,children:e||[]}],m,L(e||[]));return M(h[0])}function Te(e){let{children:t,count:n,parent:r,i18nKey:o,context:s,tOptions:i={},values:u,defaults:p,components:c,ns:m,i18n:E,t:$,shouldUnescape:v,...w}=e;const h=E||R();if(!h)return F("You will need to pass in an i18next instance by using i18nextReactModule"),t;const g=$||h.t.bind(h)||(C=>C),f={...Q(),...h.options&&h.options.react};let l=m||g.ns||h.options&&h.options.defaultNS;l=typeof l=="string"?[l]:l||["translation"];const b=ee(t,f),y=p||b||f.transEmptyNodeValue||o,{hashTransKey:d}=f,a=o||(d?d(b||y):b||y);h.options&&h.options.interpolation&&h.options.interpolation.defaultVariables&&(u=u&&Object.keys(u).length>0?{...u,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});const x=u||n!==void 0||!t?i.interpolation:{interpolation:{...i.interpolation,prefix:"#$?",suffix:"?$#"}},j={...i,context:s||i.context,count:n,...u,...x,defaultValue:y,ns:l},T=a?g(a,j):y;c&&Object.keys(c).forEach(C=>{const P=c[C];if(typeof P.type=="function"||!P.props||!P.props.children||T.indexOf(`${C}/>`)<0&&T.indexOf(`${C} />`)<0)return;function B(){return O(ve,null,P)}c[C]=O(B)});const N=Se(c||t,T,h,f,j,v),k=r!==void 0?r:f.defaultTransParent;return k?O(k,w,N):N}const Ve={type:"3rdParty",init(e){be(e.options.react),xe(e)}},{createContext:Ce}=await I("react"),H=Ce();class Ie{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function Oe(e){return t=>new Promise(n=>{const r=je();e.getInitialProps?e.getInitialProps(t).then(o=>{n({...o,...r})}):n(r)})}function je(){const e=R(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach(o=>{r[o]={},t.forEach(s=>{r[o][s]=e.getResourceBundle(o,s)||{}})}),n.initialI18nStore=r,n.initialLanguage=e.language,n}const{useContext:ke}=await I("react");function Je(e){let{children:t,count:n,parent:r,i18nKey:o,context:s,tOptions:i={},values:u,defaults:p,components:c,ns:m,i18n:E,t:$,shouldUnescape:v,...w}=e;const{i18n:h,defaultNS:g}=ke(H)||{},f=E||h||R(),l=$||f&&f.t.bind(f);return Te({children:t,count:n,parent:r,i18nKey:o,context:s,tOptions:i,values:u,defaults:p,components:c,ns:m||l&&l.ns||g||f&&f.options&&f.options.defaultNS,i18n:f,t:$,shouldUnescape:v,...w})}const{useState:Pe,useEffect:W,useContext:Le,useRef:te,useCallback:Re}=await I("react"),Ae=(e,t)=>{const n=te();return W(()=>{n.current=e},[e,t]),n.current};function ne(e,t,n,r){return e.getFixedT(t,n,r)}function Fe(e,t,n,r){return Re(ne(e,t,n,r),[e,t,n,r])}function se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:o}=Le(H)||{},s=n||r||R();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new Ie),!s){F("You will need to pass in an i18next instance by using initReactI18next");const y=(a,x)=>typeof x=="string"?x:x&&typeof x=="object"&&typeof x.defaultValue=="string"?x.defaultValue:Array.isArray(a)?a[a.length-1]:a,d=[y,{},!1];return d.t=y,d.i18n={},d.ready=!1,d}s.options.react&&s.options.react.wait!==void 0&&F("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i={...Q(),...s.options.react,...t},{useSuspense:u,keyPrefix:p}=i;let c=e||o||s.options&&s.options.defaultNS;c=typeof c=="string"?[c]:c||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(c);const m=(s.isInitialized||s.initializedStoreOnce)&&c.every(y=>de(y,s,i)),E=Fe(s,t.lng||null,i.nsMode==="fallback"?c:c[0],p),$=()=>E,v=()=>ne(s,t.lng||null,i.nsMode==="fallback"?c:c[0],p),[w,h]=Pe($);let g=c.join();t.lng&&(g=`${t.lng}${g}`);const f=Ae(g),l=te(!0);W(()=>{const{bindI18n:y,bindI18nStore:d}=i;l.current=!0,!m&&!u&&(t.lng?q(s,t.lng,c,()=>{l.current&&h(v)}):J(s,c,()=>{l.current&&h(v)})),m&&f&&f!==g&&l.current&&h(v);function a(){l.current&&h(v)}return y&&s&&s.on(y,a),d&&s&&s.store.on(d,a),()=>{l.current=!1,y&&s&&y.split(" ").forEach(x=>s.off(x,a)),d&&s&&d.split(" ").forEach(x=>s.store.off(x,a))}},[s,g]),W(()=>{l.current&&m&&h($)},[s,p,m]);const b=[w,s,m];if(b.t=w,b.i18n=s,b.ready=m,m||!m&&!u)return b;throw new Promise(y=>{t.lng?q(s,t.lng,c,()=>y()):J(s,c,()=>y())})}const{createElement:Y,forwardRef:ze}=await I("react");function qe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(r){function o(i){let{forwardedRef:u,...p}=i;const[c,m,E]=se(e,{...p,keyPrefix:t.keyPrefix}),$={...p,t:c,i18n:m,tReady:E};return t.withRef&&u?$.ref=u:!t.withRef&&u&&($.forwardedRef=u),Y(r,$)}o.displayName=`withI18nextTranslation(${Z(r)})`,o.WrappedComponent=r;const s=(i,u)=>Y(o,Object.assign({},i,{forwardedRef:u}));return t.withRef?ze(s):o}}function Ye(e){const{ns:t,children:n,...r}=e,[o,s,i]=se(t,r);return n(o,{i18n:s,lng:s.language},i)}const{createElement:He,useMemo:Be}=await I("react");function Ge(e){let{i18n:t,defaultNS:n,children:r}=e;const o=Be(()=>({i18n:t,defaultNS:n}),[t,n]);return He(H.Provider,{value:o},r)}const{useContext:Ke}=await I("react");function Me(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{i18n:r}=n,{i18n:o}=Ke(H)||{},s=r||o||R();s.options&&s.options.isClone||(e&&!s.initializedStoreOnce&&(s.services.resourceStore.data=e,s.options.ns=Object.values(e).reduce((i,u)=>(Object.keys(u).forEach(p=>{i.indexOf(p)<0&&i.push(p)}),i),s.options.ns),s.initializedStoreOnce=!0,s.isInitialized=!0),t&&!s.initializedLanguageOnce&&(s.changeLanguage(t),s.initializedLanguageOnce=!0))}const{createElement:Ue}=await I("react");function Xe(){return function(t){function n(r){let{initialI18nStore:o,initialLanguage:s,...i}=r;return Me(o,s),Ue(t,{...i})}return n.getInitialProps=Oe(t),n.displayName=`withI18nextSSR(${Z(t)})`,n.WrappedComponent=t,n}}const Ze=()=>"",Qe=()=>"",_e=()=>"",et=()=>"",tt=()=>"",nt=()=>"";export{H as I18nContext,Ge as I18nextProvider,Je as Trans,Te as TransWithoutContext,Ye as Translation,Oe as composeInitialProps,Ze as date,Q as getDefaults,R as getI18n,je as getInitialProps,Ve as initReactI18next,_e as number,tt as plural,et as select,nt as selectOrdinal,be as setDefaults,xe as setI18n,Qe as time,Me as useSSR,se as useTranslation,Xe as withSSR,qe as withTranslation};