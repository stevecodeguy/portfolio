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
                    <p>
                        HTML<br/>
                        CSS<br/>
                        JavaScript<br/>
                        PHP<br/>
                        C<br/>
                        C++<br/>
                        VBScript<br/>
                        Visual Basic
                    </p>
                </div>
                <div className='fadeIn2'>
                    <h3>IDE / Text Editors</h3>
                    <p>
                        Visual Studio Code<br/>
                        Visual Studio<br/>
                        Brackets
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
                    <h3>Tools</h3>
                    <p>
                        NPM<br/>
                        Yarn<br/>
                        Github
                    </p>
                </div>
            </div>
        </>
    );
}