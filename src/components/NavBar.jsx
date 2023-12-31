import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { BrowserRouter, NavLink } from 'react-router-dom';
import '../styles/navbar.css'

import etFlag from '../assets/image/et-flag.png'
import usFlag from '../assets/image/us-flag.png'
import TbwLogo from "../assets/logo/TBW_White_Transparent.png"
import YoutubeIcon from '../assets/icon/youtube-white.png'

function NavBar() {
  // -----navbar scroll state-----
  const [navBar, setNavBar] = useState(false);
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const notCurrentLanguageCode = currentLanguageCode === 'en' ? etFlag : usFlag;
  
  const [code, setCode] = useState(currentLanguageCode);
  const [changeBtn, setChangeBtn] = useState(notCurrentLanguageCode);
  
  const changeLang = () => {
    const newCode = code === 'en' ? 'am' : 'en';
    const newBtn = changeBtn === etFlag ? usFlag : etFlag;
    setCode(newCode);
    setChangeBtn(newBtn);
    i18next.changeLanguage(newCode);
  }

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
              {t('home')}
            </NavLink>
          
            <NavLink 
                className= {
                  ({isActive}) => 
                    (isActive ? "nav-page-item active" :  "nav-page-item")
                } 
                reloadDocument
                to={"/blog"}
            >
              {t('blog')}   
            </NavLink>

            <NavLink 
                className={
                  ({isActive}) => 
                    (isActive ? "nav-page-item active" : "nav-page-item")
                } 
                reloadDocument
                to={"/class"}
            >
              {t('class')}
            </NavLink>

            <NavLink 
                className={
                  ({isActive}) => 
                    (isActive ? "nav-page-item active" : "nav-page-item")
                } 
                reloadDocument
                to={"/about"}
            >
              {t('about')}
            </NavLink> 
          </div>
          
          <div className="lang-youtube-cont">
            <div className="nav-lang-container">
              {/* <span className="lang-label">{t('lang')} </span>  */}
              <div 
                onClick={changeLang} 
                className="nav-lang-btn"
              > 
                <img className="flag" src={changeBtn} alt="flag" /> 
              </div>
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

        </div>

      </nav>

    </BrowserRouter>
  )
}

export default NavBar