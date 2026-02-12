const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-dJ3uKRTJ.js","./Weather Widgets__mf_v__runtimeInit__mf_v__-OYmHT46K.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-C6a2snJ8.js';

const exposesMap = {
    
        "./weatherWidgets": async () => {
          const importModule = await __vitePreload(() => import('./index-dJ3uKRTJ.js'),true?__vite__mapDeps([0,1]):void 0,import.meta.url);
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule
        }
      
  };

export { exposesMap as default };
