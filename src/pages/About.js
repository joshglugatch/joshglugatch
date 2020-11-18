import React from "react";
import Navbar from "../components/Navbar"
import AboutCard from "../components/AboutCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";


class About extends React.Component {

  render() {
    return (
      <>
      <Navbar/>
      <AboutCard/>
      <Footer/>
      </>
    );
  }
}

export default About;
