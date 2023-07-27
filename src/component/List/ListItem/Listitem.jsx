import React from 'react';
import "./Listitem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Listitem = ({index}) => {
    const [isHovered,setIsHovered]=useState(false);
    // const tailer="https://www.youtube.com/watch?v=ESEUoa-mz2c"
    return (
    
        <div 
        style={{left:isHovered && index*225-50}} className='listItem'
         onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)} >

        <img src="dark.jpg" alt="" />
    
       { isHovered  && ( <>
        <Link to="/watch">
        <video src="v1.mp4" autoPlay={true} loop />
        </Link>
        <div className="itemInfo">
            <div className="icons">
            <Link to="/watch" className='link' ><PlayArrowIcon className='icon'/></Link>
               <AddIcon className='icon'/>
               <ThumbUpOutlinedIcon className='icon'/>
               <ThumbDownOutlinedIcon className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span><br />
                <span className='limit'>+16</span>
                <span>1999</span>
            </div>
            <div className="desc">
                <p>A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.
                 You visited this page on 31/12/22.</p>
            </div>
            <div className="genre">Action </div> 
        
        </div>

       </>)}
        
 </div>
     );
}

export default Listitem;
