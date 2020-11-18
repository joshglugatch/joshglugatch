import React from "react";



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
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <nav className="px-3" />
        </nav>
      </nav>


  );
}

export default Navbar;


