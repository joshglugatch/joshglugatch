import React from "react";
import Navbar from "../components/Navbar"
import PortfolioCard from "../components/PortfolioCard"
import Footer from "../components/Footer"



class Portfolio extends React.Component {

  render() {
    return (
      <>
      <div className="position-absolute w-100">
        <PortfolioCard/>
      </div>
     
     
      </>
    );
  }
}

export default Portfolio;
