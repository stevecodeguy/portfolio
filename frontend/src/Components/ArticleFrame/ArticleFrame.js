import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './ArticleFrame.css';
import '../../Routes/Projects/Projects.css';

import About from '../../Routes/About/About';
import Blog from '../../Routes/Blog/Blog';
import ProjectPizzaStore from '../../Routes/ProjectPizzaStore/ProjectPizzaStore';
import ProjectJavastroids from '../../Routes/ProjectJavastroids/ProjectJavastroids';
import ProjectVulcan from '../../Routes/ProjectVulcan/ProjectVulcan';
import WorkGym from '../../Routes/Work/WorkGym';
import ReachOut from '../../Routes/ReachOut/ReachOut';
import Tech from '../../Routes/Tech/Tech';

import TopZigZag from '../../Visual/Images/zigzag_top.png';
import BottomZigZag from '../../Visual/Images/zigzag_bottom.png';
import Logo from '../../Visual/Images/darkBlueLogo2.svg';


export default function ArticleFrame() {
    return (
        <div className='centerContent'>
        <img className='zigzags' src={ TopZigZag } alt='Top zig zag' />
            <article>
            <div id='logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <Switch>

                <Route exact path='/'>
                    <About />
                </Route>

                <Route path='/blog'>
                    <Blog />
                </Route>

                <Route path='/project/pizza'>
                    <ProjectPizzaStore />
                </Route>

                <Route path='/project/javastroids'>
                    <ProjectJavastroids />
                </Route>

                <Route path='/project/vulcan'>
                    <ProjectVulcan />
                </Route>

                <Route path='/work'>
                    <WorkGym />
                </Route>

                <Route path='/contact'>
                    <ReachOut />
                </Route>

                <Route path='/tools'>
                    <Tech />
                </Route>

            </Switch>
            </article>
            <img className='zigzags' src={ BottomZigZag } alt='Bottom zig zag' />
        </div>
    );
}