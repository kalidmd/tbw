import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/burgermenu.css'
// ---PAGES---
import Home from '../pages/Home';
import Attend from '../pages/Attend';
// import Videos from '../pages/Videos';
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
// import VideoIconDark from '../assets/icon/video.png'
import BlogIconDark from '../assets/icon/blog.png'

import HomeIconLight from '../assets/icon/home-white.png'
import AboutUsIconLight from '../assets/icon/about-us-white.png'
import AttendIconLight from '../assets/icon/attend-white.png'
// import VideoIconLight from '../assets/icon/video-white.png'
import BlogIconLight from '../assets/icon/blog-white.png'

function BurgerMenu() {
  const [activeHomeIcon, setActiveHomeIcon] = useState(false)
  const [activeAboutIcon, setActiveAboutIcon] = useState(false)
  const [activeAttendIcon, setActiveAttendIcon] = useState(false)
  // const [activeVideoIcon, setActiveVideoIcon] = useState(false)
  const [activeBlogIcon, setActiveBlogIcon] = useState(false)

  const [backToTop, setBackToTop] = useState(false)

  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const notCurrentLanguageCode = currentLanguageCode === 'en' ? 'አማርኛ' : 'English';
  
  const [code, setCode] = useState(currentLanguageCode);
  const [changeBtn, setChangeBtn] = useState(notCurrentLanguageCode);

  const changeLang = () => {
    const newCode = code === 'en' ? 'am' : 'en';
    const newBtn = changeBtn === 'አማርኛ' ? 'English' : 'አማርኛ';
    setCode(newCode);
    setChangeBtn(newBtn);
    i18next.changeLanguage(newCode);
  }

  let backToTopId = "#essential"
  if(activeAboutIcon === true) {
    backToTopId = "#about"
  } else if (activeAttendIcon === true){
    backToTopId = "#attend"
  } else if (activeBlogIcon === true) {
    backToTopId = "#blog"
  }

  const scrollBack = () => {
    if(window.scrollY >= 350){
      setBackToTop(true)
    } else {
      setBackToTop(false)
    }
  }

  window.addEventListener('scroll', scrollBack);    

  return (
    <BrowserRouter>
      <a href={backToTopId}>
        <button className={backToTop ? "back-to-top active" : "back-to-top"}>
            <div className="arrow up"></div>
        </button>
      </a>
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
                    <img className="menu-icon" src={activeHomeIcon ? HomeIconDark : HomeIconLight} alt="Home"/> {t('home')}
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
                    <img className="menu-icon" src={activeBlogIcon ? BlogIconDark : BlogIconLight} alt="Blog" /> {t('blog')}
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
                    <img className="menu-icon" src={activeAttendIcon ? AttendIconDark : AttendIconLight} alt="Attend" /> {t('class')}
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
                    <img className="menu-icon" src={activeAboutIcon ? AboutUsIconDark : AboutUsIconLight } alt="About" /> {t('about')}
                  </div>
                </NavLink> 
    
            </div>

            <div className="menu--social-medias-cont">

              <div className="burger-lang-container">
                <span className="burger-lang-label">{t('lang')} </span> 
                <button 
                  onClick={changeLang} 
                  className="burger-lang-btn"
                > 
                  {changeBtn} 
                </button>
              </div>

              <hr className="menu--hr" />

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
          </div>
        </Menu>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/attend" element={<Attend/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default BurgerMenu