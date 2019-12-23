import React from 'react';

import './Background.css';

import Ocean from '../Images/Ocean.jpg'
import Wave from '../Images/center_wave.svg';

export default function Background() {
    return (
        <div className='background'>
            <img className='ocean' src={ Ocean } alt='Background Ocean View' />
            <div className='waveContainer'>
                <img src={ Wave } alt='White wave over Ocean' />
            </div>
        </div>
    );
}