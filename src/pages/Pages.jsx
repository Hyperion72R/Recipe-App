import React from "react";
import Home from "./Home";
import Cousine from "./Cousine";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cousine/:type" element={<Cousine />} />
      <Route path="/searched/:search" element={<Searched></Searched>} />
    </Routes>
  );
}

export default Pages;
