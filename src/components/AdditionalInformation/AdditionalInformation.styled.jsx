import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
  :hover,
  :focus {
    color: orangered;
  }
`;

export const StyledList = styled.ul`
  color: currentColor;
  display: flex;
  gap: 50px;

  > li {
    list-style: none;
    font-size: 20px;
  }
`;
