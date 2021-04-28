//Tips: go to localhost:3000/api/popular and see the api response

import tmdb from "../../../utils/tmdb";

export default async (req, res) => {
  const { personId } = req?.query;
  try {
    const { data } = await tmdb.get(`/person/${personId}`);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
