import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { useGetAllGenres } from "../../utils/useGetAllGenres";
import { useGetTvGenreList } from "../../pages/api/tv/useQuery/useGetTvGenreList";
import useWindowResize from "../../utils/useWindowResize";
import { SwitchContext } from "../../context/SwitchContext";

import {
  Container,
  HeaderLogo,
  GenreContainer,
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

function index() {
  const [baseURL, setBaseURL] = useState(undefined);
  const router = useRouter();

  const size = useWindowResize();
  const { value, selectedTab, setSelectedTab } = useContext(SwitchContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
      setSelectedTab({ selected: router?.pathname, id: router?.query?.id });
    }
  }, []);

  useEffect(() => {
    setSelectedTab({ selected: router?.pathname, id: router?.query?.id });
  }, [router?.query?.id]);

  const { data: movieGenreList } = useGetAllGenres();
  const { data: tvGenreList } = useGetTvGenreList();

  const data = value ? tvGenreList : movieGenreList;

  const getAllStaticGenres = (genres) => {
    return (
      <>
        <h2>Discover</h2>
        {genres?.map((name) => (
          <Link href={name?.href} key={name?.id} passHref>
            <OptionLink
              key={name?.id}
              onClick={() => {
                setSelectedTab({ selected: router?.pathname });
              }}
              selected={selectedTab.selected == name?.href}
              isMobile={checkIsMobile(size.width) ? 0 : 1}
            >
              <div className="link">
                <Image
                  src={
                    selectedTab.selected == name?.href
                      ? "/heart-fill.svg"
                      : "/heart-fill-light.svg"
                  }
                  alt="Picture of the author"
                  width={14}
                  height={14}
                />
                <span>{name?.text}</span>
              </div>
            </OptionLink>
          </Link>
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
          <Link
            href={{
              pathname: "/genre",
              query: { id },
            }}
            //shallow only works when the base url is same and query is different so it doesnt reload the page
            shallow={true}
            key={id}
            passHref
          >
            <OptionLink
              onClick={() => {
                setSelectedTab({ selected: router?.pathname, id: id });
              }}
              selected={
                selectedTab.selected == router?.pathname &&
                selectedTab?.id == id
              }
              isMobile={checkIsMobile(size.width) ? 0 : 1}
            >
              <div className="link">
                <Image
                  src={
                    selectedTab.selected == router?.pathname &&
                    selectedTab?.id == id
                      ? "/play-circle.svg"
                      : "/play-circle-light.svg"
                  }
                  alt="Picture of the author"
                  width={14}
                  height={14}
                />
                <span>{name}</span>
              </div>
            </OptionLink>
          </Link>
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
