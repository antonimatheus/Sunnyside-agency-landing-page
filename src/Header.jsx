import React from 'react'
import './Header.css'



function Header() {

    function burguerButton() {
        return (
            <div className='burguerDisplay'>
                {window.alert('Hello, World!')}
            </div>
        )
    }

    return (
        <div className='header'>
            <div className='header--div'>
                <img src="./src/assets/images/logo.svg" alt="" />

                <div onClick={burguerButton}  className='burguer'><img src="./src/assets/images/icon-hamburger.svg" alt="burguer" /></div>

                <burguerButton />

                <nav className='nav'>
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