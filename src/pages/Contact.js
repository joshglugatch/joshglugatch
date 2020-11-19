import React from "react";

import ContactCard from "../components/ContactCard"




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
