import { useReducer, createContext, useMemo } from "react";

const GLOBAL_STATE = {
  isLoggedIn: false,
  theme: "light",
  isModalOpen: false,
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": return {
      ...state,
      isLoggedIn: true
    };
    case "LOGOUT": return {
      ...state,
      isLoggedIn: false
    };
    case "LIGHT_THEME": return {
      ...state,
      theme: "light",
    };
    case "DARK_THEME": return {
      ...state,
      theme: "dark",
    };
    case "OPEN_MODAL": return {
      ...state,
      isModalOpen: true,
    };
    case "CLOSE_MODAL": return {
      ...state,
      isModalOpen: false,
    };
    default: return state;
  }
};

export const GlobalState = createContext();
GlobalState.displayName = "GlobalState";

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, GLOBAL_STATE);
  const value = useMemo(
  () => ({
    ...state,
    login: () => {
      dispatch({ type: "LOGIN" })
    },
    logout: () => {
      dispatch({ type: "LOGOUT" })
    },
    setLightTheme: () => {
      dispatch({ type: "LIGHT_THEME" })
    },
    setDarkTheme: () => {
      dispatch({ type: "DARK_THEME" })
    },
    openModal: () => {
      dispatch({ type: "OPEN_MODAL" })
    },
    closeModal: () => {
      dispatch({ type: "CLOSE_MODAL" })
    }
  }), [state, dispatch]
  );

  return (
  <GlobalState.Provider value={value}>
    {children}
  </GlobalState.Provider>
  )
};