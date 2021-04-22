import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e9f2990250f1310ec6a644a89b5a2053&language=en-US&page=1"
  );
  const data = await res.json();
  return data?.results;
};

export async function getStaticProps() {
  const data = await fetchData();
  return { props: { ninjas: data } };
}

function home({ ninjas }) {
  const { data } = useQuery("getMovies", fetchData);
  console.log(data, "this is data");

  return <div>this is home page</div>;
}

export default home;
