import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import NavBurger from './Navigation/NavBurger/NavBurger';
import SlideNav from './Navigation/SlideNav/SlideNav';
import ArticleFrame from './Components/ArticleFrame/ArticleFrame';

function App() {
  const [showNav, setShowNav] = useState('initial');
  const [winWidth, setWinWidth] = useState(window.innerWidth);

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
      document.documentElement.scrollTop = 0;
    });
  }, [showNav]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWinWidth(window.innerWidth);
      setShowNav('activeSlide');
    });
  }, [winWidth]);

  function openCloseSlideMenu(){
    if (winWidth < 600) {
      if (showNav === 'hideSlide' || showNav === 'initial'){
        setShowNav('activeSlide');
      } 
      if (showNav === 'activeSlide'){
        setShowNav('hideSlide');
      }
    }
  }

  return (
    <>
      <div className='navContainer'>
        <NavBurger openCloseSlideMenu={ openCloseSlideMenu }/>
      </div>

      <Router >

        <SlideNav 
          showNav={ showNav }
          openCloseSlideMenu={ openCloseSlideMenu }
        />

        <ArticleFrame />

      </Router>
    </>
  );
}



export default App;
