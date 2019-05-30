import React from 'react';
import Tachyons from 'tachyons';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className ='absolute mt2'>
                <img width='500px' height='auto' alt='' src= {imageUrl} />
            </div>
        </div> 
    )
}

export default FaceRecognition; 