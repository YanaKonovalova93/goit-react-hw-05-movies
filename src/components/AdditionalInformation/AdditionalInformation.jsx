import { StyledLink, StyledList } from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <>
      <h2> Additional information</h2>
      <StyledList>
        <li>
          <StyledLink key={'cast'} to="cast">
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink key={'reviews'} to="reviews">
            Reviews
          </StyledLink>
        </li>
      </StyledList>
    </>
  );
};
