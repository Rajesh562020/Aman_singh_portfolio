import React from "react";
import { Link } from "react-router-dom";
import { WebRoutes } from "../../routes.jsx";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={WebRoutes.HOME}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active mx-4" aria-current="page" to={WebRoutes.HOME}>
                Home
              </Link>
              <Link className="nav-link mx-4" to={WebRoutes.ABOUT_US}>
                About
              </Link>
              <Link className="nav-link mx-4" to={WebRoutes.SERVICES}>
                Services
              </Link>
            </div>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default Header;
