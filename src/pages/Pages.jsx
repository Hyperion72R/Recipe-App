import React from "react";
import Home from "./Home";
import Cousine from "./Cousine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cousine/:type" element={<Cousine />} />
        <Route path="/searched/:search" element={<Searched></Searched>} />
        <Route path="/recipe/:name" element={<Recipe></Recipe>} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
