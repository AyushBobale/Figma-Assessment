import react from "react";
import './MainSection.css';
import CategoryTabContainer from "../CategoryTabContainer/CategoryTabContainer.js";
import Slider from "../Slider/Slider.js";

import image1 from '../../assets/images/banner/banner_1.png'
import image2 from '../../assets/images/banner/banner_2.png'
import image3 from '../../assets/images/banner/banner_3.png'


function MainSection() {
    const sliderProps = {
        images : [image1,
                //   image2,
                //   image3,
                ]
    }

    return(
        <div className="main-section">
            <Slider {...sliderProps}/>
            <CategoryTabContainer/>

        </div>
    )
}

export default MainSection;