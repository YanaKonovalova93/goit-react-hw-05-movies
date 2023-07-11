import { Route, Routes } from 'react-router-dom';
// import Cast from 'pages/Cast';
import Home from 'pages/Home';
import MoviesDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
// import Reviews from 'pages/Reviews';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
    </Routes>
  );
};

/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */
