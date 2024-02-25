import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./Main/MainScreen";
import Calendar from "./Main/Calendar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
