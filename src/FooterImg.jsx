import React from "react";

function FooterImg(props) {
    return (
        <div className="FooterImg">
            <img src={props.footerImg_one} alt="img" />
            <img src={props.footerImg_two} alt="img" />
            <img src={props.footerImg_three} alt="img" />
            <img src={props.footerImg_four} alt="img" />
        </div>
    )
}

export default FooterImg;