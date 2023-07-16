import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../services/api';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [castData, setCastData] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function castById() {
      try {
        const data = await getCastById(movieId);
        setCastData(data);
      } catch (error) {
        alert(error.message);
      }
    }

    castById();
  }, [movieId]);

  const defaultImg =
    'https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg';

  return (
    <>
      {castData && (
        <CastList>
          {castData.cast.slice(0, 9).map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${item.profile_path}`
                    : defaultImg
                }
                width={200}
                alt="poster"
              />
              <h3>Actor/Actress: {item.name}</h3>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
