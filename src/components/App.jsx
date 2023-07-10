import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink>HomePage</NavLink>
      </nav>
      <Routes>
<Route path="/" element={<div>HomePage</div>}/>
      </Routes>
    </div>
  );
};
