import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};
