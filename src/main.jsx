import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import SprintViewCaseStudy from "./pages/SprintViewCaseStudy";
import ScrollToTop from "../src/components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sprint-view" element={<SprintViewCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
