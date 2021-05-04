import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { useGetAllGenres } from "../../utils/useGetAllGenres";
import { useGetTvGenreList } from "../../pages/api/tv/useQuery/useGetTvGenreList";
import useWindowResize from "../../utils/useWindowResize";
import { SwitchContext } from "../../context/SwitchContext";

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

function checkIsMobile(width) {
  if (width <= 1280) {
    return true;
  } else {
    return false;
  }
}

function index({ isMobile }) {
  const [baseURL, setBaseURL] = useState(undefined);
  const size = useWindowResize();
  const { value } = useContext(SwitchContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  const { data: movieGenreList } = useGetAllGenres();
  const { data: tvGenreList } = useGetTvGenreList();

  const data = value ? tvGenreList : movieGenreList;

  const MyLink = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
      <OptionLink
        isMobile={checkIsMobile(size.width)}
        selected={false}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </OptionLink>
    );
  });

  const getAllStaticGenres = (genres) => {
    return (
      <>
        <h2>Discover</h2>
        {genres?.map((name) => (
          <OptionContainer key={name.id}>
            <Link href={name?.href} passHref>
              <MyLink isMobile={checkIsMobile(size.width)}>
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
    if (!data) {
      return null;
    }
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
              <MyLink isMobile={checkIsMobile(size.width)}>
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
    <Container isMobile={checkIsMobile(size.width)}>
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
        {size.width <= 1280 ? (
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        ) : (
          <img src="https://raw.githubusercontent.com/fidalgodev/movie-library-react/8a1626814f5368a9c311128be857bbc64cf06d55/src/svg/tmdb.svg" />
        )}
      </SvgContainer>
    </Container>
  );
}

export default index;
