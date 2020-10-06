import React from 'react';

import wrestling from '../../Visual/Images/wrestling_mini.svg';
import wrestlingCode from '../../Visual/Images/wrestling_mini_code.svg';

import ProjectImage from '../../Components/ProjectImageHandler/ProjectImageHandler';

export default function WorkGym() {
    return (
        <div>
            <h1>Work</h1>
            <hr />
            <div className='projects'>
                <a href='https://www.chilliwackgrappling.club'>
                    <img src={ wrestling } alt='Chilliwack Submission Grappling Club Website' />
                    <h4>See it Live!</h4>
                </a>
                
                <a href='https://github.com/stevecodeguy/chilliwack_grappling'>
                    <img src={ wrestlingCode } alt='Chilliwack Submission Grappling Club Github Code' />
                    <h4>See the Code!</h4>
                </a>
            </div>

            <p>Project for the Chilliwack Submission Grappling Club in BC Canada. This is a brochure site advertising the services, costs and a link to the facebook account for the gym.</p>
            
            <ProjectImage 
                imageData = {['ChilliwackGrappling', 'Chilliwack Submission Grappling Club']}
            />

            <p>This site replaced a simple Wix site and was built with React. The location of the gym was laid out to show the entrance of the gym for prospective students, and a link to Google maps which can link to navigation on a phone.</p>
            <br />
            <p>The official site can be found <a className='vulcan' href='https://www.chilliwackgrappling.club'>here</a>.</p>
        </div>
    );
}