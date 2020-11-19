import React from "react";
import {NavLink} from "react-router-dom";



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
              <NavLink className="nav-link" to="/contact" activeClassName="nav-link active">Contact </NavLink>
            </li>
            <li className="nav-item">
             <NavLink className="nav-link" to="/portfolio" activeClassName="nav-link active">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="nav-link active">About</NavLink>
              
            </li>
          </ul>
          <nav className="px-3" />
        </nav>
      </nav>


  );
}

export default Navbar;


