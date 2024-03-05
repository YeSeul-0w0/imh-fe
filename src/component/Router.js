import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./main/MainScreen";
import Calendar from "./main/Calendar";
import AppLayout from "./layout/AppLayout";

function Router() {
  return (
    <BrowserRouter basename="imh-fe">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainScreen />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
