import React from 'react';

import './NavBurger.css';

export default function NavBurger(props){
    return (
        <button 
            onClick={() => props.openCloseSlideMenu()} className='burgerBox'
        >
            <hr />
            <hr />
            <hr />
        </button>
    );
}