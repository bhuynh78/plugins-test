import{_ as d}from"./preload-helper-B6RDIy57.js";const c=new Set(["Module","__esModule","default","_export_sfc"]);let a={"./entityDetailsEntityViewComp":()=>(h("./__federation_expose_EntityDetailsEntityViewComp-YwvdB2a-.js").then(e=>Object.keys(e).every(n=>c.has(n))?()=>e.default:()=>e))};const l={},f=(e,n,r)=>{const o=import.meta.url;if(typeof o>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const _=o.substring(0,o.lastIndexOf("entityDetailsEntityViewComp.js"));e.forEach(s=>{const t=_+s;if(!(t in l))if(l[t]=!0,n){const i="css__Entity Details Entity View Comp__"+r;window[i]==null&&(window[i]=[]),window[i].push(t)}else{const i=document.head.appendChild(document.createElement("link"));i.href=t,i.rel="stylesheet"}})};async function h(e){return d(()=>import(e),[])}const p=e=>{if(!a[e])throw new Error("Can not find remote module "+e);return a[e]()},m=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([n,r])=>{const o=Object.keys(r)[0],_=Object.values(r)[0],s=_.scope||"default";globalThis.__federation_shared__[s]=globalThis.__federation_shared__[s]||{};const t=globalThis.__federation_shared__[s];(t[n]=t[n]||{})[o]=_})};export{f as dynamicLoadingCss,p as get,m as init};
