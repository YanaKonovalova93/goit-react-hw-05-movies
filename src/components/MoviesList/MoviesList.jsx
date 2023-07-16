import { useLocation } from 'react-router-dom';
import { HeaderList, LiContainer, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  const defaultImg = 'https://waterstation.com.tr/img/default.jpg';

  return (
    <HeaderList>
      {data.map(item => (
        <LiContainer key={item.id}>
          <StyledLink
            key={item.id}
            to={`/movies/${item.id}`}
            state={{ from: location }}
          >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${item.poster_path}`
                  : defaultImg
              }
              width={200}
              alt="poster"
            />
            <p>{item.original_title || item.name}</p>
          </StyledLink>
        </LiContainer>
      ))}
    </HeaderList>
  );
};
