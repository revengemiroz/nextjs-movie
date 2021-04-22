import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Sticky from "react-stickynode";

import { useGetAllGenres } from "../../utils/useGetAllGenres";

import {
  Container,
  HeaderLogo,
  GenreContainer,
  OptionContainer,
  OptionLink,
  SvgContainer,
} from "./style";

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
    <OptionLink selected={false} href={href} onClick={onClick} ref={ref}>
      {children}
    </OptionLink>
  );
});

function index(props) {
  const [baseURL, setBaseURL] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  const { data, isLoading, error } = useGetAllGenres();

  if (isLoading) {
    return <p>wait loading...</p>;
  }

  const getAllStaticGenres = (genres) => {
    return (
      <>
        <h2>Discover</h2>
        {genres?.map((name) => (
          <OptionContainer key={name.id}>
            <Link href={name?.href} passHref>
              <MyLink>
                <div className="link">
                  <Image
                    src="/play-fill.svg"
                    alt="Picture of the author"
                    width={14}
                    height={14}
                  />
                  <span>{name?.text}</span>
                </div>
              </MyLink>
            </Link>
          </OptionContainer>
        ))}
      </>
    );
  };

  const getAllDynamicGenres = (genres) => {
    return (
      <GenreContainer>
        <h2>Genres</h2>
        {genres?.map(({ name, id }) => (
          <OptionContainer key={id}>
            <Link
              href={{
                pathname: "/genre",
                query: { id },
              }}
              passHref
            >
              <MyLink>
                <div className="link">
                  <Image
                    src="/play.svg"
                    alt="Picture of the author"
                    width={14}
                    height={14}
                  />
                  <span>{name}</span>
                </div>
              </MyLink>
            </Link>
          </OptionContainer>
        ))}
      </GenreContainer>
    );
  };

  return (
    <Sticky enabled={true} top={40}>
      <Container>
        <Link href={baseURL + "popular"}>
          <HeaderLogo>
            <Image
              src="/joker.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </HeaderLogo>
        </Link>
        {getAllStaticGenres(StaticGenre)}
        {getAllDynamicGenres(data)}
        <SvgContainer>
          <img src="https://raw.githubusercontent.com/fidalgodev/movie-library-react/8a1626814f5368a9c311128be857bbc64cf06d55/src/svg/tmdb.svg" />
        </SvgContainer>
      </Container>
    </Sticky>
  );
}

export default index;
