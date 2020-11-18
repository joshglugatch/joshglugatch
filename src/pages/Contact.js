import React from "react";
import Navbar from "../components/Navbar"
import Contact from "../components/ContactCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";


class About extends React.Component {

  render() {
    return (
      <>
      <Navbar/>
      <Contact/>
      <Footer/>
      </>
    );
  }
}

export default About;
