import React from "react";
import Navbar from "../components/Navbar"
import ContactCard from "../components/ContactCard"
import Footer from "../components/Footer"



class Contact extends React.Component {

  render() {
    return (
      <>
      <Navbar/>
      <ContactCard/>
      <Footer/>
      </>
    );
  }
}

export default Contact;
