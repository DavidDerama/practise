import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [isAunenticated, setIsAutenticated] = useState(
    localStorage.getItem("isLoggedIn")
  );

  console.log(isAunenticated);

  return <Outlet context={isAunenticated} />;
}
