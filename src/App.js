import React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {useTransition, animated } from "react-spring"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Porfolio";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"





function App() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from:{ opacity : 0, transform: "translate(100%,0)"},
    enter:{opacity : 1, transform: "translate(0%,0)"},
    leave:{opacity : 0, transform: "translate(-50%,0)"}
  })
  return (
    
    <>
      <Navbar/>
      <div>
       {transitions.map(({item,props,key})=> (
         <animated.div key={key} style={props}>
           <Switch location={item}>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
         </animated.div>
       ))}
        
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
