import React, { useState } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';
import '../styles/navbar.css'
import TbwLogo from "../assets/logo/TBW_White_Transparent.png"
import YoutubeIcon from '../assets/icon/youtube-white.png'

function NavBar() {
  // -----navbar scroll state-----
  const [navBar, setNavBar] = useState(false);

  const scrollNavbar = () => {
    if(window.scrollY >= 25){
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', scrollNavbar);  

  return (
    <BrowserRouter>
      <nav id="nav-bar" className={navBar ? "nav-bar active": "nav-bar"}>
        <div className="nav-width">
          <a style={{fontSize: "0"}} href="/"> 
            <img className="tbw-logo" src={TbwLogo} alt="truth by will"/> 
          </a>
        
            <div className="nav-pages">
              <NavLink 
                  className={
                    ({isActive}) => 
                      (isActive ? "nav-page-item active"  : "nav-page-item")
                  } 
                  reloadDocument 
                  to={"/"}
              >
                HOME
              </NavLink>
            
              <NavLink 
                  className= {
                    ({isActive}) => 
                      (isActive ? "nav-page-item active" :  "nav-page-item")
                  } 
                  reloadDocument
                  to={"/blog"}
              >
                BLOG   
              </NavLink>

              <NavLink 
                  className={
                    ({isActive}) => 
                      (isActive ? "nav-page-item active" : "nav-page-item")
                  } 
                  reloadDocument
                  to={"/attend"}
              >
                ATTEND
              </NavLink>

              <NavLink 
                  className={
                    ({isActive}) => 
                      (isActive ? "nav-page-item active" : "nav-page-item")
                  } 
                  reloadDocument
                  to={"/about"}
              >
                ABOUT
              </NavLink> 
            </div>

            <a 
              className="nav-icon-a"
              target="_blank" 
              href="https://www.youtube.com/@truthByWill"
              rel="noopener noreferrer"
            >
              <img className="nav-icon-img" src={YoutubeIcon} alt="youtube"/>
            </a>

        </div>

      </nav>

    </BrowserRouter>
  )
}

export default NavBar