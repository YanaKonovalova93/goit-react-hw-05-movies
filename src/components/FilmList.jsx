
import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <Link
            to={`/movies/${item.id}`}
            key={item.id}
            state={{ from: location }}
          >
            {item.original_title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
