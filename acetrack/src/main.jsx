import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import DashboardLayout from "./layouts/DashboardLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignupPage />} />
        </Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
