import React from 'react';
import Tachyons from 'tachyons';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className ='absolute mt2'>
                <img id="inputimage" width='500px' height='auto' alt='' src= {imageUrl} />
                <div id="Holosbox" className="bounding-box" style= {{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow, 
                left: box.leftCol
            }}></div>
            </div>
        </div> 
    )
}

export default FaceRecognition; 