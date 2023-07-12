import { lazy} from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */
