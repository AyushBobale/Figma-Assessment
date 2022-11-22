import './ItemCardContainer.css'

import ItemCard from '../ItemCard/ItemCard.js';

function ItemCardContainer(props){
    return (
        <div className='item-card-container' id='item-container-slider'>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>

        </div>
    )
}

export default ItemCardContainer;