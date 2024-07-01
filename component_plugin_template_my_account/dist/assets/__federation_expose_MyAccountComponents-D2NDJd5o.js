import { importShared } from './__federation_fn_import-sQ6o0tp6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CaHgxwVn.js';

const {useCallback: useCallback$2,useState} = await importShared('react');

const {APIError,MazeAPI,isValidObjectValue: isValidObjectValue$3,useAuthenticationStore: useAuthenticationStore$1,StyledForm: StyledForm$1,StyledPanel: StyledPanel$1} = await importShared('@moderepo/bizstack-console-sdk');

const isMyAccountInfoComponentProps = (obj, errorLogger) => {
  const settings = obj;
  if (!isValidObjectValue$3(settings, true, errorLogger)) {
    return false;
  }
  return true;
};
const MyAccountInfoComponent = ({ sx }) => {
  const authActions = useAuthenticationStore$1((store) => {
    return store.actions;
  });
  const loggedInUser = useAuthenticationStore$1((store) => {
    return store.loggedInUser;
  });
  const [name, setName] = useState(loggedInUser.name);
  const onUserNameChange = useCallback$2((event) => {
    setName(event.target.value);
  }, []);
  const saveUserName = useCallback$2(async () => {
    const response = await MazeAPI.getInstance().updateUser(loggedInUser.id, { name });
    if (!(response instanceof APIError)) {
      const updatedLoggedInUser = await MazeAPI.getInstance().getUser(loggedInUser.id);
      if (!(updatedLoggedInUser instanceof APIError)) {
        await authActions.setLoggedInUser(updatedLoggedInUser);
      }
    } else {
      alert(`Save user failed with error "${response.errorCode}"`);
    }
  }, [authActions, loggedInUser.id, name]);
  const onFormSubmit = useCallback$2(async (event) => {
    event.preventDefault();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel$1.Panel, { sx, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm$1.FormContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledForm$1.Form, { onSubmit: onFormSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel$1.HeaderBar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel$1.HeaderBarLeftContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel$1.HeaderBarTitle, { children: "My Account Info" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledPanel$1.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm$1.TextInputField, { label: "ID", InputProps: { readOnly: true }, value: loggedInUser.id }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm$1.TextInputField, { label: "Email", InputProps: { readOnly: true }, value: loggedInUser.email }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm$1.TextInputField, { label: "Name", variant: "outlined", value: name ?? "", onChange: onUserNameChange })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel$1.FooterBar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm$1.ActionsBar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm$1.RightActionsBar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm$1.ActionButton, { variant: "contained", disabled: loggedInUser.name === name, onClick: saveUserName, children: "Save" }) }) }) })
  ] }) }) });
};
MyAccountInfoComponent.displayName = "MyAccountInfoComponent";

const {Box: Box$1,Paper,styled} = await importShared('@mui/material');

const StyledMyCustomAccountPage = styled(Box$1, {
  name: "MyAccountComponents",
  slot: "myCustomAccountPage"
})(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  };
});
styled(Paper, {
  name: "MyAccountComponents",
  slot: "root"
})(({ theme }) => {
  return {
    padding: theme.spacing(2)
  };
});

const {useCallback: useCallback$1} = await importShared('react');

const {BIZCONSOLE_THEME_TRANSLATION_KEY,BizConsoleTheme,SUPPORTED_LANGUAGES,SubSettingsErrorsLogger: SubSettingsErrorsLogger$2,isValidObjectValue: isValidObjectValue$2,useAuthenticationStore,useUserPreferencesStore,StyledPanel,StyledForm,isValidNumberValue: isValidNumberValue$2} = await importShared('@moderepo/bizstack-console-sdk');

const {MenuItem,OutlinedInput} = await importShared('@mui/material');

const {useTranslation} = await importShared('react-i18next');

const isMyAccountPrefComponentProps = (obj, errorLogger) => {
  const settings = obj;
  if (!isValidObjectValue$2(settings, true, errorLogger)) {
    return false;
  }
  if (!isValidNumberValue$2(
    settings.projectId,
    true,
    false,
    void 0,
    void 0,
    void 0,
    new SubSettingsErrorsLogger$2(errorLogger, "projectId", settings.projectId)
  )) {
    return false;
  }
  return true;
};
const MyAccountPrefComponent = ({ projectId, sx }) => {
  const { t: trans } = useTranslation();
  const loggedInUser = useAuthenticationStore((store) => {
    return store.loggedInUser;
  });
  const userPreferencesActions = useUserPreferencesStore((store) => {
    return store.actions;
  });
  const userPreferences = useUserPreferencesStore((store) => {
    return store.userPreferencesByProjectIdByUserId[projectId]?.[loggedInUser.id];
  });
  const onLanguageChange = useCallback$1(
    (event) => {
      userPreferencesActions.setUserPreferencesLanguage(projectId, loggedInUser.id, event.target.value);
    },
    [loggedInUser.id, projectId, userPreferencesActions]
  );
  const onThemeChange = useCallback$1(
    (event) => {
      userPreferencesActions.setUserPreferencesTheme(projectId, loggedInUser.id, event.target.value);
    },
    [loggedInUser.id, projectId, userPreferencesActions]
  );
  const onFormSubmit = useCallback$1(async (event) => {
    event.preventDefault();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel.Panel, { sx, children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm.FormContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledForm.Form, { onSubmit: onFormSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel.HeaderBar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel.HeaderBarLeftContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledPanel.HeaderBarTitle, { children: " My Preferences" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledPanel.Content, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledForm.StyledFormControl, { fullWidth: true, variant: "outlined", required: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm.StyledInputLabel, { children: "Language" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StyledForm.SelectInputField,
          {
            label: "Language",
            input: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlinedInput, { notched: true, label: "Language" }),
            type: "number",
            value: userPreferences?.language ?? "",
            onChange: onLanguageChange,
            children: SUPPORTED_LANGUAGES.map((language) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: language.code, selected: language.code === userPreferences?.language, children: language.name }, language.code);
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledForm.StyledFormControl, { fullWidth: true, variant: "outlined", required: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StyledForm.StyledInputLabel, { children: "Theme" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StyledForm.SelectInputField,
          {
            label: "Theme",
            input: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlinedInput, { notched: true, label: "Theme" }),
            type: "number",
            value: userPreferences?.theme ?? "",
            onChange: onThemeChange,
            children: Object.values(BizConsoleTheme).map((theme) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: theme, selected: theme === userPreferences?.theme, children: trans(BIZCONSOLE_THEME_TRANSLATION_KEY[theme]) }, theme);
            })
          }
        )
      ] })
    ] })
  ] }) }) });
};
MyAccountPrefComponent.displayName = "MyAccountPrefComponent";

const {SubSettingsErrorsLogger: SubSettingsErrorsLogger$1,isValidNumberValue: isValidNumberValue$1,isValidObjectValue: isValidObjectValue$1} = await importShared('@moderepo/bizstack-console-sdk');
const {Box,Typography} = await importShared('@mui/material');
const isMyCustomAccountPageProps = (obj, errorLogger) => {
  const settings = obj;
  if (!isValidObjectValue$1(settings, true, errorLogger)) {
    return false;
  }
  if (!isValidNumberValue$1(
    settings.projectId,
    true,
    false,
    void 0,
    void 0,
    void 0,
    new SubSettingsErrorsLogger$1(errorLogger, "projectId", settings.projectId)
  )) {
    return false;
  }
  return true;
};
const MyCustomAccountPage = ({ projectId }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(StyledMyCustomAccountPage, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { textAlign: "center", paddingBottom: 5 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h2", children: "This is a Custom Page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", children: "Anything can go in here" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MyAccountInfoComponent, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MyAccountPrefComponent, { sx: { marginTop: 2 }, projectId })
  ] });
};
MyCustomAccountPage.displayName = "MyCustomAccountPage";

const {useCallback} = await importShared('react');

const {Button} = await importShared('@mui/material');

const {Icons,isValidObjectValue,SubSettingsErrorsLogger,isValidNumberValue} = await importShared('@moderepo/bizstack-console-sdk');

const {useNavigate} = await importShared('react-router-dom');

const isLogoutButtonProps = (obj, errorLogger) => {
  const settings = obj;
  if (!isValidObjectValue(settings, true, errorLogger)) {
    return false;
  }
  if (!isValidNumberValue(
    settings.projectId,
    true,
    false,
    void 0,
    void 0,
    void 0,
    new SubSettingsErrorsLogger(errorLogger, "projectId", settings.projectId)
  )) {
    return false;
  }
  return true;
};
const LogoutButton = ({ projectId }) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(`/projects/${projectId}/logout`, { replace: true });
  }, [navigate, projectId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.LogoutOutlined, {}), onClick, children: "Logout" });
};
LogoutButton.displayName = "LogoutButton";

const {BizConsolePluginType} = await importShared('@moderepo/bizstack-console-sdk');
const bizConsolePlugins = {
  bizConsoleVersion: "0.0.4",
  plugins: [
    {
      type: BizConsolePluginType.COMPONENT,
      name: "My Custom Account Page",
      componentTypeSettings: {
        type: MyCustomAccountPage.displayName,
        componentFunc: MyCustomAccountPage,
        displayName: "My Custom Account Page",
        description: "A custom page that display my account info",
        customPropsValidator: isMyCustomAccountPageProps
      }
    },
    {
      type: BizConsolePluginType.COMPONENT,
      name: "My Account Info Component",
      componentTypeSettings: {
        type: MyAccountInfoComponent.displayName,
        componentFunc: MyAccountInfoComponent,
        displayName: "My Account Info Component",
        description: "A custom component that display my account info",
        customPropsValidator: isMyAccountInfoComponentProps
      }
    },
    {
      type: BizConsolePluginType.COMPONENT,
      name: "My Account Pref Component",
      componentTypeSettings: {
        type: MyAccountPrefComponent.displayName,
        componentFunc: MyAccountPrefComponent,
        displayName: "My Account Preferences Component",
        description: "A custom component that display my account preferences",
        customPropsValidator: isMyAccountPrefComponentProps
      }
    },
    {
      type: BizConsolePluginType.COMPONENT,
      name: "Logout Button",
      componentTypeSettings: {
        type: LogoutButton.displayName,
        componentFunc: LogoutButton,
        displayName: "Logout Button",
        description: "A button to log the user out",
        customPropsValidator: isLogoutButtonProps
      }
    }
  ]
};

export { MyAccountInfoComponent, MyAccountPrefComponent, MyCustomAccountPage, bizConsolePlugins, isMyAccountInfoComponentProps, isMyAccountPrefComponentProps, isMyCustomAccountPageProps };
