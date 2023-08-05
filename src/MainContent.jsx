import React from 'react'

function MainContent(props) {
    return (
        <div className='mainContent--div'>
            <div className='DivInternal'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <input type="button" value={props.input} />
            </div>
        </div>
    )
}

export default MainContent