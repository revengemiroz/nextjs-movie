import React from "react";
import Image from "next/image";
import Stars from "react-rating";

import { Container, StarContainer } from "./style";

function index({ movieRatings }) {
  return (
    <Container>
      <Stars
        emptySymbol={
          <StarContainer>
            <Image src="/star.svg" width={20} height={20} />
          </StarContainer>
        }
        fullSymbol={
          <StarContainer>
            <Image src="/star-fill.svg" width={20} height={20} />
          </StarContainer>
        }
        initialRating={movieRatings}
        readonly
      />
    </Container>
  );
}

export default index;
