import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      
            </nav>
            </header>
            
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
              
            </main>
            
        </div>
    
  );
};

export default Layout;



  /* <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink> */
