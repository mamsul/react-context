import React from "react";
import Home from "./component/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Example1 from "./component/Example1.js";
import Example2 from "./component/Example2.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/example1" element={<Example1 />}></Route>
        <Route exact path="/example2" element={<Example2 />}></Route>
      </Routes>
    </Router>
  );
}
