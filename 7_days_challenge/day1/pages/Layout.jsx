import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    // const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog d</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/todo">Todo App</Link>
          </li>
        </ul>
      </nav>
         
      <Outlet/>
      
    </>
  );
}

export default Layout;
