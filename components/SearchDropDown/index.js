import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import EmptyImage from "../EmptyImage";

import { useGetAllGenres } from "../../utils/useGetAllGenres";
import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  List,
  MovieContainer,
  MovieImage,
  MovieDetails,
  Details,
  Wrapper,
  GenreTitle,
} from "./style";

function index({ searchData }) {
  const [data, setData] = useState([]);
  const [baseURL, setBaseURL] = useState(undefined);
  const [imgLoaded, setImgLoaded] = useState(false);
  const node = useRef(null);

  const { data: allGenres } = useGetAllGenres();

  const getTitleFromGenreId = (data, genreId) => {
    if (data) {
      const result = data?.filter((item) => item?.id == genreId);
      return result[0]?.name ?? null;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  useEffect(() => {
    var half_length = Math.ceil(searchData?.results?.length / 3);
    var leftSide;
    if (searchData) {
      leftSide = searchData?.results?.splice(0, half_length);
      setData(leftSide);
    } else {
      setData([]);
    }
  }, [searchData]);

  const renderList = (movieData) => {
    return movieData?.map((data) => (
      <Link
        href={{ pathname: `${baseURL}/movie`, query: { movieId: data?.id } }}
        key={data.id}
        passHref
      >
        <List ref={node}>
          <MovieContainer>
            <MovieImage>
              {data?.poster_path ? (
                <img
                  style={!imgLoaded ? { display: "none" } : {}}
                  src={ImgBaseURL + "w200" + data?.poster_path}
                  alt={data?.id}
                  onLoad={() => setImgLoaded(true)}
                />
              ) : (
                <EmptyImage />
              )}
            </MovieImage>

            <MovieDetails>
              <span className="movieTitle">{data?.title}</span>
              <Details>
                <Wrapper>
                  <Image src="/clock.svg" height={10} width={10} />
                  <span>{data?.release_date?.split("-")[0]}</span>
                </Wrapper>
                <Wrapper>
                  <Image src="/star.svg" height={10} width={10} />
                  <span>{data?.vote_average / 2}</span>
                </Wrapper>
                <Wrapper>
                  <Image src="/eye.svg" height={10} width={10} />
                  <GenreTitle>
                    {getTitleFromGenreId(allGenres, data?.genre_ids[0])}
                  </GenreTitle>
                </Wrapper>
              </Details>
            </MovieDetails>
          </MovieContainer>
        </List>
      </Link>
    ));
  };

  return <Container>{renderList(data)}</Container>;
}

export default index;
