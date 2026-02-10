import { clientActionTypes } from "../reducers/client.reducer";

export const setUser = (user) => ({ type: clientActionTypes.SET_USER, payload: user });
export const setRoles = (roles) => ({ type: clientActionTypes.SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: clientActionTypes.SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: clientActionTypes.SET_LANGUAGE, payload: language });
