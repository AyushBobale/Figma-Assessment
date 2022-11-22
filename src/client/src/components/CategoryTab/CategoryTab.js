import react from 'react';
import './CategoryTab.css'

function CategoryTab(props) {
    return(
        <div className='category-tab'>
            <div className='category-tab-icon'>{props.icon}</div>
            <div className='category-tab-text'>{props.text}</div>
        </div>
    )
}

export default CategoryTab;