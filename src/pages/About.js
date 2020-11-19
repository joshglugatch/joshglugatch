import React from "react";
import Navbar from "../components/Navbar"
import AboutCard from "../components/AboutCard"
import Footer from "../components/Footer"



class About extends React.Component {

  render() {
    return (
      <>
      <div className="position-absolute w-100">
      <AboutCard/>
      </div>
      
      
      </>
    );
  }
}

export default About;
