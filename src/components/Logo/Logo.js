import React from "react";
import Tachyons from 'tachyons';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo =() => {
    return(
        <div className = 'ma4  mt0 '> 
            <Tilt className="Tilt b2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3 ">
                    <img id="logo" alt = "Holo's Logo" src={brain}/>
                </div>
                {/* <Brain /> */}
            </Tilt>
        </div>
    )
}


export default Logo;