import React from "react";

function ClientTestimonials(props) {
    return (
        <div className="ClientTestimonialsBlock">
                <img src={props.img} alt="img" />
                <p>{props.description}</p>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.job}</p>
                </div>
            
        </div>
    )
}

export default ClientTestimonials;