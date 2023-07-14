import axios from 'axios';

const KEY = '78b03767048a6745695471bf0cbbdec0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${KEY}`);
  const { results } = response.data;

  return results;
};


export const getMoviesById = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  const results  = response.data;
  return results;
};


export const getReviewsById = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
    const { results } = response.data;
  return results;
};

export const getCastById = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  const results = response.data;
  return results;
};

export const getMoviesByName = async (query) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}`
  );
    const { results } = response.data;
  return results;
};
