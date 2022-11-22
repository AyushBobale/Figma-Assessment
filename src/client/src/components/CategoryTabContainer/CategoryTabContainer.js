import react from 'react';
import './CategoryTabContainer.css'
import CategoryTab from '../CategoryTab/CategoryTab';
import { BsController } from 'react-icons/bs';

function CategoryTabContainer(){
    const tabProps = {
        text : 'Music',
        icon : <BsController size={70}/>

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