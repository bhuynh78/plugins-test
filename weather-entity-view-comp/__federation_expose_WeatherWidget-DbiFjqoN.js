import{importShared as r}from"./__federation_fn_import-xjV8iezU.js";import{j as a}from"./jsx-runtime-NAwZxSSi.js";const{Box:q,Typography:H,styled:R}=await r("@mui/material"),v=R(q,{name:"WeatherWidget",slot:"root"})(({theme:t})=>({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:t.spacing(0)})),_=R(H,{name:"WeatherWidget",slot:"title"})(()=>({}));_.defaultProps={variant:"h4"};const D=R(H,{name:"WeatherWidget",slot:"value"})(({theme:t})=>({marginTop:t.spacing(2)}));D.defaultProps={variant:"h1"};const{SubSettingsErrorsLogger:T,isGPSCoordinate:U,isValidObjectValue:x,isValidStringValue:A}=await r("@moderepo/biz-console");var u=(t=>(t.CELSIUS="C",t.FAHRENHEIT="F",t))(u||{});const $=(t,o)=>{const e=t;return!(!x(e,!0,o)||!A(e.title,!0,!0,void 0,new T(o,"title",e.title))||!U(e.location,new T(o,"location",e.location))||!A(e.unit,!1,!1,Object.values(u),new T(o,"unit",e.unit)))},G=()=>({title:"",location:{lat:35.78037262595157,lng:139.78598775403952}}),k=t=>({componentType:t,customSettings:G()}),z=(t,o)=>{const e=t;return!(!x(e,!0,o)||!A(e.title,!0,!0,void 0,new T(o,"title",e.title))||!U(e.location,new T(o,"location",e.location)))},F=()=>({title:"",location:{lat:35.78037262595157,lng:139.78598775403952}}),B=t=>({componentType:t,customSettings:F()}),Y="https://api.open-meteo.com/v1/forecast?latitude={{LATITUDE}}&longitude={{LONGITUDE}}&current=temperature_2m",Z="https://api.open-meteo.com/v1/forecast?latitude={{LATITUDE}}&longitude={{LONGITUDE}}&current=relative_humidity_2m",M=await r("react"),{useCallback:J,useEffect:K,useImperativeHandle:Q,useMemo:w,useState:X}=M,{CircularProgress:tt}=await r("@mui/material"),{APIError:et,ExternalAPI:it,FETCHING_DATA_STATUS:E,RequestMethod:at}=await r("@moderepo/biz-console"),h=M.forwardRef(({className:t,style:o,sx:e,id:l,compSettings:m},S)=>{const i=w(()=>m.customSettings??G(),[m.customSettings]),I=w(()=>({...e,...i.style}),[i.style,e]),[n,c]=X(E),s=J(async()=>{const p=await it.getInstance().sendRequest(at.GET,Y.replace("{{LONGITUDE}}",i.location.lng.toString()).replace("{{LATITUDE}}",i.location.lat.toString()));if(!(p instanceof et)){const d=p.data.current.temperature_2m;typeof d=="number"?i.unit===u.FAHRENHEIT?c(d*9/5+32):c(d):c(void 0)}},[i.location.lat,i.location.lng,i.unit]);return Q(S,()=>({getId:()=>l,getDataRequests:()=>{s()},onDataReady:()=>{}}),[l,s]),K(()=>{(n===E||n===void 0)&&s()},[s,n]),n===E?a.jsx(tt,{}):a.jsxs(v,{id:l,className:t,style:o,sx:I,children:[a.jsx(_,{children:i.title}),a.jsx(D,{children:n!==void 0?a.jsxs(a.Fragment,{children:[n.toFixed(1),"°",i.unit??u.CELSIUS]}):a.jsx(a.Fragment,{children:"Unknown"})})]})});h.displayName="TemperatureWidget";const{DEFAULT_WIDGET_MAIN_SETTING_TABS:L,EntityCustomSettingParamType:g,EntityViewCustomSettingsParamType:y,DEFAULT_WIDGET_STYLE_SETTING_TABS:j,CUSTOM_SETTINGS_STYLE_PARAM:O}=await r("@moderepo/biz-console"),nt={tabs:[{...L,params:[{paramType:y.PARAM,type:g.STRING,key:"title",label:"Title",description:"The title to be displayed",required:!0},{paramType:y.PARAM,type:g.GPS_COORDINATE,key:"location",label:"Location",description:"Select the location you want to show temperature data for",required:!0},{paramType:y.PARAM,type:g.STRING,key:"unit",label:"Unit",description:"Select the unit to display the value in",required:!1,defaultValue:u.FAHRENHEIT,placeholder:"Default (Celsius)",options:[{label:"Celsius",value:u.CELSIUS},{label:"Fahrenheit",value:u.FAHRENHEIT}]}]},{...j,params:[O]}]},ot={tabs:[{...L,params:[{paramType:y.PARAM,type:g.STRING,key:"title",label:"Title",description:"The title to be displayed",required:!0},{paramType:y.PARAM,type:g.GPS_COORDINATE,key:"location",label:"Location",description:"Select the location you want to show temperature data for",required:!0}]},{...j,params:[O]}]},V=await r("react"),{useCallback:rt,useEffect:st,useImperativeHandle:lt,useMemo:b,useState:ut}=V,{CircularProgress:ct}=await r("@mui/material"),{APIError:dt,ExternalAPI:mt,FETCHING_DATA_STATUS:f,RequestMethod:pt}=await r("@moderepo/biz-console"),C=V.forwardRef(({className:t,style:o,sx:e,id:l,compSettings:m},S)=>{const i=b(()=>m.customSettings??F(),[m.customSettings]),I=b(()=>({...e,...i.style}),[i.style,e]),[n,c]=ut(f),s=rt(async()=>{const p=await mt.getInstance().sendRequest(pt.GET,Z.replace("{{LONGITUDE}}",i.location.lng.toString()).replace("{{LATITUDE}}",i.location.lat.toString()));if(!(p instanceof dt)){const d=p.data.current.relative_humidity_2m;c(typeof d=="number"?d:void 0)}},[i.location.lat,i.location.lng]);return lt(S,()=>({getId:()=>l,getDataRequests:()=>{s()},onDataReady:()=>{}}),[l,s]),st(()=>{(n===f||n===void 0)&&s()},[s,n]),n===f?a.jsx(ct,{}):a.jsxs(v,{id:l,className:t,style:o,sx:I,children:[a.jsx(_,{children:i.title}),a.jsx(D,{children:n!==void 0?a.jsxs(a.Fragment,{children:[n.toFixed(1),"%"]}):a.jsx(a.Fragment,{children:"Unknown"})})]})});C.displayName="HumidityWidget";const{BizConsolePluginType:W,IconSource:N,ENTITY_VIEW_COMP_CATEGORY:P}=await r("@moderepo/biz-console"),yt={bizConsoleVersion:"0.0.2",plugins:[{type:W.DASHBOARD_WIDGET,name:"Temperature widget",widgetTypeSettings:{type:h.displayName,componentFunc:h,icon:{source:N.BIZ_CONSOLE,name:"TemperatureHumiditySensor"},displayName:"Temperature Widget",description:"Widget that display the current temperature of the selected location",category:P.METRIC_VALUE,customSettingsValidator:$,createInitialEntityViewCompSettings:k,customSettingsSchema:nt}},{type:W.DASHBOARD_WIDGET,name:"Humidity widget",widgetTypeSettings:{type:C.displayName,componentFunc:C,icon:{source:N.MUI,name:"WaterDrop"},displayName:"Humidity Widget",description:"Widget that display the current humidity of the selected location",category:P.METRIC_VALUE,customSettingsValidator:z,createInitialEntityViewCompSettings:B,customSettingsSchema:ot}}]};export{C as HumidityWidget,u as TEMPERATURE_UNIT,h as TemperatureWidget,yt as bizConsolePlugins,F as createInitialHumidityWidgetCustomSettings,B as createInitialHumidityWidgetSettings,G as createInitialTemperatureWidgetCustomSettings,k as createInitialTemperatureWidgetSettings,ot as humidityWidgetCustomSettingsSchema,z as isHumidityWidgetCustomSettings,$ as isTemperatureWidgetCustomSettings,nt as temperatureWidgetCustomSettingsSchema};