import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./main/MainScreen";
import Calendar from "./main/Calendar";
import styled from "styled-components";

function Router() {
  return (
    <BrowserRouter basename="imh-fe">
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
const AppLayout = styled.div`
  position: fixed;
  width: 550px;
  height: 98vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  border: 1px solid lightgrey;
  padding: 1%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 549px) {
    width: 100vw;
  }
`;

export default Router;
