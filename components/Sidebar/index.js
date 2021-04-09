import React from "react";
import Link from "next/link";
import Sticky from "react-stickynode";

import { useGetAllGenres } from "../../utils/useGetAllGenres";

import { Container, OptionContainer, Option } from "./style";

const StaticGenre = [
  {
    id: 1,
    text: "Popular",
    href: "/popular",
  },
  {
    id: 2,
    text: "Top Rated",
    href: "/toprated",
  },
  {
    id: 3,
    text: "Upcoming",
    href: "/upcoming",
  },
];

const MyLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <Option href={href} onClick={onClick} ref={ref}>
      {children}
    </Option>
  );
});

function index(props) {
  const { data, isLoading, error } = useGetAllGenres();

  if (isLoading) {
    return <p>wait loading...</p>;
  }

  const getAllStaticGenres = (genres) => {
    return (
      <>
        {genres?.map((name) => (
          <OptionContainer key={name.id}>
            <Link href={name?.href} passHref>
              <MyLink>{name?.text}</MyLink>
            </Link>
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
            <Link
              href={{
                pathname: "/genre",
                query: { id },
              }}
              passHref
            >
              <MyLink>{name}</MyLink>
            </Link>
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
