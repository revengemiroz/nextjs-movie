import React from "react";

import { Container, MainText, SubText } from "./style";

function index({ mainText, subText = "MOVIES" }) {
  return (
    <Container>
      <MainText>{mainText}</MainText>
      <SubText>{subText}</SubText>
    </Container>
  );
}

export default index;
