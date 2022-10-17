import React from "react";
import { ThemeContextProvider } from "../context/ThemeContext";
import { useUserContext } from "../context/UserContext";
import Theme from "./Theme";
import InputName from "./utils/InputName";

export default function Navbar() {
  const [state] = useUserContext();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <img src={state.user.avatar} alt="user-avatar" height={50} width={50} />
        <span
          style={{
            marginLeft: 20,
          }}
        >
          {state.user.name}
        </span>
      </div>
      <div style={{ marginBottom: 40 }}>
        <InputName />
      </div>
      <ThemeContextProvider>
        <Theme />
      </ThemeContextProvider>
    </>
  );
}
