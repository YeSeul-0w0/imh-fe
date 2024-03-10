import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./main/MainScreen";
import Calendar from "./main/Calendar";
import AppLayout from "./layout/AppLayout";
import CafeForm from "./main/form/CafeForm";

function Router() {
  return (
    <BrowserRouter basename="imh-fe">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainScreen />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/register_cafe_info" element={<CafeForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
