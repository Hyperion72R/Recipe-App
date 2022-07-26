import React from "react";
import Home from "./Home";
import Cousine from "./Cousine";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cousine/:type" element={<Cousine />} />
    </Routes>
  );
}

export default Pages;
