import react from 'react';
import './TrendingNow.css'
import {IoCaretBackCircleOutline, IoCaretForwardCircleOutline} from 'react-icons/io5';

function TrendingNow(props){
    return (
        <div className='trending'>
            <div>
                Trending Now!
            </div>
            <div className='trend-btn'>
                <IoCaretBackCircleOutline size={50}/>
                <IoCaretForwardCircleOutline size={50}/>
            </div>
        </div>
    )
}

export default TrendingNow;