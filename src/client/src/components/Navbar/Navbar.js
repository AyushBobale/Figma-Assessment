import react from 'react';
import './Navbar.css'
import Button from '../Button/Button.js';
import logo from '../../assets/images/logosample 1.png';

import { BsFillGeoAltFill, BsFillCartFill } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

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

    return(
        <nav className='main-nav'>
            <div className='logo'>
                <img src={logo}/>
            </div>

            <div className='search-bar-desktop'>
                <Button  {...locButtonProps}/>
                <Button  {...cartButtonProps}/>
                <Button  {...loginButtonProps}/>
            </div>
            
            <div className='search-bar-tab'>
                tab
            </div>

            <div className='search-bar-mobile'>
                phone
            </div>

            <HiMenu size={50}/>

            

            {/* <div className='dropdown-menu'></div> */}
        </nav>
    )
}

export default Navbar;