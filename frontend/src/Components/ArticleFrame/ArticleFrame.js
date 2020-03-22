import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './ArticleFrame.css';

import About from '../../Routes/About/About';
import Blog from '../../Routes/Blog/Blog';
import Projects from '../../Routes/Projects/Projects';
import ProjectPizzaStore from '../../Routes/ProjectPizzaStore/ProjectPizzaStore';
import ReachOut from '../../Routes/ReachOut/ReachOut';
import Tech from '../../Routes/Tech/Tech';

import TopZigZag from '../../Visual/Images/zigzag_top.png';
import BottomZigZag from '../../Visual/Images/zigzag_bottom.png';

export default function ArticleFrame() {
    return (
        <div className='centerContent'>
        <img className='zigzags' src={ TopZigZag } alt='Top zig zag' />
            <article>
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
            </article>
            <img className='zigzags' src={ BottomZigZag } alt='Bottom zig zag' />
        </div>
    );
}