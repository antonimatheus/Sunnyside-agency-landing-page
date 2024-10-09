import React, { useState, useEffect } from 'react';
import './Header.css';

import logo from "../src/assets/images/logo.svg"
import icon_navBurger from "../src/assets/images/icon-hamburger.svg"
import icon_arrow_down from "../src/assets/images/icon-arrow-down.svg"

function Header() {
    const [burgerClicked, setBurgerClicked] = useState(false);

    function burgerButton1() {
        setBurgerClicked(!burgerClicked);
    }

    // Hook para fechar o menu quando clica fora
    useEffect(() => {
        function handleClickOutside(event) {
            // Se clicar fora do menu, fecha o menu
            if (burgerClicked && !event.target.closest('.burger_Display') && !event.target.closest('.burger')) {
                setBurgerClicked(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup: remove o event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [burgerClicked]);

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
                <>
                    {/* Fundo preto semi-transparente */}
                    <div className='overlay'></div>

                    <div className='burger_Display'>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <input className='contact--btn' type="button" value="Contact" />
                        </ul>
                    </div>
                </>
            )}

            <h1>We are creatives</h1>
            <img src={icon_arrow_down} alt="arrow down" className='arrow--down'/>
        </div>
    );
}

export default Header;
