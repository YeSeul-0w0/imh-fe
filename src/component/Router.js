import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./Main/MainScreen";
import Calendar from "./Main/Calendar";
import styled from "styled-components";

function Router() {
  return (
    <AppLayout>
      <BrowserRouter basename="imh-fe">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

const AppLayout = styled.div`
  max-width: 500px;
  height: 98vh;
  // min-height: 100vh;
  margin: auto;
  border: 1px solid lightgrey;
  padding: 2%;
  //display: flex;
  //flex-flow: column nowrap;
  //align-items: center;
  //align-content: stretch;
  position: relative;
  transform: translateX(-0%);
  /* overflow-y: hidden; */
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default Router;
