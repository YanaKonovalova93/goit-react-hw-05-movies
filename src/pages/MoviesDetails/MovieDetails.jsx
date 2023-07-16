import { useRef, Suspense, useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesById } from '../../services/api';
import { CardBox, ButtonGoBack } from './MoviesDetails.styled';
import { AdditionalInformation } from '../../components/AdditionalInformation/AdditionalInformation';

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState('');
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
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonGoBack to={backLinkLocationRef.current}>
          ←Go to back
        </ButtonGoBack>
        {movieData && (
          <CardBox>
            <div>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultImg
                }
                width={350}
                alt="poster"
              />
            </div>

            <div>
              {' '}
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
          </CardBox>
        )}
        <AdditionalInformation />
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
