import React from 'react';

import './Background.css';

import Wave from '../Images/center_wave.png';

export default function Background() {
    return (
        <div className='waveContainer'>
            <img src={ Wave } alt='White wave over Ocean' />
        </div>
    );
}