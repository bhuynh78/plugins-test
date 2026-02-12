const globalKey = "__mf_init____mf__virtual/Weather Widgets__mf_v__runtimeInit__mf_v__.js__";
    if (!globalThis[globalKey]) {
      let initResolve, initReject;
      const initPromise = new Promise((re, rj) => {
        initResolve = re;
        initReject = rj;
      });
      globalThis[globalKey] = {
        initPromise,
        initResolve,
        initReject
      };
    }
    var Weather_Widgets__mf_v__runtimeInit__mf_v__ = globalThis[globalKey];

export { Weather_Widgets__mf_v__runtimeInit__mf_v__ as W };
