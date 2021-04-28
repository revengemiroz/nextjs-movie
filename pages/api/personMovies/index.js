//Tips: go to localhost:3000/api/popular and see the api response

import tmdb from "../../../utils/tmdb";

export default async (req, res) => {
  const { page, sort_by, with_people } = req?.query;

  try {
    const { data } = await tmdb.get(`/discover/movie/`, {
      params: {
        page: page,
        sort_by: sort_by,
        with_people: with_people,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
