const l=new Set(["Module","__esModule","default","_export_sfc"]);let i={"./myAccountComponents":()=>(f("./__federation_expose_MyAccountComponents-BetvfzHo.js").then(e=>Object.keys(e).every(n=>l.has(n))?()=>e.default:()=>e))};const a={},d=(e,n,c)=>{const s=import.meta.url;if(typeof s>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const _=s.substring(0,s.lastIndexOf("myAccountComponents.js"));e.forEach(r=>{const t=_+r;if(!(t in a))if(a[t]=!0,n){const o="css__My Account Components__"+c;window[o]==null&&(window[o]=[]),window[o].push(t)}else{const o=document.head.appendChild(document.createElement("link"));o.href=t,o.rel="stylesheet"}})};async function f(e){return import(e)}const h=e=>{if(!i[e])throw new Error("Can not find remote module "+e);return i[e]()},u=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([n,c])=>{const s=Object.keys(c)[0],_=Object.values(c)[0],r=_.scope||"default";globalThis.__federation_shared__[r]=globalThis.__federation_shared__[r]||{};const t=globalThis.__federation_shared__[r];(t[n]=t[n]||{})[s]=_})};export{d as dynamicLoadingCss,h as get,u as init};
