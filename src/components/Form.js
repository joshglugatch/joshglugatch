import React from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() {
    

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('glugatch', 'template_p478d3o', e.target, 'user_F1X9gPsuTBXk3bILxu0tD')
      .then((result) => {
          console.log(result.text);
            e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>


            <input type="hidden" name="contact_number"/>
              <article className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input name="name" type="text" className="form-control" placeholder="Name" />
              </article>
              <article className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input name="email" type="email" className="form-control" placeholder="Email" />
              </article>
              <article className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea name="message" className="form-control" style={{overflowY: 'scroll', height: '115px', resize: 'none'}} rows={6} defaultValue={""} />
              </article>
              <button type="submit" value="send" className="btn btn-primary btn-lg" style={{backgroundColor: 'black'}}>Submit</button>
            
     
    </form>
  );
}