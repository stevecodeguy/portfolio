import React from 'react';

import Contacts from '../../Components/Contacts/Contacts';

export default function ReachOut() {
    return (
        <article>
            <h1>Reach Out</h1>
            <hr />
            <Contacts size={ 'contacts-large' }/>
            <hr />
            <br />
            <p>Feel free to reach out to me using any of my social media presences above. I'd love to hear from you!</p>
        </article>
    );
}