import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const style = {
    textDecoration: "underline",
    fontWeight: "700",
  };

  return (
    <header>
      <section className="content">
        <Link to="/" className="logo">
          <h1>#VANLIFE</h1>
        </Link>
        <nav>
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
