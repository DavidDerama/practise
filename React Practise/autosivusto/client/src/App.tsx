import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Search } from "./pages/Search";
import { AddCar } from "./pages/AddCar";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />}></Route>
          <Route path="haku" element={<Search />}></Route>
          <Route path="lisaa" element={<AddCar />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
