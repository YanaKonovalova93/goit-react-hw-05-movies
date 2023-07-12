import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getCastById} from '../services/api'

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

  return (
    <>
      {castData && (
        <div>
          <ul>
            {castData.cast.slice(0, 9).map(item => (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                  alt=""
                />
                <h3>Actor/Actress: {item.name}</h3>
                <p>Character: {item.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cast;
