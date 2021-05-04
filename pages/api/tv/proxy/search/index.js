import tmdb from "../../../../../utils/tmdb";

export default async (req, res) => {
  const { query, page } = req?.query;
  try {
    const { data } = await tmdb.get(`/search/tv`, {
      params: {
        query,
        page,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
