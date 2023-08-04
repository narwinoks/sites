import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectPage from "../pages/ProjectPage";
import BlogsPage from "../pages/BlogsPage";
import ContactPage from "../pages/ContactPage";
import OtherPage from "../pages/ContactPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomePage></HomePage>} path="/"></Route>
      <Route element={<AboutPage></AboutPage>} path="/about"></Route>
      <Route element={<ProjectPage></ProjectPage>} path="/projects"></Route>
      <Route element={<BlogsPage></BlogsPage>} path="/blogs"></Route>
      <Route element={<BlogsPage></BlogsPage>} path="/blog/:slug"></Route>
      <Route element={<ContactPage></ContactPage>} path="/contacts"></Route>
      <Route element={<OtherPage></OtherPage>} path="/others"></Route>
    </Routes>
  );
}
