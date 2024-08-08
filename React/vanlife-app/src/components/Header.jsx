import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const style = {
    fontWeight: "800",
  };

  return (
    <header>
      <section className="content">
        <Link to="/" className="logo">
          <h1>RentVan</h1>
        </Link>
        <nav>
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
