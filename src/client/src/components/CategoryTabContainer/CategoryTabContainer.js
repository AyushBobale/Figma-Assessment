import './CategoryTabContainer.css'
import CategoryTab from '../CategoryTab/CategoryTab';
import { BsController } from 'react-icons/bs';
import {IoGameController, IoChevronBackSharp, IoChevronForwardSharp} from 'react-icons/io5';

function CategoryTabContainer(){
    const tabProps = {
        text : 'Music',
        icon : <IoGameController size={70}/>

    }

    const slideLeft = () => {
        var slider = document.getElementById("category-tab-slider");
        slider.scrollLeft  = slider.scrollLeft - 300
        console.log('test right')
    }

    const slideRight = () => {
        var slider = document.getElementById("category-tab-slider");
        slider.scrollLeft  = slider.scrollLeft + 300
        console.log('test right')
    }

    return(
        <div className='category-tab-parent'>
            <IoChevronBackSharp className='active' size={35} onClick={slideLeft}/>
            <div className='category-tab-container' id='category-tab-slider'>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
                <CategoryTab {...tabProps}/>
            </div>
            <IoChevronForwardSharp className='active' size={35} onClick={slideRight}/>
        </div>

    )
}

export default CategoryTabContainer;