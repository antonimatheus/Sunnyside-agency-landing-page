import React from "react";
import "./Footer.css"

import icon_facebook from "../src/assets/images/icon-facebook.svg" 
import icon_instagram from "../src/assets/images/icon-instagram.svg"
import icon_twitter from "../src/assets/images/icon-twitter.svg" 
import icon_pinterest from "../src/assets/images/icon-pinterest.svg" 

function Footer() {
    return (
        <div className="Footer">
            <div>
                <h1>sunnyside</h1>
            </div>

            <div>
                <ul className="FooterNav">
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
            </div>

            <div>
                <ul className="SocialMedia">
                    <li><img src={icon_facebook} alt="img" /></li>
                    <li><img src={icon_instagram} alt="img" /></li>
                    <li><img src={icon_twitter} alt="img" /></li>
                    <li><img src={icon_pinterest} alt="img" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;