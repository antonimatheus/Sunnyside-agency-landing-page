import React from "react";

function MainContentTwo(props) {
    return (
        <div className="MainContentTwo">
            <div className="MainContentTwoBlock">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default MainContentTwo;