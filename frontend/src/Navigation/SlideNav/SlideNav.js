import React from 'react';
import { NavLink } from 'react-router-dom';

import './SlideNav.css';

function SlideNav(props) {
    return (
        <nav 
            id='slideNav' 
            className={props.showNav} 
            >
            <ul>
                <p>About</p>
                <li>
                    <NavLink 
                        activeClassName="selected" 
                        to="/"
                        onClick={() => props.openCloseSlideMenu()}
                    >Introduction</NavLink>
                </li>
                {/* {['Introduction', 'Blog'].map((index, key) => {
                    return (
                        <li key={key}>
                            <NavLink 
                                exact 
                                activeClassName="selected" 
                                to={ "/" + (index === 'Introduction' ? '' : index.toLowerCase()) }
                                onClick={() => props.openCloseSlideMenu()}
                            >{index}</NavLink>
                        </li> 
                    )
                })} */}
                <hr />
                <p>Projects</p>
                {['Pizza', 'Javastroids', 'Vulcan'].map((index, key) => {
                    return (
                        <li key={key}>
                            <NavLink 
                                exact 
                                activeClassName="selected" 
                                to={ "/project/" + index.toLowerCase() }
                                onClick={() => props.openCloseSlideMenu()}
                            >{index}</NavLink>
                        </li> 
                    )
                })}
                <hr />
                <p>Tech</p>
                <li>
                    <NavLink 
                        activeClassName="selected" 
                        to="/tools"
                        onClick={() => props.openCloseSlideMenu()}
                    >Tools</NavLink>
                </li>
                <hr />
                <p>Reach Out</p>
                <li>
                    <NavLink 
                        activeClassName="selected" 
                        to="/contact"
                        onClick={() => props.openCloseSlideMenu()}
                    >Contact Me</NavLink>
                </li>
            </ul>
        </nav>
    );
} 

export default SlideNav;