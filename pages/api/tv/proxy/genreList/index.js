import tmdb from "../../../../../utils/tmdb";

export default async (req, res) => {
  try {
    const { data } = await tmdb.get(`/genre/tv/list;`);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
};
