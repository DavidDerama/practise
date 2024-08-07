import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [isAunenticated, setIsAutenticated] = useState(true);

  return <Outlet context={isAunenticated} />;
}
