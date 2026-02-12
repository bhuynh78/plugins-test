import { W as Weather_Widgets__mf_v__runtimeInit__mf_v__ } from './Weather Widgets__mf_v__runtimeInit__mf_v__-OYmHT46K.js';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

// dev uses dynamic import to separate chunks
    
    const {initPromise: initPromise$2} = Weather_Widgets__mf_v__runtimeInit__mf_v__;
    const res$2 = initPromise$2.then(runtime => runtime.loadShare("@moderepo/bizstack-console-sdk", {
      customShareInfo: {shareConfig:{
        singleton: false,
        strictVersion: undefined,
        requiredVersion: "^1.30.0"
      }}
    }));
    const exportModule$2 = await res$2.then(factory => factory());
    var Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__ = exportModule$2;

const name = "@moderepo/bizstack-console-sdk";
const version = "1.30.0";
const engines = {
	node: ">=20.0.0 < 24.0.0",
	npm: ">=10.0.0 < 11.0.0"
};
const type = "module";
const main = "dist/index.js";
const module = "dist/index.js";
const types = "dist/index.d.ts";
const files = [
	"package.json",
	"dist/index.js",
	"dist/index.d.ts",
	"dist/index.js.map",
	"dist/biz-console-framework"
];
const scripts = {
	dev: "concurrently  \"tsc --watch\" \"vite --host\"",
	build: "tsc && vite build",
	"build-lib": "tsc && vite build --config vite.lib.config.ts",
	pack: "mv README.md README_CONSOLE.md && cp ./src/biz-console-framework/README.md ./ && npm pack && mv README_CONSOLE.md README.md",
	lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
	preview: "vite preview",
	"check-deps": "npx depcruise --config .dependency-cruiser.cjs ./src",
	docs: "typedoc"
};
const eslintConfig = {
	"extends": [
		"react-app",
		"react-app/jest"
	]
};
const browserslist = {
	production: [
		">0.2%",
		"not dead",
		"not op_mini all"
	],
	development: [
		"last 1 chrome version",
		"last 1 firefox version",
		"last 1 safari version"
	]
};
const dependencies = {
	"@amcharts/amcharts5": "^5.9.2",
	"@amcharts/amcharts5-fonts": "^5.0.1",
	"@deck.gl/core": "^9.0.27",
	"@deck.gl/geo-layers": "^9.0.24",
	"@deck.gl/google-maps": "^9.0.24",
	"@deck.gl/layers": "^9.0.25",
	"@dnd-kit/core": "^6.1.0",
	"@dnd-kit/modifiers": "^7.0.0",
	"@dnd-kit/sortable": "^8.0.0",
	"@dnd-kit/utilities": "^3.2.2",
	"@fontsource/noto-sans": "^5.0.21",
	"@fontsource/noto-sans-jp": "^5.0.18",
	"@fontsource/roboto": "^5.0.12",
	"@module-federation/enhanced": "^0.22.0",
	"@module-federation/vite": "^1.9.4",
	"@mui/icons-material": "^5.15.15",
	"@mui/material": "^5.15.15",
	"@mui/styled-engine-sc": "^5.14.12",
	"@mui/utils": "^5.15.14",
	"@mui/x-data-grid": "^7.23.5",
	"@mui/x-date-pickers": "^7.2.0",
	"@mui/x-tree-view": "^7.21.0",
	"@sentry/react": "^8.33.1",
	"@testing-library/jest-dom": "^6.4.2",
	"@testing-library/react": "^15.0.2",
	"@testing-library/user-event": "^14.5.2",
	"@types/geojson": "^7946.0.14",
	"@types/jest": "^29.5.12",
	"@types/node": "^20.12.7",
	"@types/papaparse": "^5.3.14",
	"@vis.gl/react-google-maps": "^0.8.3",
	axios: "^1.12.1",
	"cbor-web": "^9.0.2",
	clsx: "^2.1.0",
	"date-fns": "^2.30.0",
	"date-fns-tz": "^2.0.1",
	dompurify: "^3.2.6",
	exceljs: "^4.4.0",
	i: "^0.3.7",
	i18next: "^23.11.2",
	immer: "^10.0.4",
	mathjs: "^13.2.0",
	notistack: "^3.0.1",
	papaparse: "^5.4.1",
	"posthog-js": "^1.257.0",
	"qrcode.react": "^3.1.0",
	"re-resizable": "^6.9.11",
	react: "^18.2.0",
	"react-color": "^2.19.3",
	"react-dom": "^18.2.0",
	"react-draggable": "^4.4.6",
	"react-error-boundary": "^4.0.13",
	"react-grid-layout": "^1.4.4",
	"react-helmet-async": "^2.0.4",
	"react-i18next": "^14.1.0",
	"react-markdown": "^9.0.1",
	"react-player": "^2.16.0",
	"react-router": "^6.30.3",
	"react-router-dom": "^6.30.3",
	"react-speech-recognition": "^3.10.0",
	"react-syntax-highlighter": "^15.5.0",
	"regenerator-runtime": "^0.14.1",
	"rehype-raw": "^7.0.0",
	"rehype-slug": "^6.0.0",
	"rehype-toc": "^3.0.2",
	"remark-gfm": "^4.0.0",
	"remark-github-beta-blockquote-admonitions": "^3.1.1",
	sass: "^1.75.0",
	"styled-components": "^5.3.11",
	ulid: "^2.3.0",
	uuid: "^9.0.1",
	"vite-plugin-dts": "^3.9.1",
	zustand: "^4.5.2"
};
const devDependencies = {
	"@eslint/eslintrc": "^3.0.2",
	"@eslint/js": "^9.1.1",
	"@types/google.maps": "^3.55.7",
	"@types/react": "^18.2.79",
	"@types/react-color": "^3.0.12",
	"@types/react-dom": "^18.2.25",
	"@types/react-grid-layout": "^1.3.5",
	"@types/react-speech-recognition": "^3.9.6",
	"@types/react-syntax-highlighter": "^15.5.13",
	"@types/styled-components": "^5.1.34",
	"@types/uuid": "^9.0.8",
	"@typescript-eslint/eslint-plugin": "^6.21.0",
	"@vitejs/plugin-react": "^4.3.4",
	concurrently: "^8.2.2",
	"dependency-cruiser": "^16.3.1",
	eslint: "^8.57.0",
	"eslint-config-prettier": "^9.1.0",
	"eslint-config-standard-with-typescript": "^43.0.1",
	"eslint-plugin-import": "^2.29.1",
	"eslint-plugin-n": "^16.6.2",
	"eslint-plugin-prettier": "^5.1.3",
	"eslint-plugin-promise": "^6.1.1",
	"eslint-plugin-react": "^7.34.1",
	"eslint-plugin-react-hooks": "^4.6.1",
	"eslint-plugin-react-refresh": "^0.4.6",
	"eslint-plugin-tsdoc": "^0.2.17",
	globals: "^15.0.0",
	prettier: "^3.2.5",
	"rollup-plugin-visualizer": "^5.12.0",
	typedoc: "^0.26.7",
	"typedoc-plugin-markdown": "^4.2.7",
	typescript: "^5.4.5",
	vite: "^5.4.21",
	"vite-plugin-eslint": "^1.8.1",
	"vite-plugin-top-level-await": "^1.6.0"
};
const sdk = {
	name: name,
	version: version,
	engines: engines,
	type: type,
	main: main,
	module: module,
	types: types,
	files: files,
	scripts: scripts,
	eslintConfig: eslintConfig,
	browserslist: browserslist,
	dependencies: dependencies,
	devDependencies: devDependencies
};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

// dev uses dynamic import to separate chunks
    
    const {initPromise: initPromise$1} = Weather_Widgets__mf_v__runtimeInit__mf_v__;
    const res$1 = initPromise$1.then(runtime => runtime.loadShare("react", {
      customShareInfo: {shareConfig:{
        singleton: false,
        strictVersion: undefined,
        requiredVersion: "^18.3.1"
      }}
    }));
    const exportModule$1 = await res$1.then(factory => factory());
    var Weather_Widgets__loadShare__react__loadShare__ = exportModule$1;

const React = /*@__PURE__*/getDefaultExportFromCjs(Weather_Widgets__loadShare__react__loadShare__);

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=Weather_Widgets__loadShare__react__loadShare__,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

// dev uses dynamic import to separate chunks
    
    const {initPromise} = Weather_Widgets__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("@mui/material", {
      customShareInfo: {shareConfig:{
        singleton: false,
        strictVersion: undefined,
        requiredVersion: "^5.16.7"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__ = exportModule;

const Root = Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.styled(Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.Box, {
  name: "WeatherWidget",
  slot: "root"
})(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0)
  };
});
const Title = Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.styled(Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.Typography, {
  name: "WeatherWidget",
  slot: "title"
})(() => {
  return {};
});
Title.defaultProps = {
  variant: "h4"
};
const Value = Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.styled(Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.Typography, {
  name: "WeatherWidget",
  slot: "value"
})(({ theme }) => {
  return {
    marginTop: theme.spacing(2)
  };
});
Value.defaultProps = {
  variant: "h1"
};

var TEMPERATURE_UNIT = /* @__PURE__ */ ((TEMPERATURE_UNIT2) => {
  TEMPERATURE_UNIT2["CELSIUS"] = "C";
  TEMPERATURE_UNIT2["FAHRENHEIT"] = "F";
  return TEMPERATURE_UNIT2;
})(TEMPERATURE_UNIT || {});
const isTemperatureWidgetCustomSettings = (obj, errorLogger) => {
  const settings = obj;
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isValidObjectValue(settings, true, errorLogger)) {
    return false;
  }
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isValidStringValue(settings.title, true, true, void 0, new Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.SubSettingsErrorsLogger(errorLogger, "title", settings.title))) {
    return false;
  }
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isGPSCoordinate(settings.location, new Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.SubSettingsErrorsLogger(errorLogger, "location", settings.location))) {
    return false;
  }
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isValidStringValue(
    settings.unit,
    false,
    false,
    Object.values(TEMPERATURE_UNIT),
    new Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.SubSettingsErrorsLogger(errorLogger, "unit", settings.unit)
  )) {
    return false;
  }
  return true;
};
const createInitialTemperatureWidgetCustomSettings = () => {
  return {
    title: "",
    location: { lat: 35.78037262595157, lng: 139.78598775403952 },
    containerSettings: {
      enabled: true
    }
  };
};
const createInitialTemperatureWidgetSettings = (compType) => {
  return {
    componentType: compType,
    customSettings: createInitialTemperatureWidgetCustomSettings()
  };
};
const isHumidityWidgetCustomSettings = (obj, errorLogger) => {
  const settings = obj;
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isValidObjectValue(settings, true, errorLogger)) {
    return false;
  }
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isValidStringValue(settings.title, true, true, void 0, new Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.SubSettingsErrorsLogger(errorLogger, "title", settings.title))) {
    return false;
  }
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isGPSCoordinate(settings.location, new Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.SubSettingsErrorsLogger(errorLogger, "location", settings.location))) {
    return false;
  }
  return true;
};
const createInitialHumidityWidgetCustomSettings = () => {
  return {
    title: "",
    location: { lat: 35.78037262595157, lng: 139.78598775403952 },
    containerSettings: {
      enabled: true
    }
  };
};
const createInitialHumidityWidgetSettings = (compType) => {
  return {
    componentType: compType,
    customSettings: createInitialHumidityWidgetCustomSettings()
  };
};

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude={{LATITUDE}}&longitude={{LONGITUDE}}&current={{METRIC_NAME}}";
const createWeatherDataRequests = (projectId, metricName, lng, lat) => {
  return [
    {
      dataSourceType: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.DataSourceType.CUSTOM,
      projectId,
      requestParams: {
        lng,
        lat,
        metricName
      },
      makeRequest: async (params) => {
        const response = await Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.ExternalAPI.getInstance().sendRequest(
          Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.RequestMethod.GET,
          WEATHER_API_URL.replace("{{LONGITUDE}}", params.lng.toString()).replace("{{LATITUDE}}", params.lat.toString()).replace("{{METRIC_NAME}}", params.metricName)
        );
        if (response instanceof Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.APIError) {
          return response;
        }
        const metricValue = response.data.current[params.metricName];
        if (typeof metricValue === "number") {
          return {
            value: metricValue
          };
        }
        return new Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.APIError("Invalid value", 500);
      }
    }
  ];
};

const TemperatureWidget = React.forwardRef(
  ({ className, style, sx, id, projectId, compSettings }, ref) => {
    const customSettings = Weather_Widgets__loadShare__react__loadShare__.useMemo(() => {
      return compSettings.customSettings ?? createInitialTemperatureWidgetCustomSettings();
    }, [compSettings.customSettings]);
    const combinedStyle = Weather_Widgets__loadShare__react__loadShare__.useMemo(() => {
      return {
        ...sx,
        ...customSettings.style
      };
    }, [customSettings.style, sx]);
    const [temperature, setTemperature] = Weather_Widgets__loadShare__react__loadShare__.useState(Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.FETCHING_DATA_STATUS);
    const getDataRequestsHandler = Weather_Widgets__loadShare__react__loadShare__.useCallback(() => {
      return {
        requests: createWeatherDataRequests(projectId, "temperature_2m", customSettings.location.lng, customSettings.location.lat),
        context: {}
      };
    }, [customSettings.location.lat, customSettings.location.lng, projectId]);
    const onDataReadyHandler = Weather_Widgets__loadShare__react__loadShare__.useCallback(
      (dataRequestResponses) => {
        if (dataRequestResponses.responses.length > 0) {
          const data = dataRequestResponses.responses[0].data;
          if (!(data instanceof Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.APIError)) {
            const value = data.value;
            if (customSettings.unit === TEMPERATURE_UNIT.FAHRENHEIT) {
              setTemperature(value * 9 / 5 + 32);
            } else {
              setTemperature(value);
            }
            return;
          }
          setTemperature(void 0);
        }
      },
      [customSettings.unit]
    );
    Weather_Widgets__loadShare__react__loadShare__.useImperativeHandle(ref, () => {
      return {
        getId: () => {
          return id;
        },
        /**
         * NOTE: When the dashboard manager calls this function, `getDataRequest`, it will pass 2 parameters to the function
         * `getDataRequests (timeParams: TimeRangeParams | undefined, selectionRange: TimeRangeParams | undefined)`. It is up to the widget
         * implementation to do what it needs to do with these params. Some widget ignore these params and some widgets use these params to
         * fetch data.
         *   - timeParams is an Object with start/end timestamps of the selected time range from the global time control. The widget can
         *     use this time range to fetch data for.
         *   - selectionRange is also an Object with start/end timestamps. However, the selectionRange is a sub range of the timeRange. This
         *     range is based on the range the user selected from one of the widgets. For example, the XY Chart allows the user to select
         *     an area to Zoom in. When the user does this, the selectionRange will be the time range of the area the user selected. It is up to
         *     the widget implementation to use this info to fetch detailed data for the selection range if it needs to.
         */
        getDataRequests: getDataRequestsHandler,
        onDataReady: onDataReadyHandler
      };
    }, [getDataRequestsHandler, id, onDataReadyHandler]);
    Weather_Widgets__loadShare__react__loadShare__.useEffect(() => {
      if (temperature === Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.FETCHING_DATA_STATUS || temperature === void 0) {
        const dataRequests = getDataRequestsHandler();
        if (dataRequests === void 0 || dataRequests === Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.NotReady) {
          return;
        }
        Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.processOneComponentDataRequests({
          componentId: id,
          requestsInfo: dataRequests
        }).then((comRequestResponse) => {
          onDataReadyHandler(comRequestResponse.responsesInfo);
        });
      }
    }, [compSettings, getDataRequestsHandler, id, onDataReadyHandler, temperature]);
    if (temperature === Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.FETCHING_DATA_STATUS) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.CircularProgress, {});
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { id, className, style, sx: combinedStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: customSettings.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { children: temperature !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        temperature.toFixed(1),
        "°",
        customSettings.unit ?? TEMPERATURE_UNIT.CELSIUS
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Unknown" }) })
    ] });
  }
);
TemperatureWidget.displayName = "TemperatureWidget";

const temperatureWidgetCustomSettingsSchema = {
  tabs: [
    {
      ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.DEFAULT_WIDGET_MAIN_SETTING_TABS,
      params: [
        {
          paramType: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityViewCustomSettingsParamType.PARAM,
          type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityCustomSettingParamType.STRING,
          key: "title",
          label: "Title",
          description: "The title to be displayed",
          required: true
        },
        {
          paramType: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityViewCustomSettingsParamType.PARAM,
          type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityCustomSettingParamType.GPS_COORDINATE,
          key: "location",
          label: "Location",
          description: "Select the location you want to show temperature data for",
          required: true
        },
        {
          paramType: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityViewCustomSettingsParamType.PARAM,
          type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityCustomSettingParamType.STRING,
          key: "unit",
          label: "Unit",
          description: "Select the unit to display the value in",
          required: false,
          defaultValue: TEMPERATURE_UNIT.FAHRENHEIT,
          placeholder: "Default (Celsius)",
          options: [
            {
              label: "Celsius",
              value: TEMPERATURE_UNIT.CELSIUS
            },
            {
              label: "Fahrenheit",
              value: TEMPERATURE_UNIT.FAHRENHEIT
            }
          ]
        },
        Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_CUSTOM_TIME_CONTROL_PARAM
      ]
    },
    {
      ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.DEFAULT_WIDGET_STYLE_SETTING_TABS,
      params: [Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_CONTAINER_SETTINGS_PARAM, Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_STYLE_PARAM]
    }
  ]
};
const humidityWidgetCustomSettingsSchema = {
  tabs: [
    {
      ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.DEFAULT_WIDGET_MAIN_SETTING_TABS,
      params: [
        {
          paramType: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityViewCustomSettingsParamType.PARAM,
          type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityCustomSettingParamType.STRING,
          key: "title",
          label: "Title",
          description: "The title to be displayed",
          required: true
        },
        {
          paramType: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityViewCustomSettingsParamType.PARAM,
          type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.EntityCustomSettingParamType.GPS_COORDINATE,
          key: "location",
          label: "Location",
          description: "Select the location you want to show temperature data for",
          required: true
        },
        Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_CUSTOM_TIME_CONTROL_PARAM
      ]
    },
    {
      ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.DEFAULT_WIDGET_STYLE_SETTING_TABS,
      params: [Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_CONTAINER_SETTINGS_PARAM, Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_STYLE_PARAM]
    }
  ]
};

const HumidityWidget = React.forwardRef(
  ({ className, style, sx, id, projectId, compSettings }, ref) => {
    const customSettings = Weather_Widgets__loadShare__react__loadShare__.useMemo(() => {
      return compSettings.customSettings ?? createInitialHumidityWidgetCustomSettings();
    }, [compSettings.customSettings]);
    const combinedStyle = Weather_Widgets__loadShare__react__loadShare__.useMemo(() => {
      return {
        ...sx,
        ...customSettings.style
      };
    }, [customSettings.style, sx]);
    const [humidity, setHumidity] = Weather_Widgets__loadShare__react__loadShare__.useState(Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.FETCHING_DATA_STATUS);
    const getDataRequestsHandler = Weather_Widgets__loadShare__react__loadShare__.useCallback(() => {
      return {
        requests: createWeatherDataRequests(projectId, "relative_humidity_2m", customSettings.location.lng, customSettings.location.lat),
        context: {}
      };
    }, [customSettings.location.lat, customSettings.location.lng, projectId]);
    const onDataReadyHandler = Weather_Widgets__loadShare__react__loadShare__.useCallback((dataRequestResponses) => {
      if (dataRequestResponses.responses.length > 0) {
        const data = dataRequestResponses.responses[0].data;
        if (!(data instanceof Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.APIError)) {
          const value = data.value;
          setHumidity(value);
          return;
        }
        setHumidity(void 0);
      }
    }, []);
    Weather_Widgets__loadShare__react__loadShare__.useImperativeHandle(ref, () => {
      return {
        getId: () => {
          return id;
        },
        /**
         * NOTE: When the dashboard manager calls this function, `getDataRequest`, it will pass 2 parameters to the function
         * `getDataRequests (timeParams: TimeRangeParams | undefined, selectionRange: TimeRangeParams | undefined)`. It is up to the widget
         * implementation to do what it needs to do with these params. Some widget ignore these params and some widgets use these params to
         * fetch data.
         *   - timeParams is an Object with start/end timestamps of the selected time range from the global time control. The widget can
         *     use this time range to fetch data for.
         *   - selectionRange is also an Object with start/end timestamps. However, the selectionRange is a sub range of the timeRange. This
         *     range is based on the range the user selected from one of the widgets. For example, the XY Chart allows the user to select
         *     an area to Zoom in. When the user does this, the selectionRange will be the time range of the area the user selected.
         *     It is up to the widget implementation to use this info to fetch detailed data for the selection range if it needs to.
         */
        getDataRequests: getDataRequestsHandler,
        onDataReady: onDataReadyHandler
      };
    }, [getDataRequestsHandler, id, onDataReadyHandler]);
    Weather_Widgets__loadShare__react__loadShare__.useEffect(() => {
      if (humidity === Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.FETCHING_DATA_STATUS || humidity === void 0) {
        const dataRequests = getDataRequestsHandler();
        if (dataRequests === void 0 || dataRequests === Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.NotReady) {
          return;
        }
        Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.processOneComponentDataRequests({
          componentId: id,
          requestsInfo: dataRequests
        }).then((comRequestResponse) => {
          onDataReadyHandler(comRequestResponse.responsesInfo);
        });
      }
    }, [compSettings, getDataRequestsHandler, humidity, id, onDataReadyHandler]);
    if (humidity === Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.FETCHING_DATA_STATUS) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Weather_Widgets__loadShare___mf_0_mui_mf_1_material__loadShare__.CircularProgress, {});
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { id, className, style, sx: combinedStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { children: customSettings.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Value, { children: humidity !== void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        humidity.toFixed(1),
        "%"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Unknown" }) })
    ] });
  }
);
HumidityWidget.displayName = "HumidityWidget";

const isSampleMetricDataWidgetCustomSettings = (obj, errorLogger) => {
  const settings = obj;
  if (!Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isBaseEntityViewCompCustomSettings(settings, errorLogger)) {
    return false;
  }
  if (settings.dataSourcesSettings && !settings.dataSourcesSettings.every((dataSourceSettings, index) => {
    return Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isMetricsDataSourceSettings(
      dataSourceSettings,
      new Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.SubSettingsErrorsLogger(errorLogger, `dataSourcesSettings[${index}]`, dataSourceSettings),
      Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isBaseNumericMetricViewSettings,
      Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.isBaseTagMetricViewSettings
    );
  })) {
    return false;
  }
  return true;
};
const createInitialSampleMetricDataWidgetCustomSettings = () => {
  return {
    dataSourcesSettings: []
  };
};
const createInitialSampleMetricDataWidgetSettings = (compType) => {
  return {
    componentType: compType,
    customSettings: createInitialSampleMetricDataWidgetCustomSettings()
  };
};

const SampleMetricDataWidget = React.forwardRef(
  ({ id, compSettings }, ref) => {
    const customSettings = Weather_Widgets__loadShare__react__loadShare__.useMemo(() => {
      return compSettings.customSettings ?? createInitialSampleMetricDataWidgetCustomSettings();
    }, [compSettings.customSettings]);
    const getDataRequestsHandler = Weather_Widgets__loadShare__react__loadShare__.useCallback(() => {
      console.log(customSettings.dataSourcesSettings[0]?.numericMetrics);
      return void 0;
    }, [customSettings.dataSourcesSettings]);
    const onDataReadyHandler = Weather_Widgets__loadShare__react__loadShare__.useCallback((dataRequestResponses) => {
      console.log(dataRequestResponses);
    }, []);
    Weather_Widgets__loadShare__react__loadShare__.useImperativeHandle(ref, () => {
      return {
        getId: () => {
          return id;
        },
        getDataRequests: getDataRequestsHandler,
        onDataReady: onDataReadyHandler
      };
    }, [getDataRequestsHandler, id, onDataReadyHandler]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.GenericMessageBox, { message: JSON.stringify(compSettings.customSettings, null, 2) });
  }
);
SampleMetricDataWidget.displayName = "SampleMetricDataWidget";

const sampleMetricDataWidgetCustomSettingsSchema = {
  tabs: [
    {
      ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.DEFAULT_WIDGET_MAIN_SETTING_TABS,
      params: [
        {
          ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_ENTITY_ID_PARAM,
          // Allow users to select an Entity with metrics
          entityConstraints: {
            hasMetrics: true
          }
        },
        {
          ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_METRICS_DATA_SOURCES_SETTINGS_PARAM,
          // Set maxSize to limit the number of data sources (users can set up only 1 data source)
          maxSize: 1,
          params: [
            Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_DATA_SOURCE_METRICS_DEFINITION_ID_PARAM,
            {
              ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_DATA_SOURCE_NUMERIC_METRICS_PARAM,
              // Set maxSize to limit the number of metrics (users can select only 1 metric)
              maxSize: 1,
              // Hide the header of "Numeric Metrics"
              viewSettings: {
                hideHeader: true,
                condensed: true
              },
              params: [
                Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_DATA_SOURCE_NUMERIC_METRIC_VALUE_NAME_PARAM
                // CUSTOM_SETTINGS_DATA_SOURCE_NUMERIC_METRIC_VIEW_SETTINGS_PARAM
              ]
            }
            // CUSTOM_SETTINGS_DATA_SOURCE_TAG_METRICS_PARAM, // No need for tag metrics params
            // CUSTOM_SETTINGS_DATA_SOURCE_AGGREGATION_PARAM, // No need for aggregation options
          ]
        },
        Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_CUSTOM_TIME_CONTROL_PARAM
      ]
    },
    {
      ...Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.DEFAULT_WIDGET_STYLE_SETTING_TABS,
      params: [Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.CUSTOM_SETTINGS_STYLE_PARAM]
    }
  ]
};

const bizConsolePlugins = {
  pluginVersion: "1.0.0",
  bizConsoleVersion: sdk.version,
  namespace: "SampleWeatherWidgetPlugin",
  plugins: [
    {
      type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.BizConsolePluginType.DASHBOARD_WIDGET,
      name: "Temperature widget",
      widgetTypeSettings: {
        type: TemperatureWidget.displayName,
        componentFunc: TemperatureWidget,
        icon: { source: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.IconSource.BIZ_CONSOLE, name: "TemperatureHumiditySensor" },
        displayName: "Temperature Widget",
        description: "Widget that display the current temperature of the selected location",
        category: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.ENTITY_VIEW_COMP_CATEGORY.METRIC_VALUE,
        customSettingsValidator: isTemperatureWidgetCustomSettings,
        createInitialEntityViewCompSettings: createInitialTemperatureWidgetSettings,
        customSettingsSchema: temperatureWidgetCustomSettingsSchema
      }
    },
    {
      type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.BizConsolePluginType.DASHBOARD_WIDGET,
      name: "Humidity widget",
      widgetTypeSettings: {
        type: HumidityWidget.displayName,
        componentFunc: HumidityWidget,
        icon: { source: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.IconSource.MUI, name: "WaterDrop" },
        displayName: "Humidity Widget",
        description: "Widget that display the current humidity of the selected location",
        category: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.ENTITY_VIEW_COMP_CATEGORY.METRIC_VALUE,
        customSettingsValidator: isHumidityWidgetCustomSettings,
        createInitialEntityViewCompSettings: createInitialHumidityWidgetSettings,
        customSettingsSchema: humidityWidgetCustomSettingsSchema
      }
    },
    {
      type: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.BizConsolePluginType.DASHBOARD_WIDGET,
      name: "Sample metric data widget",
      widgetTypeSettings: {
        type: SampleMetricDataWidget.displayName,
        componentFunc: SampleMetricDataWidget,
        icon: { source: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.IconSource.BIZ_CONSOLE, name: "SettingOutlined" },
        displayName: "Sample Metric Data Widget",
        description: "Widget with custom settings for retrieving metric data",
        category: Weather_Widgets__loadShare___mf_0_moderepo_mf_1_bizstack_mf_2_console_mf_2_sdk__loadShare__.ENTITY_VIEW_COMP_CATEGORY.METRIC_VALUE,
        customSettingsValidator: isSampleMetricDataWidgetCustomSettings,
        createInitialEntityViewCompSettings: createInitialSampleMetricDataWidgetSettings,
        customSettingsSchema: sampleMetricDataWidgetCustomSettingsSchema
      }
    }
  ]
};

export { HumidityWidget, TEMPERATURE_UNIT, TemperatureWidget, bizConsolePlugins, createInitialHumidityWidgetCustomSettings, createInitialHumidityWidgetSettings, createInitialTemperatureWidgetCustomSettings, createInitialTemperatureWidgetSettings, humidityWidgetCustomSettingsSchema, isHumidityWidgetCustomSettings, isTemperatureWidgetCustomSettings, temperatureWidgetCustomSettingsSchema };
