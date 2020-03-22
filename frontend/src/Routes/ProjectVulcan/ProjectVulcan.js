import React from 'react';

import vulcan from '../../Visual/Images/vulcan.svg';
import vulcanCode from '../../Visual/Images/vulcan_code.svg';

import ProjectImage from '../../Components/ProjectImageHandler/ProjectImageHandler';

export default function ProjectVulcan() {
    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <div className='projects'>
                <a href='https://sgilkes.bcitwebdeveloper.ca/vulcan/index.html'>
                    <img src={ vulcan } alt='Vulcan Website' />
                    <h4>See the Live Site!</h4>
                </a>
                
                <a href='https://github.com/stevecodeguy/Vulcan'>
                    <img src={ vulcanCode } alt='Vulcan Github Code' />
                    <h4>See the Code on Github!</h4>
                </a>
            </div>

            <p>Team project to recreate an existing web site as accurately as possible. The site is for a real life Wastewater Screen manufacturer.</p>
            
            <ProjectImage 
                imageData = {['Vulcan', 'Vulcan Wastewater Screens']}
            />

            <p>The original site was not disclosed to our team and we had to recreate it from screen captured images. The finished site was almost exactly the same as the official site, even though we had approached styling differently than the original.</p>
            <br />
            <p>The official site can be found <a className='vulcan' href='https://vulcanindustries.com'>here</a>, although the look has changed slightly since our project to emulate it.</p>
        </div>
    );
}