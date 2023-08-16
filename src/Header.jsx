import React, { useState } from 'react';
import './Header.css';

import logo from "../src/assets/images/logo.svg"
import icon_navBurger from "../src/assets/images/icon-hamburger.svg"

function Header() {
    const [burgerClicked, setBurgerClicked] = useState(false);

    function burgerButton1() {
        setBurgerClicked(!burgerClicked);
    }

    return (
        <div className='header'>
            <div className='header--div'>
                <img src={logo} alt="icon_logo" />

                <div onClick={burgerButton1} className='burger'>
                    <img src={icon_navBurger} alt="icon_burger" />
                </div>

                <nav className='nav'>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <input className='contact--btn' type="button" value="Contact" />
                    </ul>
                </nav>
            </div>

            {burgerClicked && (
                    <div className='burger_Display'>
                        <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <input className='contact--btn' type="button" value="Contact" />
                    </ul>
                    </div>
                )}

            <h1>We are creatives</h1>
            <img src="../src/assets/images/icon-arrow-down.svg" alt="" className='arrow--down'/>
        </div>
    );
}

export default Header;
