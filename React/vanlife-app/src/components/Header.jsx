import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  console.log(isLoggedIn);

  const style = {
    fontWeight: "800",
    color: "var(--accent)",
  };

  return (
    <header>
      <section className="content">
        <Link to="/" className="logo">
          <h1>RentVan</h1>
        </Link>
        <nav className="header-nav">
          <NavLink
            to="host"
            style={({ isActive }) => {
              return isActive ? style : null;
            }}
          >
            Host
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? style : null)}
          >
            About
          </NavLink>
          <NavLink
            to="vans"
            style={({ isActive }) => (isActive ? style : null)}
          >
            Vans
          </NavLink>
        </nav>
      </section>
    </header>
  );
}
