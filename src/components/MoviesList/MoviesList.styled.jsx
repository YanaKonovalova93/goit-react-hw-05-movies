import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 200px));
  grid-gap: 50px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const LiContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`;
