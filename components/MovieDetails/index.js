import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";

import Ratings from "../Ratings";
import Modal from "../Modal";
import EmptyImage from "../EmptyImage";
import Spinner from "../Spinner";
import Cast from "../Cast";

import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  ImgContainer,
  MovieDetails,
  MovieHeader,
  RatingsContainer,
  RatingsNumber,
  Genre,
  GenreLink,
  Synopsis,
  CastContainer,
  LinksContainer,
} from "./style";

function index({ movieDetails, cast, videos }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [baseURL, setBaseURL] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseURL(window.location.origin);
    }
  }, []);

  if (!movieDetails) {
    return null;
  }

  const { poster_path } = movieDetails;

  const renderTrailer = (videos) => {
    if (!videos?.results) return null;

    const Trailers = videos?.results?.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    const { key } = Trailers?.pop() ?? false;

    if (!key) {
      return null;
    }

    return (
      <>
        <a
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Trailer
        </a>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            url={`https://www.youtube.com/watch?v=${key}`}
          />
        </Modal>
      </>
    );
  };

  return (
    <Container>
      <ImgContainer>
        {!imgLoaded && poster_path ? <Spinner type="black" /> : null}
        {poster_path && (
          <img
            src={ImgBaseURL + "w780" + movieDetails?.poster_path}
            alt={movieDetails?.id}
            onLoad={() => setImgLoaded(true)}
          />
        )}
        {poster_path == null && <EmptyImage user={false} />}
      </ImgContainer>

      <MovieDetails>
        <MovieHeader>
          <span className="title">{movieDetails?.title}</span>
          <span className="tagline">{movieDetails?.tagline}</span>

          <RatingsContainer>
            <div className="rating">
              <Ratings movieRatings={movieDetails?.vote_average / 2} />
              <RatingsNumber>{movieDetails?.vote_average}</RatingsNumber>
            </div>
            <span className="runtime">
              {movieDetails?.spoken_languages[0]?.name} /{" "}
              {movieDetails?.runtime} min. /{" "}
              {movieDetails?.release_date.split("-")[0]}
            </span>
          </RatingsContainer>
        </MovieHeader>

        <Genre>
          <span className="genreTitle">The genres</span>
          <div className="linkContainer">
            {movieDetails?.genres?.map((genre) => (
              <Link
                key={genre.id}
                href={{
                  pathname: baseURL + `genre`,
                  query: { id: genre.id },
                }}
                passHref
              >
                <GenreLink>
                  <Image src="/play-fill.svg" width={10} height={10} />
                  <span>{genre?.name}</span>
                </GenreLink>
              </Link>
            ))}
          </div>
        </Genre>

        <Synopsis>
          <span className="synopsisTitle">The Synopsis</span>
          <span className="synopsis">{movieDetails?.overview}</span>
        </Synopsis>

        <CastContainer>
          <span className="cast">The Cast</span>
          <Cast cast={cast?.cast} />
        </CastContainer>
        <LinksContainer>
          <a href={movieDetails?.homepage}>
            <span>Website</span>
          </a>
          <a href={"https://www.imdb.com/title/" + movieDetails?.imdb_id}>
            IMDB
          </a>
          {renderTrailer(videos)}
        </LinksContainer>
      </MovieDetails>
    </Container>
  );
}

export default index;
