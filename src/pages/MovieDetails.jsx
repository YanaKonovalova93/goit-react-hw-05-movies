import { useRef, Suspense, useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation} from "react-router-dom";
import { getMoviesById } from '../services/api';


const MoviesDetails = () => {
  const [movie, setMovie] = useState('');
    const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

 

 useEffect(() => {
   async function movieById() {
     try {
       const data = await getMoviesById(movieId);
       setMovie(data);
     } catch (error) {
       console.log(error);
     }
   }

   movieById();
 }, [movieId]);


    return (
      <>
        {' '}
        {movie && <div>movie</div>}
        <h1>MoviesDetails: {movieId}</h1>
        <Link to={backLinkLocationRef.current}>Go to back</Link>
        <ul>
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
};

export default MoviesDetails;
