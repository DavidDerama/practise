import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isLoggedIn")
  );

  return <Outlet context={isAuthenticated} />;
}
