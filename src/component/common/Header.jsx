import React from "react";
// import { Link } from "react-router-dom";
// import { WebRoutes } from "../../routes.jsx";
import { Link as ScrollLink } from 'react-scroll';
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark text-white fixed-top">
        <div className="container-fluid">
        <ScrollLink to="home" smooth={true} duration={500}>
              DummyName
            </ScrollLink>
          {/* <Link className="navbar-brand" to={WebRoutes.HOME}>
            Navbar
          </Link> */}
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
            <div className="navbar-nav d-flex justify-content-around">
              {/* <Link className="nav-link active mx-4" aria-current="page" to={WebRoutes.HOME}>
                Home
              </Link> */}
              <div className="cursor_pointer">
              <ScrollLink  to="home" smooth={true} duration={500} className="nav-link mx-5 " >
              home
              </ScrollLink>
              </div>
            
            
            
              {/* <Link className="nav-link mx-4" to={WebRoutes.ABOUT_US}>
                About
              </Link> */}
              <div className="cursor_pointer">
              <ScrollLink to="about" smooth={true} duration={500} className="nav-link mx-5 pointer">
              About
            </ScrollLink>
              </div>
             
           
            
              {/* <Link className="nav-link mx-4" to={WebRoutes.SERVICES}>
                Services
              </Link> */}
              <div className="cursor_pointer">
              <ScrollLink to="services" smooth={true} duration={500} className="nav-link mx-5 pointer">
              Services
            </ScrollLink>
              </div>
          
          
         
            </div>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default Header;
