import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header--div'>
            <h1>SunnySide</h1>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header