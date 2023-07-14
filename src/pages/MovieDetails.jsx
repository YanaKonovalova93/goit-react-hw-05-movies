import { useRef, Suspense, useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation} from "react-router-dom";
import { getMoviesById } from '../services/api';


const MoviesDetails = () => {
  const [movieData, setMovieData] = useState('');
  // const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');


  useEffect(() => {
    async function movieById() {
      try {
        const data = await getMoviesById(movieId);
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    }

    movieById();
  }, [movieId]);

  const userScore = (movieData.vote_average * 10).toFixed(0);
  const { poster_path, original_title, overview, genres } = movieData;
  const defaultImg = 'https://waterstation.com.tr/img/default.jpg';
  return (
    <>
      ←<Link to={backLinkLocationRef.current}>Go to back</Link>
      {movieData && (
        <div>
          {/* <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={name}
            /> */}

          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />

          <h1>{original_title}</h1>
          <p>User Score: {userScore} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
     
        <h2> Additional information</h2 >
          <ul>
            <li>
              <Link key={'cast'} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link key={'reviews'} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>


        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
};

export default MoviesDetails;
