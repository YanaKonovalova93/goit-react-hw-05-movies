import { NavLink, Route, Routes } from 'react-router-dom';
import Cast from 'pages/Cast';
import Home from 'pages/Home';
import MoviesDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/movies/:movieId">MovieDetails</NavLink>
        <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
