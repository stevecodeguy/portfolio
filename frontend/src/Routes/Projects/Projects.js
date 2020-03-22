import React from 'react';

import './Projects.css';

import pizza from '../../Visual/Images/pizza.svg';
import javastroids from '../../Visual/Images/javastroids.svg';
import vulcan from '../../Visual/Images/vulcan.svg';

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <article className='projects'>
                <a href='https://pizzeria.bcitwebdeveloper.ca'>
                    <img src={ pizza } alt='Pizza Slice' />
                    <h4>Pizza Store</h4>
                </a>
                <a href='#'>
                    <img src={ javastroids } alt='Java Asteroids' />
                    <h4>Java Asteroids</h4>
                </a>
                <a href='#'>
                    <img src={ vulcan } alt='Vulcan' />
                    <h4>Vulcan Industrial</h4>
                </a>
            </article>
        </div>
    );
}