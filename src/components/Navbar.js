import React from "react";
import {Link} from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: 'black'}}>
        <nav className="inline-text mt-3 ml-5" style={{fontFamily: '"Bebas Neue", cursive', color: 'whitesmoke', fontSize: '50px'}}>
          <p>Josh Glugatch</p>
        </nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="collapse navbar-collapse mr-5" id="navbarText">
          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact </Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
              
            </li>
          </ul>
          <nav className="px-3" />
        </nav>
      </nav>


  );
}

export default Navbar;


