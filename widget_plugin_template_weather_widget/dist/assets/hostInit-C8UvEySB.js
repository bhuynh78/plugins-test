const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["weatherWidgets.js","assets/virtualExposes-CYQcBQ6m.js","assets/preload-helper-BZ8aYdhX.js","assets/Weather Widgets__mf_v__runtimeInit__mf_v__-OYmHT46K.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-BZ8aYdhX.js';

const remoteEntryPromise = __vitePreload(() => import('../weatherWidgets.js'),true?__vite__mapDeps([0,1,2,3]):void 0);
    // __tla only serves as a hack for vite-plugin-top-level-await.
    Promise.resolve(remoteEntryPromise)
      .then(remoteEntry => {
        return Promise.resolve(remoteEntry.__tla)
          .then(remoteEntry.init).catch(remoteEntry.init)
      });
