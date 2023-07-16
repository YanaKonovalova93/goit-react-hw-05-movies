import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const ButtonGoBack = styled(Link)`
  text-decoration: none;
  color: currentColor;
  font-size: 20px;
  padding: 10px;
  display: block;

  :hover,
  :focus {
    color: orangered;
  }
`;
