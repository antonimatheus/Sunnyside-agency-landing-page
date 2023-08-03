import React from 'react'

function MainContent(props) {
    return (
        <>
            <h2> name: {props.name}</h2>
            <h2> age: {props.age}</h2>
            <h2> job: {props.job}</h2>
        </>
    )
}

export default MainContent