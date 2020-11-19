import React from "react";
import ContactUs from "./Form"




function ContactCard() {
  return (
    <main className="container mb-5 mt-5">
    <br />
    <br />
    {/* grid begins */}
    <section className="row" style={{marginBottom: '120px'}}>
      <section className="col-sm-12">
        <section className=" col-sm-10 container mt-5 p-4 card-body border bg-white" style={{width: '100%'}}>
          <article className="row">
            <h1 className="px-4" style={{fontWeight: 'bold', fontFamily: '"Bebas Neue"'}}>Contact</h1>
            <div className="ml-2"><img src="./assets/phone-black.png" alt="phone" style={{width: '30px'}} /> (805)217-8127<br /><a href="mailto: joshglugatch@gmail.com" style={{color: 'rgb(46, 46, 46)'}}><img src="./assets/email-black-3.png" alt="email" style={{width: '40px'}} /> joshglugatch@gmail.com </a></div>
          </article>
          <hr />
          <section>
            {/* begin form */}
            <ContactUs/>
            {/* end form */}
          </section>
        </section>
      </section>
      <section className="col-auto" />
    </section>
    {/* grid ends */}
  </main>

  );
}

export default ContactCard;
