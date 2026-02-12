const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-dJ3uKRTJ.js","assets/Weather Widgets__mf_v__runtimeInit__mf_v__-OYmHT46K.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-BZ8aYdhX.js';

const exposesMap = {
    
        "./weatherWidgets": async () => {
          const importModule = await __vitePreload(() => import('./index-dJ3uKRTJ.js'),true?__vite__mapDeps([0,1]):void 0);
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
