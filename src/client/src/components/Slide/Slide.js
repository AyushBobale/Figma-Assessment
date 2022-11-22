import react, { useState } from "react";
import './Slide.css'

function Slide(props) {
    return(
        <div className="slide">
                <img
                    src={props.image}
                    alt={`${props.image}`}/>
        </div>
    )
}

export default Slide;