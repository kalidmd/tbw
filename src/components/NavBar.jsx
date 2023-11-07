import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
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
  return (
      <BrowserRouter>
        <nav className='nav-bar'>
          <NavLink 
            className={"link"} 
            to={"/"}>
            <img className="tbw-logo" src={TbwLogo} alt="logo"/>
          </NavLink> 
          
          <div className="nav-bar--pages">
            <NavLink 
              className={"page link"} 
              to={"/attend"}>
                ATTEND
            </NavLink> 
            
            <NavLink 
              className={"page link"} 
              to={"/videos"}>
                VIDEOS
            </NavLink>
            
            <NavLink 
              className={"page link"} 
              to={"/about"}>
                ABOUT
            </NavLink> 
            
            <NavLink 
              className={"page link"} 
              to={"/blog"}>
                BLOG
            </NavLink> 
          </div>

          <div className="nav-bar--icons">
            <img className="nav-bar--icon" src={DarkModeIcon} alt="logo" />

            <NavLink 
              className={"link"} 
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.youtube.com/@truthByWill"}>
                <img className="nav-bar--icon" src={YoutubeIcon} alt="logo" />
            </NavLink>
                  
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