import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const HeaderBox = styled.header`
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  color: #833308;
  background-color: #c792276e;
  box-shadow: 0px 2px 4px - 1px rgba(0, 0, 0, 0.2), 0px 4px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 80px;
`;

export const NavigLink = styled(NavLink)`
  color: currentColor;
  text-decoration: none;
  font-size: 25px;

  &.active {
    color: orangered;
  }
`;
