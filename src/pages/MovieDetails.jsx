import { useParams, Link, Outlet, useLocation} from "react-router-dom";
// import { useEffect } from 'react';


const MoviesDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
//   console.log(movieId);

//       useEffect(() => {
//   // /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
//   // /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
//       });

    return (
      <>
            <h1>MoviesDetails: {movieId}</h1>
            <Link to={location.state.from}>Back to Home</Link>
        <ul>
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
        <Outlet />
      </>
    );
};

export default MoviesDetails;
