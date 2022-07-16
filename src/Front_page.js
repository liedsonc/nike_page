import React from 'react';
import style from './App.css';
// import shoe from './img/Air Edge 270.png';
import play from './img/play.png';
import triangle from './img/triangle.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';
import sizes from './img/Group 16.png';
import Color1 from './img/Color1.png';
import Color2 from './img/Color2.png';
import Color3 from './img/Color3.png';
import Color4 from './img/Color4.png';
import Color5 from './img/Color5.png';
import viewControl from './img/360_View-Control.png';



const Front = () => {
    return ( 
        <>
        <section className="left">
            
            <h2>MEN'S SHOE</h2>
    
            <h1>NIKE AIR EDGE 270</h1>
            <p  className="p1">The Nike Air Edge 270 takes the look of retro <br/>
            basketball and puts it through a modern lens.</p>

            {/* <img className="play" src={play} alt=''/>
            <img className="triangle" src={triangle} alt=''/>
            <p className="p2">PLAY VIDEO</p> */}
            {/* <p className="p3">scroll down</p> */}
            
        </section>
        <section className="main">
            {/* <img className="ctrl" src={viewControl} alt=''/> */}
        </section>
        

        <section className="right">
            <h3 className="Size">select size (us)</h3>
            <img className="Sizes" src={sizes}/>
            
            <h3 className="Color">Select Color</h3>
            <img className="Color1" src={Color1}/>                         
            <img className="Color2" src={Color2}/>                         
            <img className="Color3" src={Color3}/>                         
            <img className="Color4" src={Color4}/>                         
            <img className="Color5" src={Color5}/>                         
            
            {/* <div className="social">
            <a herf="https://www.instagram.com/nike"><img className="instagram" src={instagram} alt='' /></a>
            <a herf="https://www.twitter.com/nike"><img className="twitter" src={twitter} alt='' /></a>
            <a herf="https://www.facebook.com/nike"><img className="facebook" src={facebook} alt='' /></a>
            </div>                           */}
                                    

        </section>

        </>
     );
}
 
export default Front;