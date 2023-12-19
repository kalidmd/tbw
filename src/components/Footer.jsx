import React from 'react'
import { useTranslation } from "react-i18next";
import '../styles/footer.css'
import YoutubeIcon from '../assets/icon/youtube-white.png'
import FacebookIcon from '../assets/icon/facebook-white.png'
import TiktokIcon from '../assets/icon/tiktok-white.png'
import TelegramIcon from '../assets/icon/telegram-white.png'
import LocationIcon from '../assets/icon/location-white.png'
import EmailIcon from '../assets/icon/email-white.png'
import PhoneIcon from '../assets/icon/phone-white.png'
import TbwLogo from '../assets/logo/TBW_White_Transparent.png'

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="right-side-footer">
          {/* <img className='footer--tbw-logo' src={TbwLogo} alt="truth by will" /> */}
          <a style={{fontSize: "0"}} href="/"> 
            <img className="footer--tbw-logo" src={TbwLogo} alt="truth by will"/> 
          </a>

          <div className="guiding-social-container">
            <p className="guiding-people"> {t('guiding_people')} </p>
          
            <div className="social-medias">
              <a 
                target="_blank" 
                href="https://www.youtube.com/@truthByWill"
                rel="noopener noreferrer"
              >
                <img className="social--icon" src={YoutubeIcon} alt="youtube"/>
              </a>

              <a 
                target="_blank" 
                href="https://www.facebook.com/truthByWill"
                rel="noopener noreferrer"
              >
                <img className="social--icon" src={FacebookIcon} alt="facebook"/>
              </a>

              <a 
                target="_blank" 
                href="https://www.tiktok.com/@truth_bywill"
                rel="noopener noreferrer"
              >
                <img className="social--icon" src={TiktokIcon} alt="tiktok"/>
              </a>

              <a 
                target="_blank" 
                href="https://t.me/truthByWill_yt"
                rel="noopener noreferrer"
              >
                <img className="social--icon" src={TelegramIcon} alt="telegram"/>
              </a>
            </div>
          </div>
          
        </div>

        <div className="left-side-footer">
          <div className="email">
            <img
              className="email-icon address-icon" 
              src={EmailIcon} 
              alt="email icon" 
            /> 
            <p className="email-text address-text">info@truthbywill.org</p>
          </div>

          <div className="phone">
            <img
              className="phone-icon address-icon" 
              src={PhoneIcon} 
              alt="phone icon" 
            /> 
            <p className="phone-text address-text">+2519 11 75 30 88 | +2517 03 93 81 11</p>
          </div>

          <div className="location">
            <img
              className="location-icon address-icon" 
              src={LocationIcon} 
              alt="Location icon" 
            /> 
            <p className="location-text address-text">
              {t('country')}
              <br /> 
               {t('street')} 
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">© {t('truth_by_will')}</p>
    </footer>
  )
}

export default Footer