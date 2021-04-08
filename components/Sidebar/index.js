import React from "react";
import Sticky from "react-stickynode";

import { useGetAllGenres } from "../../utils/useGetAllGenres";

import { Container, OptionContainer, Option } from "./style";

const StaticGenre = ["Popular", "Top Rated", "Upcoming"];

function index(props) {
  const { data, isLoading, error } = useGetAllGenres();

  if (isLoading) {
    return <p>wait loading...</p>;
  }

  const getAllStaticGenres = (genres) => {
    return (
      <>
        {genres?.map((name) => (
          <OptionContainer key={name}>
            <Option>{name}</Option>
          </OptionContainer>
        ))}
      </>
    );
  };

  const getAllDynamicGenres = (genres) => {
    return (
      <>
        {genres?.map(({ name, id }) => (
          <OptionContainer key={id}>
            <Option>{name}</Option>
          </OptionContainer>
        ))}
      </>
    );
  };

  return (
    <Sticky enabled={true} top={40}>
      <Container>
        {getAllStaticGenres(StaticGenre)}
        {getAllDynamicGenres(data)}
      </Container>
    </Sticky>
  );
}

export default index;
