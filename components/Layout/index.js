import React from "react";

import Sidebar from "../Sidebar";

import { Container } from "./style";

function index({ children }) {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
}

export default index;
