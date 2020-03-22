import React from 'react';

import './Contacts.css';

import GitHub from '../../Visual/Images/github-dark-blue.svg';
import LinkedIn from '../../Visual/Images/linkedin-dark-blue.svg';
import Twitter from '../../Visual/Images/twitter-dark-blue.svg';

export default function Contacts(props){
    return (
        <div className={ 'contacts ' + props.size }>
            <a 
                href='https://github.com/stevecodeguy'
            ><img src={ GitHub } alt='GitHub Logo'/></a>
            <a 
                href='https://www.linkedin.com/in/steve-gilkes-1952a68b/'
            ><img src={ LinkedIn } alt='LinkedIn Logo'/></a>
            <a 
                href='https://twitter.com/stevecodeguy'
            ><img src={ Twitter } alt='Twitter Logo'/></a>
        </div>
    );
}