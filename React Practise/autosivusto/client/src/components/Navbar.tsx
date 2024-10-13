import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const linkActivated = {
    color: "var(--header-color)",
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? linkActivated : undefined)}
            to=".."
            className="nav-link"
          >
            Autolista
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? linkActivated : undefined)}
            to="lisaa"
            className="nav-link"
          >
            Lisää auto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
