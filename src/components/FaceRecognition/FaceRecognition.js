import React from 'react';
import Tachyons from 'tachyons';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className ='absolute mt2'>
                <img id="inputimage" width='500px' height='auto' alt='' src= {imageUrl} />
            </div>
            <div className="bounding-box" />
        </div> 
    )
}

export default FaceRecognition; 