import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img
          src="https://gamehag.com/img/games/logo/lineage-2-helios.png"
          alt="Lineage II Logo"
        />
      </div>
      <nav className="nav-links">
        <div>
          <Link to="/homepage">Homepage</Link>
        </div>
        <div>
          <Link to="/downloads">Downloads</Link>
        </div>
        <div>
          <Link to="/game-info">Game Info</Link>
        </div>
        <div>
          <Link to="/community">Community</Link>
        </div>
      </nav>
      <div className="nav-button">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
