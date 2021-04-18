import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Ratings from "../Ratings";
import Cast from "../Cast";

import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  ImgContainer,
  MovieContainer,
  MovieDetails,
  MovieHeader,
  RatingsContainer,
  RatingsNumber,
  Genre,
  GenreLink,
  Synopsis,
  CastContainer,
  ExternalLinks,
} from "./style";

function index({ movieDetails }) {
  console.log(movieDetails);
  const router = useRouter();

  return (
    <Container>
      <ImgContainer>
        <img
          src={ImgBaseURL + movieDetails?.poster_path}
          alt={movieDetails?.id}
        />
      </ImgContainer>

      <MovieContainer>
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
                  href={{
                    pathname: process.env.NEXT_PUBLIC_URL + `genre`,
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
            <Cast />
          </CastContainer>

          <ExternalLinks>
            <a href={movieDetails?.homepage}>
              <span>Website</span>
            </a>
            <a href={"https://www.imdb.com/title/" + movieDetails?.imdb_id}>
              IMDB
            </a>
            <a>Trailer</a>
          </ExternalLinks>
        </MovieDetails>
      </MovieContainer>
    </Container>
  );
}

export default index;
