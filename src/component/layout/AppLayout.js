import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
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

export default AppLayout;
