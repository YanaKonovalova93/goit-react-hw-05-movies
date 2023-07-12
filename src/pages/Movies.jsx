// import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {

    const [movies, setMovies] = useState([
      'movie-1',
      'movie-2',
      'movie-3',
      'movie-4',
    ]);

    const location = useLocation();
  //     useEffect(() => {
  // // /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
  // // /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
  // // /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
  // // /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
  //     });
    
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId') ?? '';;

    const updateQueryString = event => {
        const movieIdValue = event.target.value;
        if (movieIdValue === '') {
          return setSearchParams({});
        }

          setSearchParams({ movieId: movieIdValue });
    //   const nextParams = name !== '' ? { name } : {};
    //   setSearchParams(nextParams);
    };

    const visibleMovie = movies.filter(movie => movie.includes(movieId));

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      {visibleMovie.map(movie => {
        return (
            <Link key={movie} to={`${movie}`} state={{ from: location }}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
