import { useRouter } from "next/router";
import Link from "next/link";

import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  ImgContainer,
  MovieDetails,
  MovieHeader,
  Ratings,
  Genre,
  GenreLink,
  Synopsis,
  Cast,
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

      <MovieDetails>
        <MovieHeader>
          <span className="title">{movieDetails?.title}</span>
          <span className="tagline">{movieDetails?.tagline}</span>

          <Ratings>
            <span className="runtime">
              {movieDetails?.spoken_languages[0]?.name} /{" "}
              {movieDetails?.runtime}
              min / {movieDetails?.release_date.split("-")[0]}
            </span>
          </Ratings>
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
                <GenreLink>{genre?.name}</GenreLink>
              </Link>
            ))}
          </div>
        </Genre>

        <Synopsis>
          <span className="synopsisTitle">The Synopsis</span>
          <span className="synopsis">{movieDetails?.overview}</span>
        </Synopsis>

        <Cast>
          <span className="cast">The Cast</span>
        </Cast>

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
    </Container>
  );
}

export default index;
