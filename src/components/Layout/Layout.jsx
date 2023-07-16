import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, NavList, NavigLink, HeaderBox } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <HeaderBox>
        <NavList>
          <NavigLink to="/">Home</NavigLink>
          <NavigLink to="/movies">Movies</NavigLink>
        </NavList>
      </HeaderBox>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
