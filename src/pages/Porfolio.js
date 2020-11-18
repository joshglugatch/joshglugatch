import React from "react";
import Navbar from "../components/Navbar"
import PortfolioCard from "../components/PortfolioCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";


class Portfolio extends React.Component {

  render() {
    return (
      <>
      <Navbar/>
      <PortfolioCard/>
      <Footer/>
      </>
    );
  }
}

export default Portfolio;
