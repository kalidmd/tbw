import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { BrowserRouter, NavLink } from 'react-router-dom';
import '../styles/navbar.css'
import TbwLogo from "../assets/logo/TBW_White_Transparent.png"
import YoutubeIcon from '../assets/icon/youtube-white.png'

function NavBar() {
  // -----navbar scroll state-----
  const [navBar, setNavBar] = useState(false);
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const notCurrentLanguageCode = currentLanguageCode === 'en' ? 'አማ' : 'EN';
  
  const [code, setCode] = useState(currentLanguageCode);
  const [changeBtn, setChangeBtn] = useState(notCurrentLanguageCode);

  const changeLang = () => {
    const newCode = code === 'en' ? 'am' : 'en';
    const newBtn = changeBtn === 'አማ' ? 'EN' : 'አማ';
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
                to={"/attend"}
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
              <button 
                onClick={changeLang} 
                className="nav-lang-btn"
              > 
                {changeBtn} 
              </button>
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