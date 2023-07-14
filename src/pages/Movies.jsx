// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import { getMoviesByName } from '../services/api'
import { MoviesList } from '../components/MoviesList';
import { FormSubmit } from '../components/FormSubmit';

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
    
    console.log(movieQuery);

    
      
  };

  // const visibleMovie = movies.filter(movie => movie.includes(movieId));

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
     console.log(searchParams);
   }, [searchParams]);

  return (
    // <div>
    //   <input type="text" value={movieId} onChange={updateQueryString} />
    //   <button>Search</button>

    //   {/* {visibleMovie.map(movie => {
    //     return (
    //       <Link key={movie} to={`${movie}`} state={{ from: location }}>
    //         {movie}
    //       </Link>
    //     );
    //   })} */}
    // </div>

    <>
      {/* <form onSubmit={searchMovie}>
        <input type="text" name="search" />
        <button>Search</button>
      </form> */}

      <FormSubmit searchMovie={searchMovie} />

      {movieData && <MoviesList data={movieData} />}
    </>
  );
};

export default Movies;


