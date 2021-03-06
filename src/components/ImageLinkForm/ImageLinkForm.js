import React from "react";
import './ImageLinkForm.css';
import Tachyons from 'tachyons';
 
const ImageLinkForm =({ onInputChange, onSubmit }) => {
    return(
        <div>
            <p className = 'f3'>This magic brain application will detect faces. Give it a try!</p> <br></br>
            <p id="disclaimer">(Only one face per image)</p>
            <div className ="center">
                <div className = " form center pa4 br3 shadow-5">
                    <input className='f4 pa2 w-70 center' placeholder='Enter url here' type='text' onChange = {onInputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick = {onSubmit}>Detect</button>
                </div>
            </div>
        </div> 
    )
}


export default ImageLinkForm;