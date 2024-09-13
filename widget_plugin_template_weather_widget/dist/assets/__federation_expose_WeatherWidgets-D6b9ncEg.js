import { importShared } from './__federation_fn_import-hWF7nhOP.js';
import { j as jsxRuntimeExports } from './jsx-runtime-B7zcq6KS.js';

const {Box,Typography,styled} = await importShared('@mui/material');

const Root = styled(Box, {
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
const Title = styled(Typography, {
  name: "WeatherWidget",
  slot: "title"
})(() => {
  return {};
});
Title.defaultProps = {
  variant: "h4"
};
const Value = styled(Typography, {
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

const {SubSettingsErrorsLogger,isGPSCoordinate,isValidObjectValue,isValidStringValue} = await importShared('@moderepo/bizstack-console-sdk');

var TEMPERATURE_UNIT = /* @__PURE__ */ ((TEMPERATURE_UNIT2) => {
  TEMPERATURE_UNIT2["CELSIUS"] = "C";
  TEMPERATURE_UNIT2["FAHRENHEIT"] = "F";
  return TEMPERATURE_UNIT2;
})(TEMPERATURE_UNIT || {});
const isTemperatureWidgetCustomSettings = (obj, errorLogger) => {
  const settings = obj;
  if (!isValidObjectValue(settings, true, errorLogger)) {
    return false;
  }
  if (!isValidStringValue(settings.title, true, true, void 0, new SubSettingsErrorsLogger(errorLogger, "title", settings.title))) {
    return false;
  }
  if (!isGPSCoordinate(settings.location, new SubSettingsErrorsLogger(errorLogger, "location", settings.location))) {
    return false;
  }
  if (!isValidStringValue(
    settings.unit,
    false,
    false,
    Object.values(TEMPERATURE_UNIT),
    new SubSettingsErrorsLogger(errorLogger, "unit", settings.unit)
  )) {
    return false;
  }
  return true;
};
const createInitialTemperatureWidgetCustomSettings = () => {
  return {
    title: "",
    location: { lat: 35.78037262595157, lng: 139.78598775403952 }
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
  if (!isValidObjectValue(settings, true, errorLogger)) {
    return false;
  }
  if (!isValidStringValue(settings.title, true, true, void 0, new SubSettingsErrorsLogger(errorLogger, "title", settings.title))) {
    return false;
  }
  if (!isGPSCoordinate(settings.location, new SubSettingsErrorsLogger(errorLogger, "location", settings.location))) {
    return false;
  }
  return true;
};
const createInitialHumidityWidgetCustomSettings = () => {
  return {
    title: "",
    location: { lat: 35.78037262595157, lng: 139.78598775403952 }
  };
};
const createInitialHumidityWidgetSettings = (compType) => {
  return {
    componentType: compType,
    customSettings: createInitialHumidityWidgetCustomSettings()
  };
};

const {APIError: APIError$2,DataSourceType,ExternalAPI,RequestMethod} = await importShared('@moderepo/bizstack-console-sdk');

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude={{LATITUDE}}&longitude={{LONGITUDE}}&current={{METRIC_NAME}}";
const createWeatherDataRequests = (projectId, metricName, lng, lat) => {
  return [
    {
      dataSourceType: DataSourceType.CUSTOM,
      projectId,
      requestParams: {
        lng,
        lat,
        metricName
      },
      makeRequest: async (params) => {
        const response = await ExternalAPI.getInstance().sendRequest(
          RequestMethod.GET,
          WEATHER_API_URL.replace("{{LONGITUDE}}", params.lng.toString()).replace("{{LATITUDE}}", params.lat.toString()).replace("{{METRIC_NAME}}", params.metricName)
        );
        if (response instanceof APIError$2) {
          return response;
        }
        const metricValue = response.data.current[params.metricName];
        if (typeof metricValue === "number") {
          return {
            value: metricValue
          };
        }
        return new APIError$2("Invalid value", 500);
      }
    }
  ];
};

const React$1 = await importShared('react');
const {useCallback: useCallback$1,useEffect: useEffect$1,useImperativeHandle: useImperativeHandle$1,useMemo: useMemo$1,useState: useState$1} = React$1;

const {CircularProgress: CircularProgress$1} = await importShared('@mui/material');
const {APIError: APIError$1,FETCHING_DATA_STATUS: FETCHING_DATA_STATUS$1,NotReady: NotReady$1,processOneComponentDataRequests: processOneComponentDataRequests$1} = await importShared('@moderepo/bizstack-console-sdk');
const TemperatureWidget = React$1.forwardRef(
  ({ className, style, sx, id, projectId, compSettings }, ref) => {
    const customSettings = useMemo$1(() => {
      return compSettings.customSettings ?? createInitialTemperatureWidgetCustomSettings();
    }, [compSettings.customSettings]);
    const combinedStyle = useMemo$1(() => {
      return {
        ...sx,
        ...customSettings.style
      };
    }, [customSettings.style, sx]);
    const [temperature, setTemperature] = useState$1(FETCHING_DATA_STATUS$1);
    const getDataRequestsHandler = useCallback$1(() => {
      return {
        requests: createWeatherDataRequests(projectId, "temperature_2m", customSettings.location.lng, customSettings.location.lat),
        context: {}
      };
    }, [customSettings.location.lat, customSettings.location.lng, projectId]);
    const onDataReadyHandler = useCallback$1(
      (dataRequestResponses) => {
        if (dataRequestResponses.responses.length > 0) {
          const data = dataRequestResponses.responses[0].data;
          if (!(data instanceof APIError$1)) {
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
    useImperativeHandle$1(ref, () => {
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
    useEffect$1(() => {
      if (temperature === FETCHING_DATA_STATUS$1 || temperature === void 0) {
        const dataRequests = getDataRequestsHandler();
        if (dataRequests === void 0 || dataRequests === NotReady$1) {
          return;
        }
        processOneComponentDataRequests$1({
          componentId: id,
          requestsInfo: dataRequests
        }).then((comRequestResponse) => {
          onDataReadyHandler(comRequestResponse.responsesInfo);
        });
      }
    }, [compSettings, getDataRequestsHandler, id, onDataReadyHandler, temperature]);
    if (temperature === FETCHING_DATA_STATUS$1) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress$1, {});
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

const {DEFAULT_WIDGET_MAIN_SETTING_TABS,EntityCustomSettingParamType,EntityViewCustomSettingsParamType,DEFAULT_WIDGET_STYLE_SETTING_TABS,CUSTOM_SETTINGS_STYLE_PARAM} = await importShared('@moderepo/bizstack-console-sdk');
const temperatureWidgetCustomSettingsSchema = {
  tabs: [
    {
      ...DEFAULT_WIDGET_MAIN_SETTING_TABS,
      params: [
        {
          paramType: EntityViewCustomSettingsParamType.PARAM,
          type: EntityCustomSettingParamType.STRING,
          key: "title",
          label: "Title",
          description: "The title to be displayed",
          required: true
        },
        {
          paramType: EntityViewCustomSettingsParamType.PARAM,
          type: EntityCustomSettingParamType.GPS_COORDINATE,
          key: "location",
          label: "Location",
          description: "Select the location you want to show temperature data for",
          required: true
        },
        {
          paramType: EntityViewCustomSettingsParamType.PARAM,
          type: EntityCustomSettingParamType.STRING,
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
        }
      ]
    },
    {
      ...DEFAULT_WIDGET_STYLE_SETTING_TABS,
      params: [CUSTOM_SETTINGS_STYLE_PARAM]
    }
  ]
};
const humidityWidgetCustomSettingsSchema = {
  tabs: [
    {
      ...DEFAULT_WIDGET_MAIN_SETTING_TABS,
      params: [
        {
          paramType: EntityViewCustomSettingsParamType.PARAM,
          type: EntityCustomSettingParamType.STRING,
          key: "title",
          label: "Title",
          description: "The title to be displayed",
          required: true
        },
        {
          paramType: EntityViewCustomSettingsParamType.PARAM,
          type: EntityCustomSettingParamType.GPS_COORDINATE,
          key: "location",
          label: "Location",
          description: "Select the location you want to show temperature data for",
          required: true
        }
      ]
    },
    {
      ...DEFAULT_WIDGET_STYLE_SETTING_TABS,
      params: [CUSTOM_SETTINGS_STYLE_PARAM]
    }
  ]
};

const React = await importShared('react');
const {useCallback,useEffect,useImperativeHandle,useMemo,useState} = React;

const {CircularProgress} = await importShared('@mui/material');
const {APIError,FETCHING_DATA_STATUS,NotReady,processOneComponentDataRequests} = await importShared('@moderepo/bizstack-console-sdk');
const HumidityWidget = React.forwardRef(
  ({ className, style, sx, id, projectId, compSettings }, ref) => {
    const customSettings = useMemo(() => {
      return compSettings.customSettings ?? createInitialHumidityWidgetCustomSettings();
    }, [compSettings.customSettings]);
    const combinedStyle = useMemo(() => {
      return {
        ...sx,
        ...customSettings.style
      };
    }, [customSettings.style, sx]);
    const [humidity, setHumidity] = useState(FETCHING_DATA_STATUS);
    const getDataRequestsHandler = useCallback(() => {
      return {
        requests: createWeatherDataRequests(projectId, "relative_humidity_2m", customSettings.location.lng, customSettings.location.lat),
        context: {}
      };
    }, [customSettings.location.lat, customSettings.location.lng, projectId]);
    const onDataReadyHandler = useCallback((dataRequestResponses) => {
      if (dataRequestResponses.responses.length > 0) {
        const data = dataRequestResponses.responses[0].data;
        if (!(data instanceof APIError)) {
          const value = data.value;
          setHumidity(value);
          return;
        }
        setHumidity(void 0);
      }
    }, []);
    useImperativeHandle(ref, () => {
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
    useEffect(() => {
      if (humidity === FETCHING_DATA_STATUS || humidity === void 0) {
        const dataRequests = getDataRequestsHandler();
        if (dataRequests === void 0 || dataRequests === NotReady) {
          return;
        }
        processOneComponentDataRequests({
          componentId: id,
          requestsInfo: dataRequests
        }).then((comRequestResponse) => {
          onDataReadyHandler(comRequestResponse.responsesInfo);
        });
      }
    }, [compSettings, getDataRequestsHandler, humidity, id, onDataReadyHandler]);
    if (humidity === FETCHING_DATA_STATUS) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {});
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

const {BizConsolePluginType,IconSource,ENTITY_VIEW_COMP_CATEGORY} = await importShared('@moderepo/bizstack-console-sdk');
const bizConsolePlugins = {
  bizConsoleVersion: "1.0.0-alpha.11",
  namespace: "SampleWeatherWidgetPlugin",
  plugins: [
    {
      type: BizConsolePluginType.DASHBOARD_WIDGET,
      name: "Temperature widget",
      widgetTypeSettings: {
        type: TemperatureWidget.displayName,
        componentFunc: TemperatureWidget,
        icon: { source: IconSource.BIZ_CONSOLE, name: "TemperatureHumiditySensor" },
        displayName: "Temperature Widget",
        description: "Widget that display the current temperature of the selected location",
        category: ENTITY_VIEW_COMP_CATEGORY.METRIC_VALUE,
        customSettingsValidator: isTemperatureWidgetCustomSettings,
        createInitialEntityViewCompSettings: createInitialTemperatureWidgetSettings,
        customSettingsSchema: temperatureWidgetCustomSettingsSchema
      }
    },
    {
      type: BizConsolePluginType.DASHBOARD_WIDGET,
      name: "Humidity widget",
      widgetTypeSettings: {
        type: HumidityWidget.displayName,
        componentFunc: HumidityWidget,
        icon: { source: IconSource.MUI, name: "WaterDrop" },
        displayName: "Humidity Widget",
        description: "Widget that display the current humidity of the selected location",
        category: ENTITY_VIEW_COMP_CATEGORY.METRIC_VALUE,
        customSettingsValidator: isHumidityWidgetCustomSettings,
        createInitialEntityViewCompSettings: createInitialHumidityWidgetSettings,
        customSettingsSchema: humidityWidgetCustomSettingsSchema
      }
    }
  ]
};

export { HumidityWidget, TEMPERATURE_UNIT, TemperatureWidget, bizConsolePlugins, createInitialHumidityWidgetCustomSettings, createInitialHumidityWidgetSettings, createInitialTemperatureWidgetCustomSettings, createInitialTemperatureWidgetSettings, humidityWidgetCustomSettingsSchema, isHumidityWidgetCustomSettings, isTemperatureWidgetCustomSettings, temperatureWidgetCustomSettingsSchema };