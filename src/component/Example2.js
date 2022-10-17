import React from "react";
import { UserContextProvider } from "../context/UserContext";
import Layout from "./layout/Layout";
import Navbar from "./Navbar";

export default function Example2() {
  return (
    <UserContextProvider>
      <div>
        <Layout>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1>Example 2 - Pake Use Reducer & HOC</h1>
            <Navbar />
          </div>
        </Layout>
      </div>
    </UserContextProvider>
  );
}
