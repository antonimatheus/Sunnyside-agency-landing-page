import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header--div'>
                <img src="./src/assets/images/logo.svg" alt="" />
                <nav>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <input className='contact--btn' type="button" value="Contact" />
                    </ul>
                </nav>
            </div>
            <h1>We are creatives</h1>
            <img src="./src/assets/images/icon-arrow-down.svg" alt="" className='arrow--down'/>
        </div>
    )
}

export default Header