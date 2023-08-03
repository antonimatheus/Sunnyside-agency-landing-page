import React from 'react'

function MainContent(props) {
    return (
        <div className='mainContent--div'>
            <h2>name: {props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default MainContent