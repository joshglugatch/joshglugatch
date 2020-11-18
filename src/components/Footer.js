import React from "react";



function Footer() {
  return (
    <footer className="fixed-bottom footer p1">
    <section className="card width-full" style={{backgroundColor: 'black', borderTop: 'whitesmoke solid 8px', height: '100px'}}>
      <article className="row">
        <div className="card-body container text-center">
          <a href="https://www.linkedin.com/in/joshua-glugatch/" target="_blank"><img src="./assets/linkedinlogo.png" style={{width: '40px', marginRight: '30px', marginLeft: '50px'}} alt="linkedinlogo" /></a>
          <a href="https://github.com/joshglugatch" target="_blank"><img src="./assets/githublogo.png" style={{width: '40px', marginRight: '30px'}} alt="githublogo" /></a>
          <a href="https://www.instagram.com/joshglug/?hl=en" target="_blank"><img src="./assets/instagram.png" style={{width: '40px', marginRight: '30px'}} alt="instagramlogo" /></a>
        </div>
      </article>
    </section>
  </footer>

  );
}

export default Footer;
