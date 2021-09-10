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
  const newState = { ...state };
  console.log({ type: newState.palette.type });
  switch (type) {
    case actions.TOGGLE_THEME:
      newState.palette.type =
        newState.palette.type === "dark" ? "light" : "dark";
      return createTheme(newState);
    case actions.SET_THEME:
      return payload;
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, dispatchTheme] = useReducer(
    themeReducer,
    createTheme(darkMode)
  );
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeUpdateContext.Provider value={dispatchTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </MuiThemeProvider>
  );
};
