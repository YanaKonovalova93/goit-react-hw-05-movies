import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { HeaderList } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesOnHome() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    getMoviesOnHome();
  }, []);

  return (
    <>
      <HeaderList>Trending today</HeaderList>
      {movies && <MoviesList data={movies} />}
    </>
  );
};

export default Home;
