// import { List } from '../../pages/Home/Home.styled';

import { Link, useLocation } from 'react-router-dom';


export const MoviesList = ({ data }) => {
    const location = useLocation();
    


    
  return (
    <ul>
      {data.map(item => (
        
          <Link
            key={item.id}
            to={`/movies/${item.id}`}
            state={{ from: location }}
          >
            {item.original_title || item.name}
          </Link>
       
      ))}
    </ul>
  );
};


