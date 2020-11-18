import React from "react";
import Projects from "../projects.json"


function PortfolioCard() {
  return (
    <main className="container-fixed mt-4 mb-4">
        <br />
        <br />
        {/* grid begins */}
        <section className="row">
          <section className="col-sm-1" />
          <section className="col-sm-10">
            <section className="container mt-5 mb-4 pb-1 pt-4 pl-4 pr-4 card border bg-white" style={{width: '100%', height: '96%'}}>
              <article className="row">
                <h1 className="pl-3 mb-0" style={{fontWeight: 'bold', fontFamily: '"Bebas Neue"'}}>Portfolio</h1>
              </article>
              <p style={{fontSize: '10px'}}>*Not all projects supported on mobile devices</p>
              <hr />
              <section className="row mb-4">

                    {Projects.map(project=>{
                        return(
                <figure className="col-lg-4"><p style={{fontFamily: '"Bebas Neue"', fontSize: '24px'}}>{project.title} <a href={project.repo} rel="noreferrer" target="_blank">
                <img src="./assets/github-logo-black.png" alt="" style={{width: '25px', marginLeft: '10px'}} /></a></p>
                <a href={project.deploy} rel="noreferrer" target="_blank">
                <img src={project.image} alt={project.title} className="float-left img-thumbnail p-0" /></a></figure>
                        )

                    })}
               
              </section>
            </section>
          </section>
        </section>
        <section className="col-sm-1" />
        {/* grid ends */}
      </main>

  );
}

export default PortfolioCard;


