import React from "react";
import Navbar from "../components/Navbar"
import ContactCard from "../components/ContactCard"
import Footer from "../components/Footer"



class Contact extends React.Component {

  render() {
    return (
      <>
      <div className="position-absolute w-100">
      <ContactCard/>
      </div>
     
      
      </>
    );
  }
}

export default Contact;
