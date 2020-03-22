import React from 'react';

import pizza from '../../Visual/Images/pizza.svg';
import ProjectImage from '../../Components/ProjectImageHandler/ProjectImageHandler';

export default function ProjectPizzStore() {
    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <div className='projects'>
                <a href='https://pizzeria.bcitwebdeveloper.ca'>
                    <img src={ pizza } alt='Pizza Slice' />
                    <h4>See the Live Site!</h4>
                </a>
            </div>

            <p>Group project to create a pizza store's online store using WordPress. It was required to have a web store for orders, Google maps, and user accounts.</p>
            
            <ProjectImage 
                imageData = {['Pizza', 'Pizza Store WebSite']}
            />

            <p>My primary contribution was to the custom pizza generator which allows you to select igredients for your pie and watch as they get applied to the image for order. This function is fully responsive and will even recalculate if you rotate your phone.</p>
        </div>
    );
}