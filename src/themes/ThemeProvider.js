import darkMode from "./darkMode";
import React, { useReducer } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
const ThemeUpdateContext = React.createContext();
export const actions = {
  TOGGLE_THEME: "toggle-theme",
  SET_THEME: "set-theme",
};

export const useTheme = () => {
  return React.useContext(MuiThemeProvider);
};

export const useThemeDispatch = () => {
  return React.useContext(ThemeUpdateContext);
};

const themeReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.TOGGLE_THEME:
      const toggledType = state.palette.type === "dark" ? "light" : "dark";
      const newTheme = {
        ...state,
        palette: { ...state.palette, type: toggledType },
      };
      return newTheme;
    case actions.SET_THEME:
      return createTheme(() => payload);
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatchTheme] = useReducer(themeReducer, darkMode);
  return (
    <MuiThemeProvider theme={createTheme(theme)}>
      <ThemeUpdateContext.Provider value={dispatchTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </MuiThemeProvider>
  );
};
