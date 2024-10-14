import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  function notify(message: string) {
    toast.success(message, {
      closeButton: false,
    });
  }

  return (
    <div className="app">
      <ToastContainer
        autoClose={1000}
        position="top-center"
        hideProgressBar={true}
        limit={3}
        closeButton={false}
        style={{
          width: "fit-content",
          fontSize: "14px",
        }}
      />

      <Header />
      <Navbar />
      <Outlet context={{ notify }} />
    </div>
  );
};
