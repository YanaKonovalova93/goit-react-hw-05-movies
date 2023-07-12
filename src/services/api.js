import axios from 'axios';

const KEY = '78b03767048a6745695471bf0cbbdec0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${KEY}`);
  const { results } = response.data;

  return results;
};


export const getMoviesById = async (movieId) => {
  const response = await axios.get(`movie/{${movieId}}?api_key=${KEY}`);
  const results  = response.data;

  return results;
};


