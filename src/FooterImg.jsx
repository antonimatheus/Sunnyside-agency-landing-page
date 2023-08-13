import React from "react";

function FooterImg(props) {
    return (
        <div className="FooterImg">
            <div><img src={props.footerImg_one} alt="img" /></div>
            <div><img src={props.footerImg_two} alt="img" /></div>
            <div><img src={props.footerImg_three} alt="img" /></div>
            <div><img src={props.footerImg_four} alt="img" /></div>
        </div>
    )
}

export default FooterImg;