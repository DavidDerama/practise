import { Outlet, NavLink, useOutletContext, Navigate } from "react-router-dom";

export default function HostLayout() {
  const style = {
    fontWeight: "800",
  };

  const isAuthenticated = useOutletContext();

  return isAuthenticated ? (
    <div className="content host-layout ">
      <nav className="host-main-nav">
        <NavLink to="." end style={({ isActive }) => (isActive ? style : null)}>
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? style : null)}
        >
          Income
        </NavLink>
        <NavLink to="vans" style={({ isActive }) => (isActive ? style : null)}>
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? style : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  ) : (
    <Navigate to="../about" />
  );
}
