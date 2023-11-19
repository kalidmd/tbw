import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/burgermenu.css'
// ---PAGES---
import Home from '../pages/Home';
import Attend from '../pages/Attend';
import Videos from '../pages/Videos';
import Blog from '../pages/Blog';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
// ---ICONS---
import YoutubeIcon from '../assets/icon/youtube-white.png'
import FacebookIcon from '../assets/icon/facebook-white.png'
import TiktokIcon from '../assets/icon/tiktok-white.png'
import TelegramIcon from '../assets/icon/telegram-white.png'

import HomeIconDark from '../assets/icon/home.png'
import AboutUsIconDark from '../assets/icon/about-us.png'
import AttendIconDark from '../assets/icon/attend.png'
import VideoIconDark from '../assets/icon/video.png'
import BlogIconDark from '../assets/icon/blog.png'

import HomeIconLight from '../assets/icon/home-white.png'
import AboutUsIconLight from '../assets/icon/about-us-white.png'
import AttendIconLight from '../assets/icon/attend-white.png'
import VideoIconLight from '../assets/icon/video-white.png'
import BlogIconLight from '../assets/icon/blog-white.png'



function BurgerMenu() {
  const [activeHomeIcon, setActiveHomeIcon] = useState(false)
  const [activeAboutIcon, setActiveAboutIcon] = useState(false)
  const [activeAttendIcon, setActiveAttendIcon] = useState(false)
  const [activeVideoIcon, setActiveVideoIcon] = useState(false)
  const [activeBlogIcon, setActiveBlogIcon] = useState(false)

  return (
    <BrowserRouter>
        <Menu>
            <div className="nav-links">
                <NavLink 
                    className={
                      ({isActive}) => 
                        (isActive ? (setActiveHomeIcon(true), "menu-item active" ) : 
                        (setActiveHomeIcon(false), "menu-item"))
                    } 
                    reloadDocument 
                    to={"/"}
                >
                  <div className="icon-and-menu">
                    <img className="menu-icon" src={activeHomeIcon ? HomeIconDark : HomeIconLight} alt="Home"/> HOME
                  </div>
                </NavLink>
              
                <NavLink 
                    className={
                      ({isActive}) => 
                        (isActive ? (setActiveAboutIcon(true), "menu-item active" ) : 
                        (setActiveAboutIcon(false), "menu-item"))
                    } 
                    reloadDocument
                    to={"/about"}
                >
                  <div className="icon-and-menu">
                    <img className="menu-icon" src={activeAboutIcon ? AboutUsIconDark : AboutUsIconLight } alt="About" /> ABOUT US
                  </div>
                </NavLink>
                
                <NavLink 
                    className={
                      ({isActive}) => 
                        (isActive ? (setActiveAttendIcon(true), "menu-item active" ) : 
                        (setActiveAttendIcon(false), "menu-item"))
                    } 
                    reloadDocument
                    to={"/attend"}
                >
                  <div className="icon-and-menu">
                    <img className="menu-icon" src={activeAttendIcon ? AttendIconDark : AttendIconLight} alt="Attend" /> ATTEND
                  </div>
                </NavLink>

                <NavLink 
                    className={
                      ({isActive}) => 
                        (isActive ? (setActiveVideoIcon(true), "menu-item active" ) : 
                        (setActiveVideoIcon(false), "menu-item"))
                    } 
                    reloadDocument
                    to={"/videos"}
                >
                  <div className="icon-and-menu">
                    <img className="menu-icon" src={activeVideoIcon ? VideoIconDark : VideoIconLight} alt="Video" /> VIDEOS
                  </div>
                </NavLink>
                
                <NavLink 
                    className= {
                      ({isActive}) => 
                        (isActive ? (setActiveBlogIcon(true), "menu-item active" ) : 
                        (setActiveBlogIcon(false), "menu-item"))
                    } 
                    reloadDocument
                    to={"/blog"}
                >
                  <div className="icon-and-menu">
                    <img className="menu-icon" src={activeBlogIcon ? BlogIconDark : BlogIconLight} alt="Blog" /> BLOG
                  </div>
                </NavLink>
            </div>

            <hr className="menu--hr"/>
            <div className="menu--social-medias">
            <a 
              target="_blank" 
              href="https://www.youtube.com/@truthByWill"
              rel="noopener noreferrer"
            >
              <img className="menu--social-icon social--icon" src={YoutubeIcon} alt="youtube"/>
            </a>

            <a 
              target="_blank" 
              href="https://www.facebook.com/truthByWill"
              rel="noopener noreferrer"
            >
              <img className="menu--social-icon social--icon" src={FacebookIcon} alt="facebook"/>
            </a>

            <a 
              target="_blank" 
              href="https://www.tiktok.com/@truth_bywill"
              rel="noopener noreferrer"
            >
              <img className="menu--social-icon social--icon" src={TiktokIcon} alt="tiktok"/>
            </a>

            <a 
              target="_blank" 
              href="https://t.me/truthByWill_yt"
              rel="noopener noreferrer"
            >
              <img className="menu--social-icon social--icon" src={TelegramIcon} alt="telegram"/>
            </a>
          </div>
        </Menu>
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

export default BurgerMenu