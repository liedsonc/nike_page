import React from 'react';
import style from './Footer.css';
// import Arrowleft from '../../img/Group 14.png';
// import Arrowright from '../../img/Group 15.png';
import prev from'../../img/Prev.png';
import next from'../../img/Next.png';
import add_to_cart from '../../img/add_to_cart.png'
const Footer = () => {
    return ( 
            <>
            <footer>
                <div className="footer-left">
                    
                    <div className="left">
                        <img className="prev"src={prev} alt=""/> 
                    </div>
                    
                    <div className="right">
                        <img className="next"src={next} alt=""/>  
                    </div>
                
                </div>
                <div className="footer-right">
                
                <img className="add_to_cart" src={add_to_cart} alt=""/>
                
                
                </div>            
            </footer>
            </>

        );
}
 
export default Footer;
