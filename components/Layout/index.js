import React from "react";

import Sidebar from "../Sidebar";

import { Container, RightSide } from "./style";

function index({ children }) {
  return (
    <Container>
      <Sidebar />
      <RightSide>{children}</RightSide>
    </Container>
  );
}

export default index;
