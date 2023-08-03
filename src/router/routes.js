import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomePage></HomePage>} path="/"></Route>
      <Route element={<AboutPage></AboutPage>} path="/about"></Route>
    </Routes>
  );
}
