import react from 'react';
import './TrendingNow.css'
import {IoCaretBackCircleOutline, IoCaretForwardCircleOutline} from 'react-icons/io5';

function TrendingNow(props){

    const slideLeft = () => {
        var slider = document.getElementById("item-container-slider");
        slider.scrollLeft  = slider.scrollLeft - 500
        console.log('test right')
    }

    const slideRight = () => {
        var slider = document.getElementById("item-container-slider");
        slider.scrollLeft  = slider.scrollLeft + 500
        console.log('test right')
    }

    return (
        <div className='trending'>
            <div>
                Trending Now!
            </div>
            <div className='trend-btn'>
                <IoCaretBackCircleOutline size={50} onClick={slideLeft}/>
                <IoCaretForwardCircleOutline size={50} onClick={slideRight}/>
            </div>
        </div>
    )
}

export default TrendingNow;