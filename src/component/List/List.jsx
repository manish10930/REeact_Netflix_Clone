import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './List.scss'
import Listitem from './ListItem/Listitem';
import { useState } from 'react';

const List = () => {
    
    const listRef=useRef();

    const[moved,setMove]=useState(false);

    const [slideNumber,setSlidenumber]=useState(0);

    const handleClick=(direction)=>{
        setMove(true);

        let distance=listRef.current.getBoundingClientRect().x-50;
          if(direction==="left" && slideNumber>0)
          {     
                setSlidenumber(slideNumber-1);
                listRef.current.style.transform=`translateX(${230+distance}px)`
                
          }
          if(direction==="right" && slideNumber<5)
          {     
                setSlidenumber(slideNumber+1);
                listRef.current.style.transform=`translateX(${-230+distance}px)`

                
          }
    }
    return (
        <div className='list'>
               <span className='listTitle'>Continue to watch</span>
               <div className="wrapper">
                <ArrowBackIosIcon style={{display:!moved && "none"}}  className='sliderArrow left' onClick={()=>handleClick("left")} />
                <div className="container" ref={listRef}>
                    <Listitem index={0}/>
                    <Listitem index={1}/>
                    <Listitem index={2}/>
                    <Listitem index={3}/>
                    <Listitem index={4}/>
                    <Listitem index={5}/>
                    <Listitem index={6}/>
                    <Listitem index={7}/>
                    <Listitem index={8}/>
                    <Listitem index={9}/>
            
                    
                </div>
                <ArrowForwardIosIcon className='sliderArrow right ' onClick={()=>handleClick("right")} />
               </div>
               
        </div>
    );
}

export default List;
