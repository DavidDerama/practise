import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostVanDetail from "./pages/Host/HostVanDetail";
import Details from "./pages/Host/Details";
import Pricing from "./pages/Host/Pricing";
import Photos from "./pages/Host/Photos";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Auth/Login";
import "./server";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="login" element={<Login />} />
            <Route element={<AuthLayout />}>
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<Details />} />
                  <Route path="pricing" element={<Pricing />} />
                  <Route path="photos" element={<Photos />} />
                </Route>
              </Route>
              <Route />
            </Route>
            <Route path="*" element={<h1>Not Found 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
