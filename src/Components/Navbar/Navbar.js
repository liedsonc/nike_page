import React from 'react';
import logo from '../../img/Logo_NIKE 1.png';
import account from '../../img/account.png';
import bag from '../../img/bag.png';
import style from './Navbar.css';




const Navbar = () => {
    return ( 
        <nav className= 'navbar'>
        
        <div className="nav-left">
        <img className ='logo' src={logo} alt=""/>
        </div>
        
        <div className="nav-center">
            <a href="#">NEWRELEASES</a>
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">KIDS</a>
            <a href="#">CUSTOMIZE</a>
        </div>

        <div class="nav-right">

            <a className="account" herf="#"><img src={account}/></a> 
            <a className="bag" herf="#"><img src={bag}/></a>

        </div>
        
        </nav>
        );
}
export default Navbar;
 