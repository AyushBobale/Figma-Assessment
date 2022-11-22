import './Slider.css'
import Slide from "../Slide/Slide.js";

function Slider(props) {
    return(
        <div className="slider">
            {props.images.map((image, index) =>{
                return (
                    <Slide image={image} key={index}/>
                )
            })}
        </div>
    )
}

export default Slider;