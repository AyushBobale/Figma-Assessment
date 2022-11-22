import './Slider.css'
import Slide from "../Slide/Slide.js";
import {useEffect, useState} from 'react';


function Slider(props) {
    const [activeImg, setActiveImage] = useState(0);

    const handleChange = (e) => {
        setActiveImage(e.target.value);
        console.log('active image', activeImg);

    }

    return(
        <div className="slider">
            {props.images.map((image, index) =>{
                if(index == activeImg){
                    return (
                        <Slide image={image} key={index}/>
                    )
                }
            })}

            <div className='bottom-btn'>
            {
                props.images.map((img, idx) => {
                    return(
                        <div className='bottom-bar' key={idx}>
                            <input 
                                className='radio-btn'
                                type='radio' 
                                value={idx} 
                                name='slider-radio' 
                                id={`id${idx}`}
                                onChange={(e) => handleChange(e)}/>
                            <label htmlFor={`id${idx}`}>__</label>
                        </div>

                    )
                })
            }
            </div>
        </div>
    )
}

export default Slider;