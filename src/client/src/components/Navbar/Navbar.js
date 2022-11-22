import {useState} from 'react';
import './Navbar.css'
import Button from '../Button/Button.js';
import SearchBar from '../SearchBar/SearchBar.js';
import HamMenu from '../HamMenu/HamMenu.js';
import logo from '../../assets/images/logosample 1.png';

import { BsFillGeoAltFill, BsFillCartFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import {IoSearch, IoCloseSharp} from 'react-icons/io5';


function Navbar(props){
    const locButtonProps = {
        text : 'Mumbai',
        icon : <BsFillGeoAltFill/>,
        fill : false
      }
    
      const cartButtonProps = {
        text : 'My Cart',
        icon : <BsFillCartFill/>,
        fill : true
      }

      const loginButtonProps = {
        text : 'Login/Signup',
        icon : null,
        fill : true
      }
    
      const products = [
        'Playstation',
        'PS4',
        'PS5',
        'Xbox',
        'Go Pro',
        'Lenovo Laptop',
        'Monitor',
        'PC',
        'RAM',
        'CPU',
        'MotherBoard',
        'Playstation',
        'PS4',
        'PS5',
        'Xbox',
        'Go Pro',
        'Lenovo Laptop',
        'Monitor',
        'PC',
        'RAM',
        'CPU',
        'MotherBoard',
      ]

      const searchBarPropsMobile = {
        placeHolder : '',
        icon : <IoSearch size={30}/>,
        products : products
      }

      const searchBarProps = {
        placeHolder : 'Search Products',
        icon : <IoSearch size={30}/>,
        products : products
      }

    const [sideMenu, setSideMenu] = useState(false);
    const showSideBar = () => setSideMenu(!sideMenu);

    return(
        <nav className='main-nav'>
            <div className='logo'>
                <img src={logo}/>
            </div>

            <div className='search-bar-desktop'>
                <Button  {...locButtonProps}/>
                <SearchBar {...searchBarProps}/>
                <Button  {...cartButtonProps}/>
                <Button  {...loginButtonProps}/>
            </div>
            
            <div className='search-bar-tab'>
                <SearchBar {...searchBarProps}/>
            </div>

            <div className='search-bar-mobile'>
                <SearchBar {...searchBarPropsMobile}/>
            </div>
            
            <a onClick={showSideBar} className='side-bar'>
                {!sideMenu && <HiMenu size={40}/>}
                {sideMenu && <IoCloseSharp size={40}/>}
            </a>
            <HamMenu hide = {sideMenu}/>
        </nav>
    )
}

export default Navbar;