import react from 'react';
import './CategoryTabContainer.css'
import CategoryTab from '../CategoryTab/CategoryTab';
import { BsController } from 'react-icons/bs';
import {IoGameController} from 'react-icons/io5';

function CategoryTabContainer(){
    const tabProps = {
        text : 'Music',
        icon : <IoGameController size={70}/>

    }
    return(
        <div className='category-tab-container'>
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
    )
}

export default CategoryTabContainer;