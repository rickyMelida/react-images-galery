import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Aurora } from "./components/Aurora";
import { Beach } from "./components/Beach";
import { Forest } from "./components/Forest";
import { Jungle } from "./components/Jungle";
import { Lake } from "./components/Lake";
import { Milky } from "./components/Milky";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-3 text-light">Galeria</h1>
      </div>
      <Routes>
        <Route path="/" element={<Aurora />} />
        <Route path="/aurora" element={<Aurora />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/jungle" element={<Jungle />} />
        <Route path="/lake" element={<Lake />} />
        <Route path="/milky" element={<Milky />} />
      </Routes>
      <Navigation />
    </Router>
  );
}
