import { useState, useEffect } from "react";
import { getTrendingMovies } from '../services/api';
import {MoviesList} from '../components/MoviesList'

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

      async function getMoviesOnHome() {
      
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error)
      } 
    }

 getMoviesOnHome();
  }, [])

    return (
      <>
        <h1>Trending today</h1>
        {movies && <MoviesList data={movies} />}
      </>
    );

}


export default Home;
