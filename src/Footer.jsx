import React from "react";
import "./Footer.css"

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
                    <li><img src="../src/assets/images/icon-facebook.svg" alt="img" /></li>
                    <li><img src="../src/assets/images/icon-instagram.svg" alt="img" /></li>
                    <li><img src="../src/assets/images/icon-twitter.svg" alt="img" /></li>
                    <li><img src="../src/assets/images/icon-pinterest.svg" alt="img" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;