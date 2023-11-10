import React, {useEffect, useState, useRef} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import '../styles/navbar.css'
         //PAGES
import Home from '../pages/Home';
import Attend from '../pages/Attend';
import Videos from '../pages/Videos';
import Blog from '../pages/Blog';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';

import TbwLogo from "../assets/logo/TBW_White_Transparent.png"
import DarkModeIcon from "../assets/icon/sun-white.png";
import YoutubeIcon from "../assets/icon/youtube-white.png";

function NavBar() {
  // -----navbar scroll state-----
  const [navBar, setNavBar] = useState(false);
  // -----humburger menu state-----
  const [humburger_class, setHumburgerClass] = useState("humburger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked){
      setHumburgerClass("humburger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setHumburgerClass("humburger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  const scrollNavbar = () => {
    if(window.scrollY >= 30){
      setNavBar(true)
    }
    else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', scrollNavbar);  
  
  let style = {
    top: navBar ? "52px" : "72px"
  }
  return (
      <BrowserRouter>
        <nav className={navBar ? "nav-bar active": "nav-bar"}>
          <div className="nav-width">
            <NavLink className={"link"} to={"/"}>
              <img className="tbw-logo" src={TbwLogo} alt="logo"/>
            </NavLink>

            <div className="humburger-menu" onClick={updateMenu}>
                <div className={humburger_class}></div>
                <div className={humburger_class}></div>
                <div className={humburger_class}></div>
            </div>
          
            <div style={style} className={menu_class}>
              <div className="triangle"></div>
              <div className="nav-bar--pages">
                <NavLink 
                  className={"page link"} to={"/"}> HOME
                </NavLink> 
                <NavLink 
                  className={"page link"} to={"/attend"}> ATTEND
                </NavLink> 
                <NavLink 
                  className={"page link"} to={"/videos"}> VIDEOS
                </NavLink> 
                <NavLink 
                  className={"page link"} to={"/about"}> ABOUT
                </NavLink>    
                <NavLink 
                  className={"page link"} to={"/blog"}> BLOG
                </NavLink> 
                <div className="nav-bar--icons">
                  <img className="nav-bar--icon" src={DarkModeIcon} alt="logo" />

                  <a 
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/@truthByWill"
                  >
                    <img className="nav-bar--icon" src={YoutubeIcon} alt="logo" />
                  </a> 
                </div>
              </div>

            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/attend" element={<Attend/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default NavBar