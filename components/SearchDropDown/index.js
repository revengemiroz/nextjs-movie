import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  List,
  MovieContainer,
  MovieImage,
  MovieDetails,
  Details,
  Rating,
} from "./style";

function index({ searchData, hide }) {
  const [data, setData] = useState([]);
  const [baseURL, setBaseURL] = useState(undefined);
  const node = useRef(null);

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
              <img
                src={ImgBaseURL + "w200" + data?.poster_path}
                alt={data?.id}
              />
            </MovieImage>

            <MovieDetails>
              <span className="movieTitle">{data?.title}</span>
              <Details>
                <span>{data?.release_date?.split("-")[0]}</span>
                <Rating>
                  <Image src="/star.svg" height={10} width={10} />
                  <span>{data?.vote_average / 2}</span>
                </Rating>
                <span>{data?.genre_ids[0]}</span>
              </Details>
            </MovieDetails>
          </MovieContainer>
        </List>
      </Link>
    ));
  };

  return <Container hideit={hide ? 0 : 1}>{renderList(data)}</Container>;
}

export default index;
