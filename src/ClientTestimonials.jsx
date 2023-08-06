import React from "react";

function ClientTestimonials(props) {
    return (
        <div className="ClientTestimonialsBlock">
            <h1>Client testimonials</h1>
            <img src={props.img} alt="img" />
            <p>{props.description}</p>
            <h2>{props.name}</h2>
            <p>{props.job}</p>
        </div>
    )
}

export default ClientTestimonials;