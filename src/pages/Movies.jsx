import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from '../services/api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { FormSubmit } from '../components/FormSubmit/FormSubmit';

const Movies = () => {
  const [movieData, setMovieData] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovie = event => {
    event.preventDefault();

    const movieQuery = event.target.search.value;
    setSearchParams({ movieQuery });

    event.target.search.value = '';

    if (movieQuery === '') {
      return setSearchParams({});
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams.get('movieQuery');
      if (!query) return;
      try {
        const data = await getMoviesByName(query);
        if (data.length < 1) {
          alert('Sorry...We found nothing');
          return;
        }

        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <>
      <FormSubmit searchMovie={searchMovie} />

      {movieData && <MoviesList data={movieData} />}
    </>
  );
};

export default Movies;
