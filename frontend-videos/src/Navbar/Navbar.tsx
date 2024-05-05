import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4"> {/* Añade un margen inferior */}
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Favorite Videos
        </Link>
        <div className="ml-auto"> {/* Empuja el enlace a la derecha */}
          <Link className="btn btn-light" to="/new-video">Create a New Video</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
