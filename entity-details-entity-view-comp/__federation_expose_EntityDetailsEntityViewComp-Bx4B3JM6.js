import{importShared as S}from"./__federation_fn_import-D3SzAL4j.js";import{_ as w}from"./preload-helper-B6RDIy57.js";import{j as s}from"./jsx-runtime-NAwZxSSi.js";const I={"biz-console-framework":{url:"http://localhost:4100/assets/biz-console-framework/biz-console-framework.js",format:"esm",from:"vite"}},k=async(t,e)=>{const i=typeof t=="function"?await t():t,n=document.createElement("script");n.type="text/javascript",n.onload=e,n.src=i,document.getElementsByTagName("head")[0].appendChild(n)};function m(t,e){return O(t).then(i=>()=>e==="webpack"&&Object.prototype.toString.call(i).indexOf("Module")>-1&&i.default?i.default:i)}function g(t,e){const i=Object.assign(t,e);for(const n of Object.keys(i))typeof i[n]=="object"&&typeof e[n]=="object"&&(i[n]=g(i[n],e[n]));return i}const p=t=>g({react:{undefined:{get:()=>m(new URL("__federation_shared_react-ClAeYogB.js",import.meta.url).href,t),loaded:1}},"react-dom":{undefined:{get:()=>m(new URL("__federation_shared_react-dom-Dhf6MI3N.js",import.meta.url).href,t),loaded:1}},"@mui/material":{undefined:{get:()=>m(new URL("__federation_shared_@mui/material-DqSoyLs4.js",import.meta.url).href,t),loaded:1}},zustand:{undefined:{get:()=>m(new URL("__federation_shared_zustand-DAkbMvQZ.js",import.meta.url).href,t),loaded:1}}},(globalThis.__federation_shared__||{}).default||{});async function O(t){return w(()=>import(t),[])}async function D(t){const e=I[t];if(e.inited)return e.lib;if(e.format==="var")return new Promise(i=>{const n=()=>{e.inited||(e.lib=window[t],e.lib.init(p(e.from)),e.inited=!0),i(e.lib)};return k(e.url,n)});if(["esm","systemjs"].includes(e.format))return new Promise((i,n)=>{(typeof e.url=="function"?e.url:()=>Promise.resolve(e.url))().then(l=>{w(()=>import(l),[]).then(c=>{if(!e.inited){const r=p(e.from);c.init(r),e.lib=c,e.lib.init(r),e.inited=!0}i(e.lib)}).catch(n)})})}function d(t,e){return D(t).then(i=>i.get(e).then(n=>n()))}const N=await d("biz-console-framework","./biz-console-framework");let{DEFAULT_WIDGET_MAIN_SETTING_TABS:v,CUSTOM_SETTINGS_ON_CLICK_SETTINGS:z,DEFAULT_WIDGET_STYLE_SETTING_TABS:x,CUSTOM_SETTINGS_STYLE_PARAM:L,CUSTOM_SETTINGS_ENTITY_ID_PARAM:A}=N;const U=t=>!!t,E=()=>({}),V=t=>({componentType:t,customSettings:E()}),R={tabs:[{...v,params:[A,z]},{...x,params:[L]}]},{useMemo:u}=await S("react"),{Box:a,CircularProgress:M}=await S("@mui/material"),P=await d("biz-console-framework","./biz-console-framework");let{EntityViewCompCollection:G,IconSource:B}=P;const Y=await d("biz-console-framework","./services");let{ROOT_ENTITY_ID:W}=Y;const $=await d("biz-console-framework","./stores");let{isDataStateValue:y,useCurrentLanguage:J,useSelectEntity:K,useSelectTranslatedEntityClass:Z}=$;const f=({className:t,style:e,sx:i,projectId:n,entityId:_,compSettings:l})=>{const c=u(()=>l.customSettings??E(),[l.customSettings]),r=K(n,_!==W?_:void 0),o=u(()=>{if(y(r))return r},[r]),b=J(),h=Z(n,y(r)?r.entityClass:void 0,b),T=u(()=>({...i,...c.style}),[c.style,i]);return o?s.jsxs(a,{className:t,style:e,sx:T,children:[s.jsxs(a,{children:["ID: ",o.entityId]}),s.jsxs(a,{children:["Name: ",o.displaySettings.name]}),s.jsxs(a,{children:["Description: ",o.displaySettings.description]}),s.jsxs(a,{children:["Class: ",o.entityClass]}),s.jsxs(a,{children:["Class Name: ",h?.displaySettings.name]}),o.attributes&&s.jsxs(a,{children:["Attributes: ",Object.entries(o.attributes).map(([C,j])=>`[${C}: ${JSON.stringify(j)}]`).join(", ")]})]}):s.jsx(M,{})};f.displayName="EntityDetailsEntityViewComp";G.getInstance().registerComponent({type:f.displayName,componentFunc:f,icon:{source:B.BIZ_CONSOLE,name:"EntitiesOutlined"},displayName:"Entity Details Widget",description:"A widget that display entity details",customSettingsValidator:U,createInitialEntityViewCompSettings:V,customSettingsSchema:R});export{f as EntityDetailsEntityViewComp};