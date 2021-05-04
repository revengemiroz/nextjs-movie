import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import MovieDetails from "../../components/MovieDetails";
import ErrorRecommended from "../../components/ErrorRecommended";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";

import { SwitchContext } from "../../context/SwitchContext";

import { useGetTvShowDetails } from "../api/tv/useQuery/useGetTvShowDetails";
import { useGetRecommendedTvShows } from "../api/tv/useQuery/useGetRecommendedTvShows";
import { useGetTvShowTrailer } from "../api/tv/useQuery/useGetTvShowTrailer";
import { useGetTvShowCast } from "../api/tv/useQuery/useGetTvShowCast";

import useWindowResize from "../../utils/useWindowResize";

function index(props) {
  const [page, setPage] = useState(1);
  const [tvId, setTvId] = useState();
  const router = useRouter();
  const size = useWindowResize();
  const { checked, value } = useContext(SwitchContext);

  useEffect(() => {
    if (!router.isReady) return;
    setTvId(router.query.tvId);
  }, [router.isReady, router.query.tvId]);

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
    });
  }, [page]);

  const { data: tvDetails } = useGetTvShowDetails(tvId);

  const { data: tvRecommendation } = useGetRecommendedTvShows(tvId, page);

  const { data: tvShowTrailer } = useGetTvShowTrailer(tvId);

  const { data: tvShowCast } = useGetTvShowCast(tvId);

  return (
    <Layout headTitle={tvDetails?.name}>
      <div>
        {size.width > 1280 && <SearchBar />}
        <MovieDetails
          movieDetails={tvDetails}
          cast={tvShowCast}
          videos={tvShowTrailer}
        />
        <Header mainText="recommended" subText="tv shows" />
        {tvRecommendation?.results?.length > 0 && (
          <>
            <MovieList movies={tvRecommendation} />
            <Pagination
              moviesData={tvRecommendation}
              onClick={setPage}
              movieId={tvId}
            />
          </>
        )}
        {tvRecommendation?.results?.length == 0 && <ErrorRecommended />}
      </div>
    </Layout>
  );
}

export default index;
