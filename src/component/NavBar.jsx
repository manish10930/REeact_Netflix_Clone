import React from 'react'
import "./NavBar.scss"
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
function NavBar() {

  const [isScrolled,setIsScrolled]=useState(false)

  window.onscroll=()=>
  {
   setIsScrolled( window.scrollY===0?false:true);
    return()=>(window.onscroll=null)
  };
 

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
          <div className="left">
          <img src="logo.png" alt="" />

            <span>HomePage</span>
            
            <span>Services</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
              <SearchIcon className='icon'/>
              <span>KID</span>
              <NotificationsIcon className='icon'/>
              <img style={{backgroundColor:"white"}} src="https://pic.onlinewebfonts.com/svg/img_569204.png" alt="" />

              <div className="profile">
              <ArrowDropDownIcon className='icon'/>
                <div className="options">
                  <span> <SettingsIcon/> Settings</span>
                 <Link to="/logout" className='Link'><span><LogoutIcon/>Log Out</span></Link>
                </div>
              </div>


          </div>
        </div>
    </div>
  )
}

export default NavBar