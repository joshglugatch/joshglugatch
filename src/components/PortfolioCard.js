import React from "react";



function Navbar() {
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
                <figure className="col-lg-4"><p style={{fontFamily: '"Bebas Neue"', fontSize: '24px'}}>PetSpace <a href="https://github.com/joshglugatch/PetSpace" target="_blank"><img src="./assets/github-logo-black.png" alt="repository" style={{width: '25px', marginLeft: '10px'}} /></a></p><a href="https://petspace2020.herokuapp.com/" target="_blank"><img src="./assets/FilteredPets.gif" alt="petSpace" className="float-left img-thumbnail p-0" /></a></figure>
                <figure className="col-lg-4"><p style={{fontFamily: '"Bebas Neue"', fontSize: '24px'}}>o'Clocktail <a href="https://github.com/joshglugatch/o-clocktail" target="_blank"><img src="./assets/github-logo-black.png" alt="repository" style={{width: '25px', marginLeft: '10px'}} /></a></p><a href="https://joshglugatch.github.io/o-clocktail/" target="_blank"><img src="./assets/oclocktaildemo.png" alt="o-clocktail" className="float-left img-thumbnail p-0" /></a></figure>
                <figure className="col-lg-4"><p style={{fontFamily: '"Bebas Neue"', fontSize: '24px'}}>Eat-Da-Burger<a href="https://github.com/joshglugatch/Eat-Da-Burger" target="_blank"><img src="./assets/github-logo-black.png" alt="repository" style={{width: '25px', marginLeft: '10px'}} /></a></p><a href="https://eat-da-burger-yum.herokuapp.com/" target="_blank"><img src="./assets/eat-da-burger-screenshot.png" alt="burgerapp" className="float-left img-thumbnail p-0" /></a></figure>
                <figure className="col-lg-4"><p style={{fontFamily: '"Bebas Neue"', fontSize: '24px'}}>Avatar Memory Game<a href="https://joshglugatch.github.io/Team-Avatar-Clicky-Game/" target="_blank"><img src="./assets/github-logo-black.png" alt="repository" style={{width: '25px', marginLeft: '10px'}} /></a></p><a href="https://joshglugatch.github.io/Team-Avatar-Clicky-Game/" target="_blank"><img src="./assets/clickgamedemo.gif" alt="clickgame" className="float-left img-thumbnail p-0" /></a></figure>
                <figure className="col-lg-4"><p style={{fontFamily: '"Bebas Neue"', fontSize: '24px'}}>Weather Dashboard<a href="https://github.com/joshglugatch/weather-dashboard-page" target="_blank"><img src="./assets/github-logo-black.png" alt="repository" style={{width: '25px', marginLeft: '10px'}} /></a></p><a href="https://joshglugatch.github.io/weather-dashboard-page/" target="_blank"><img src="./assets/weatherdemo.png" alt="weatherapp" className="float-left img-thumbnail p-0" /></a></figure>
                <figure className="col-lg-4"><p style={{fontFamily: '"Bebas Neue"', fontSize: '24px'}}>Day Planner<a href="https://github.com/joshglugatch/day-planner" target="_blank"><img src="./assets/github-logo-black.png" alt="repository" style={{width: '25px', marginLeft: '10px'}} /></a></p><a href="https://joshglugatch.github.io/day-planner/" target="_blank"><img src="./assets/dayscheduledemo.png" alt="dayplanner" className="float-left img-thumbnail p-0" /></a></figure>
              </section>
            </section>
          </section>
        </section>
        <section className="col-sm-1" />
        {/* grid ends */}
      </main>

  );
}

export default Navbar;


