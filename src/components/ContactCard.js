import React from "react";




function AboutCard() {
  return (
    <main className="container mb-5 mt-5">
    <br />
    <br />
    {/* grid begins */}
    <section className="row" style={{marginBottom: '120px'}}>
      <section className="col-sm-12">
        <section className=" col-sm-10 container mt-5 p-4 card-body border bg-white" style={{width: '100%'}}>
          <article className="row">
            <h1 className="px-3" style={{fontWeight: 'bold', fontFamily: '"Bebas Neue"'}}>Contact</h1>
            <div className="ml-2"><img src="./assets/phone-black.png" alt="phone" style={{width: '30px'}} /> (805)217-8127<br /><a href="mailto: joshglugatch@gmail.com" style={{color: 'rgb(46, 46, 46)'}}><img src="./assets/email-black-3.png" alt="email" style={{width: '40px'}} /> joshglugatch@gmail.com </a></div>
          </article>
          <hr />
          <section>
            {/* begin form */}
            <form>
              <article className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input type="text" className="form-control" placeholder="Name" />
              </article>
              <article className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" placeholder="Email" />
              </article>
              <article className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" style={{overflowY: 'scroll', height: '115px', resize: 'none'}} rows={6} defaultValue={""} />
              </article>
              <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor: 'black'}}>Submit</button>
            </form>
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

export default AboutCard;
