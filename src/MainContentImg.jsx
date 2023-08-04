import React from 'react'

function MainContentImg(props) {
    return (
        <div className='mainContentImg--div'>
            <img className='ImgProps' src={props.img} alt="img" />
        </div>
    )
}

export default MainContentImg