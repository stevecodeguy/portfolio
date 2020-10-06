import React from 'react';

import './ReachOut.css';

import Contacts from '../../Components/Contacts/Contacts';

export default function ReachOut() {
    return (
        <>
            <h1>Reach Out</h1>
            <hr />
            <Contacts size={ 'contacts-large' }/>
            <p className='email'><a href={`mailto:steve@stevecodeguy.com`}>steve@stevecodeguy.com</a></p>
            <hr />
            <br />
            <p>Feel free to reach out to me using any of my social media presences above. I'd love to hear from you!</p>
        </>
    );
}