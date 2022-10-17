import { createContext, useContext, useReducer } from "react";

export const ThemeContext = createContext({
  empty: true,
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

const initialState = {
  theme: "light",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: state.theme == "light" ? "dark" : "light" };
    default:
      throw new Error("Unexpected Action Type");
  }
}

export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
