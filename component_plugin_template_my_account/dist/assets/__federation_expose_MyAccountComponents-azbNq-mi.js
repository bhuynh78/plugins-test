import{importShared as s}from"./__federation_fn_import-ecxUI2P_.js";import{j as e}from"./jsx-runtime-C55WN_BT.js";const{Box:B,Paper:w,styled:S}=await s("@mui/material"),U=S(B,{name:"MyAccountComponents",slot:"myCustomAccountPage"})(({})=>({display:"flex",flexDirection:"column",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"})),v=S(w,{name:"MyAccountComponents",slot:"root"})(({theme:n})=>({padding:n.spacing(2)})),{useCallback:x,useState:E}=await s("react"),{APIError:C,MazeAPI:f,isValidObjectValue:V,useAuthenticationStore:A}=await s("@moderepo/biz-console"),{Box:u,Button:L,TextField:z,Typography:$}=await s("@mui/material"),_=(n,a)=>!!V(n,!0,a),m=({sx:n})=>{const a=A(r=>r.actions),o=A(r=>r.loggedInUser),[c,i]=E(o.name),l=x(r=>{i(r.target.value)},[]),p=x(async()=>{const r=await f.getInstance().updateUser(o.id,{name:c});if(r instanceof C)alert(`Save user failed with error "${r.errorCode}"`);else{const t=await f.getInstance().getUser(o.id);t instanceof C||await a.setLoggedInUser(t)}},[a,o.id,c]);return e.jsxs(v,{elevation:2,sx:n,children:[e.jsx($,{variant:"h3",sx:{paddingBottom:2},children:"My Account Info"}),e.jsxs(u,{children:["ID: ",o.id]}),e.jsxs(u,{children:["Email: ",o.email]}),e.jsx(u,{sx:{padding:"16px 0"},children:e.jsx(z,{fullWidth:!0,label:"Name",onChange:l,value:c??""})}),e.jsx(u,{sx:{paddingTop:"16px",textAlign:"end"},children:e.jsx(L,{variant:"contained",disabled:o.name===c,onClick:p,children:"Save"})})]})};m.displayName="MyAccountInfoComponent";const{useCallback:P}=await s("react"),{BIZCONSOLE_THEME_TRANSLATION_KEY:F,BizConsoleTheme:k,SUPPORTED_LANGUAGES:Z,isValidObjectValue:D,useAuthenticationStore:R,useUserPreferencesStore:j}=await s("@moderepo/biz-console"),{Box:M,FormControl:b,InputLabel:I,MenuItem:N,Select:T,Typography:W}=await s("@mui/material"),{useTranslation:G}=await s("react-i18next"),H=(n,a)=>!!D(n,!0,a),d=({projectId:n,sx:a})=>{const{t:o}=G(),c=R(t=>t.loggedInUser),i=j(t=>t.actions),l=j(t=>t.userPreferencesByProjectIdByUserId[n]?.[c.id]),p=P(t=>{i.setUserPreferencesLanguage(n,c.id,t.target.value)},[c.id,n,i]),r=P(t=>{i.setUserPreferencesTheme(n,c.id,t.target.value)},[c.id,n,i]);return e.jsxs(v,{elevation:2,sx:a,children:[e.jsx(W,{variant:"h3",sx:{paddingBottom:2},children:"My Preferences"}),e.jsx(M,{style:{margin:"16px 0"},children:e.jsxs(b,{fullWidth:!0,children:[e.jsx(I,{id:"language-selector-label",children:"Language"}),e.jsx(T,{labelId:"language-selector-label",value:l?.language??"",label:"Language",size:"small",onChange:p,children:Z.map(t=>e.jsx(N,{value:t.code,children:t.name}))})]})}),e.jsx(M,{style:{margin:"16px 0"},children:e.jsxs(b,{fullWidth:!0,children:[e.jsx(I,{id:"theme-selector-label",children:"Theme"}),e.jsx(T,{labelId:"theme-selector-label",value:l?.theme??"",label:"Theme",size:"small",onChange:r,children:Object.values(k).map(t=>e.jsx(N,{value:t,children:o(F[t])}))})]})})]})};d.displayName="MyAccountPrefComponent";const{isValidObjectValue:K}=await s("@moderepo/biz-console"),{Box:Y,Typography:O}=await s("@mui/material"),q=(n,a)=>!!K(n,!0,a),h=({projectId:n})=>e.jsxs(U,{children:[e.jsxs(Y,{sx:{textAlign:"center",paddingBottom:5},children:[e.jsx(O,{variant:"h2",children:"This is a Custom Page"}),e.jsx(O,{variant:"h5",children:"Anything can go in here"})]}),e.jsx(m,{projectId:n}),e.jsx(d,{sx:{marginTop:2},projectId:n})]});h.displayName="MyCustomAccountPage";const{BizConsolePluginType:g,IconSource:y}=await s("@moderepo/biz-console"),X={bizConsoleVersion:"0.0.2",plugins:[{type:g.COMPONENT,name:"My Custom Account Page",componentTypeSettings:{type:h.displayName,componentFunc:h,displayName:"My Custom Account Page",description:"A custom page that display my account info",icon:{source:y.BIZ_CONSOLE,name:"AccountOutlined"},customPropsValidator:q}},{type:g.COMPONENT,name:"My Account Info Component",componentTypeSettings:{type:m.displayName,componentFunc:m,displayName:"My Account Info Component",description:"A custom component that display my account info",icon:{source:y.BIZ_CONSOLE,name:"AccountOutlined"},customPropsValidator:_}},{type:g.COMPONENT,name:"My Account Pref Component",componentTypeSettings:{type:d.displayName,componentFunc:d,displayName:"My Account Preferences Component",description:"A custom component that display my account preferences",icon:{source:y.BIZ_CONSOLE,name:"AccountOutlined"},customPropsValidator:H}}]};export{m as MyAccountInfoComponent,d as MyAccountPrefComponent,h as MyCustomAccountPage,X as bizConsolePlugins,_ as isMyAccountInfoComponentProps,H as isMyAccountPrefComponentProps,q as isMyCustomAccountPageProps};