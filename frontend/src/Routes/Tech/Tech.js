import React from 'react';

import './Tech.css';

export default function Tech() {
    return (
        <>
            <h1>Tech</h1>
            <hr />
            <div className='techWrap'>
                <div className='fadeIn1'>
                    <h3>Languages</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>PHP</p>
                    <p>C</p>
                    <p>VBScript</p>
                    <p>Visual Basic</p>
                    <p>WordPress</p>
                </div>
                <div className='fadeIn2'>
                    <h3>Frameworks</h3>
                    <p>
                        JQuery<br/>
                        React.js<br/>
                        React Redux<br/>
                        React-Ionic<br/>
                        Node.js<br/>
                        Express.js
                    </p>
                </div>
                <div className='fadeIn3'>
                    <h3>Libraries / Frameworks</h3>
                    <p>
                        SASS<br/>
                        JQuery<br/>
                        Gulp<br/>
                        React
                    </p>
                </div>
                <div className='fadeIn4'>
                    <h3>Tools / Databases</h3>
                    <p>
                        NPM<br/>
                        Yarn<br/>
                        Github<br/>
                        MySQL<br/>
                        PostgresSQL<br/>
                        MS Access<br/>
                        MongoDB
                    </p>
                </div>
            </div>
        </>
    );
}