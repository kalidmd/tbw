import React from 'react'
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
import YoutubeIcon from '../assets/icon/youtube-white.png'
import FacebookIcon from '../assets/icon/facebook-white.png'
import TiktokIcon from '../assets/icon/tiktok-white.png'
import TelegramIcon from '../assets/icon/telegram-white.png'


function BurgerMenu(props) {
  return (
    <BrowserRouter>
        <Menu>
            <div className="nav-links">
                <NavLink 
                    className={"menu-item"} 
                    reloadDocument 
                    to={"/"}
                >
                    HOME
                </NavLink>
                <NavLink 
                    className={"menu-item"} 
                    reloadDocument
                    to={"/attend"}
                >
                    ATTEND
                </NavLink>
                <NavLink 
                    className={"menu-item"} 
                    reloadDocument
                    to={"/videos"}
                >
                    VIDEOS
                </NavLink>
                <NavLink 
                    className={"menu-item"} 
                    reloadDocument
                    to={"/blog"}
                >
                    BLOG
                </NavLink>
            </div>

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