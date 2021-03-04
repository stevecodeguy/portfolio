import React from 'react';

import pizza from '../../Visual/Images/pizza.svg';
import pizzaCode from '../../Visual/Images/pizza_code.svg';

import ProjectImage from '../../Components/ProjectImageHandler/ProjectImageHandler';

export default function ProjectPizzStore() {
    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <div className='projects'>
                <a href='https://pizza.stevecodeguy.com'>
                    <img src={ pizza } alt='Pizza Slice' />
                    <h4>See it Live!</h4>
                </a>
                
                <a href='https://github.com/stevecodeguy/Pizzeria'>
                    <img src={ pizzaCode } alt='Pizzeria Github Code' />
                    <h4>See the Code!</h4>
                </a>
            </div>

            <p>Group project to create a pizzeria's online store using WordPress. It was required to have a web store for orders, Google maps, and user accounts.</p>
            
            <ProjectImage 
                imageData = {['Pizza', 'Pizza Store WebSite']}
            />

            <p>My primary contribution was to the custom pizza generator which allows you to select ingredients for your pie and watch as they get applied to the image for order. This function is fully responsive and will even recalculate if you rotate your phone.</p>
        </div>
    );
}