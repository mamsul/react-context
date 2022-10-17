import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <div style={style}>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
          }}
        >
          <li>
            <NavLink to={"/example1"}>Example 1</NavLink>
          </li>
          <li>
            <NavLink to={"/example2"}>Example 2</NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
