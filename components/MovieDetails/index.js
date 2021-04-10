import { useRouter } from "next/router";

import { ImgBaseURL } from "../../utils/tmdb";

import {
  Container,
  ImgContainer,
  MovieDetails,
  MovieHeader,
  Ratings,
  Genre,
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
              <button
                onClick={() => {
                  router?.push({
                    pathname: process.env.NEXT_PUBLIC_URL + `genre`,
                    query: { id: genre.id },
                  });
                }}
              >
                {genre?.name}
              </button>
            ))}
          </div>
        </Genre>
      </MovieDetails>
    </Container>
  );
}

export default index;
