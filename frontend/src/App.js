import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Background from './Visual/Background/Background';
import NavBurger from './Navigation/NavBurger/NavBurger';
import SlideNav from './Navigation/SlideNav/SlideNav';
import About from './Routes/About/About';
import Blog from './Routes/Blog/Blog';
import Projects from './Routes/Projects/Projects';
import ReachOut from './Routes/ReachOut/ReachOut';
import Tech from './Routes/Tech/Tech';

function App() {
  const [showNav, setShowNav] = useState('initial');

  useEffect(() => {
    const root = document.getElementById('root');
    root.addEventListener('click', (event) => {
      if(!document.getElementById('slideNav').contains(event.target)
        && !document.getElementsByClassName('burgerBox')[0].contains(event.target)
      ){
        if(showNav === 'activeSlide'){
          setShowNav('hideSlide');
        }
      }
    });
  }, [showNav]);

  function openCloseSlideMenu(){
    if (showNav === 'hideSlide' || showNav === 'initial'){
        setShowNav('activeSlide');
    } 
    if (showNav === 'activeSlide'){
        setShowNav('hideSlide');
    }
  }

  return (
    <>
      <Background />
      <div className='navContainer'>
        <NavBurger openCloseSlideMenu={ openCloseSlideMenu }/>
      </div>

      <Router >

        <SlideNav 
          showNav={ showNav }
          openCloseSlideMenu={ openCloseSlideMenu }
        />

        <Switch>

          <Route exact path='/'>
            <About />
          </Route>

          <Route path='/blog'>
            <Blog />
          </Route>

          <Route path='/project'>
            <Projects />
          </Route>

          <Route path='/contact'>
            <ReachOut />
          </Route>

          <Route path='/tools'>
            <Tech />
          </Route>

        </Switch>
      </Router>
    </>
  );
}



export default App;
