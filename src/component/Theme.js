import React from "react";
import { useThemeContext } from "../context/ThemeContext";

export default function Theme() {
  const [state, dispatch] = useThemeContext();

  return (
    <>
      <span style={{ marginBottom: 10 }}>Theme: {state.theme}</span>
      <button onClick={(e) => dispatch({ type: "SET_THEME" })}>
        Change Theme
      </button>
    </>
  );
}
