import {
  Outlet,
  NavLink,
  useOutletContext,
  Navigate,
  useLocation,
} from "react-router-dom";

export default function HostLayout() {
  const style = {
    fontWeight: "800",
  };

  const location = useLocation();

  const isAuthenticated = useOutletContext();

  return isAuthenticated ? (
    <div className="content host-layout">
      <nav className="host-main-nav">
        <NavLink to="." end style={({ isActive }) => (isActive ? style : null)}>
          Dashboard
        </NavLink>
        <NavLink to="vans" style={({ isActive }) => (isActive ? style : null)}>
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </div>
  ) : (
    <Navigate to="../login" state={location} />
  );
}
