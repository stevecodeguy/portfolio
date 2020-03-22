import React from 'react';

import './ProjectPizzaStore.css';

import pizza from '../../Visual/Images/pizza.svg';
import javastroids from '../../Visual/Images/javastroids.svg';
import vulcan from '../../Visual/Images/vulcan.svg';

export default function ProjectPizzStore() {
    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <article className='projects'>
                <a href='https://pizzeria.bcitwebdeveloper.ca'>
                    <img src={ pizza } alt='Pizza Slice' />
                    <h4>Pizza Store</h4>
                </a>
            </article>
        </div>
    );
}