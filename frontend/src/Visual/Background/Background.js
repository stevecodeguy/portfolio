import React from 'react';

import './Background.css'
import BackgroundTop from '../../Images/top_wave.svg';
import BackgroundBottom from '../../Images/bottom_wave.svg';

export default function Background() {
    return (
        <>
        <div className='backgroundTop'>
            <div>
                <img src={ BackgroundTop } alt='Background top wave' />
            </div>
        </div>
        <div className='backgroundBottom'>
            <div>
                <img src={ BackgroundBottom } alt='Background bottom wave' />
            </div>
        </div>
        </>
    );
}