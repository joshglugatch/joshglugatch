import React from "react";

import PortfolioCard from "../components/PortfolioCard"




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
