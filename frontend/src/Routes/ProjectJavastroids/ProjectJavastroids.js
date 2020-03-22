import React from 'react';

import javastroids from '../../Visual/Images/javastroids.svg';
import javastroidsCode from '../../Visual/Images/javastroids_code.svg';

import ProjectImage from '../../Components/ProjectImageHandler/ProjectImageHandler';

export default function ProjectJavastroids() {
    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <div className='projects'>
                <a href='https://sgilkes.bcitwebdeveloper.ca/javastroids/index.html'>
                    <img src={ javastroids } alt='Javascript Asteroids' />
                    <h4>See the Live Site!</h4>
                </a>

                <a href='https://github.com/stevecodeguy/JavaStroids'>
                    <img src={ javastroidsCode } alt='Javascript Asteroids Github Code' />
                    <h4>See the Code on Github!</h4>
                </a>
            </div>

            <p>Individual project to create a game using JavaScript. This game was created with HTML Canvas, although that was not a requirement.</p>
            
            <ProjectImage 
                imageData = {['Asteroids', 'JavaScript Asteroids Game']}
            />

            <p>The game is based on the classic Asteroids game. This was my first attempt at developing a game, and I'm quite happy with how it turned out. <br /><br />Please note that the game is designed for PC and uses a keyboard for controls and will not be playable on a phone.</p>
        </div>
    );
}