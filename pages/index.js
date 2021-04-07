import Head from "next/head";
import styles from "../styles/Home.module.css";
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

export default function Home({ ninjas }) {
  const { data, isLoading, error } = useQuery("fetch", fetchData, {
    initialData: ninjas,
  });

  console.log(data);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {data?.map((user) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  );
}
