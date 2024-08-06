import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
