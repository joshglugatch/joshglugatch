import React from "react";




function AboutCard() {
  return (
    <main className="container mb-5 mt-5">
        <br />
        <br />
        {/* grid begins */}
        <section className="row">
          <section className="col-auto justify-content-center">
            <section className="container mt-5 mb-5 p-5 card-body border bg-white" style={{width: '100%'}}>
              <article className="row">
                <h1 className="px-3" style={{fontWeight: 'bold', fontFamily: '"Bebas Neue"'}}>
                  About Me</h1>
              </article>
              <hr />
              <section className="row">
                <figure className="col-md-6"><img src="./assets/profilepic.jpg" alt="Picture of Josh" className="img-thumbnail" style={{width: '350px', margin: 'auto', display: 'block'}} /></figure>
                <article className="col-md-6">
                  <p>
                    Thanks for visiting my web page! My name is Josh and I am an aspiring web developer. I am currently enrolled in UC Berkeley's Coding Boot Camp for full stack web development. 
                    My recent projects can be found on the Portfolio page along with a deployed link and repository link. I am a quick learner and have always excelled in whatever I put my mind to.
                    I live in the Los Angeles area but am willing to relocate. I graduated from UC Santa Barbara in 2017 with a BA in Global Studies. 
                    Since then I worked for almost 3 years for Warner Bros. Telepictures as a technical director/broadcast engineer for a film studio mostly working on DC Comics related content.
                    I also worked as a foley artist for a feature called "Mine 9" and was voice talent for the feature "Sharknado 5: Global Swarming".
                    <br />
                    <br />
                    I am an experienced musician and play many instruments. I also enjoy photography and videography. 
                    Check out my Instagram linked in the footer to see a little more about my music and photography.
                  </p>
                  <a href="./assets/Glugatch-Resume.pdf" style={{color: 'rgb(46, 46, 46)', fontWeight: 'bold'}} target="_blank">Check out my resume.</a>
                  <br />
                </article>
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
