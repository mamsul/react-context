import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const myStyle = {
    with: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const btnStyle = {
    padding: "10px 30px 10px 30px",
    cursor: "pointer"
  };

  return (
    <div style={myStyle}>
      <h1>Belajar Context di React</h1>

      <NavLink to={"/example1"}>
        <button style={btnStyle}>Ikuzo</button>
      </NavLink>
    </div>
  );
};

export default Home;
