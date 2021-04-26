import tmdb from "../../../utils/tmdb";

export default async (req, res) => {
  const { page } = req.query;
  console.log(page);
  try {
    const { data } = await tmdb.get(`/movie/popular`, {
      params: {
        page: page,
      },
    });
    res.status(200).send({ data });
  } catch (error) {
    res.status(400).send({ error });
  }
};
