import React from 'react'

function MainContent(props) {
    return (
        <div className='mainContent--div'>
            <div className='DivInternal'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <div className='inputButton'>
                    <input type="button" value={props.input} />
                    <div className='backgroundInput'></div>
                </div>
                
            </div>
        </div>
    )
}

export default MainContent