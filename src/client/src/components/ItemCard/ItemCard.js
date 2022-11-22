import './ItemCard.css'
import {BsTruck} from 'react-icons/bs';

import { useState, useEffect } from 'react';

import image1 from'../../assets/images/items/item1 (2).png'
import image2 from'../../assets/images/items/item1 (3).png'
import image3 from'../../assets/images/items/item1 (4).png'
import Button from '../Button/Button.js';


function ItemCard(props){
    const images = [image1, image2, image3];
    return (
        <div className='item-card'>
            <img src={images[Math.floor(Math.random() * 3)]}/>
            <div className='item-title'>
                <span>Play Station 5 placeholder</span>
                <span className='light'>
                    <p>1 day</p>
                    <BsTruck size={25}/></span>
            </div>
            <div className='item-title'>
                <div className='sub-title'>
                    <span className='light'> Starts</span>
                    <span>500/Month</span>
                </div>
                <Button text={'Rent Now'}/>
            </div>
        </div>
    )
}

export default ItemCard;