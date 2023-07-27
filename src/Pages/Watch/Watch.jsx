import "./watch.scss"
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Watch = () => {
    return (
       <div className="watch">
           <div className="back">
                  <KeyboardBackspaceIcon/>
                  Home
            </div>
            <video className="video" src="v1.mp4" autoPlay progress controls  ></video>
               
       </div>
    );
}

export default Watch;
