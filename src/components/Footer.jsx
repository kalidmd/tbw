import React from 'react'
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
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className='footer--tbw-logo' src={TbwLogo} alt="truth by will" />

        <div className="right-side-footer">
          <p className="guiding-people">Guiding people to fell the TRUTH that leads to life.</p>
        
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

      <div className="address">
        <div className="email">
          <img
            className='email-icon' 
            src={EmailIcon} 
            alt="email icon" 
          /> 
          <p className="email-text">info@truthbywill.org</p>
        </div>

        <div className="phone">
          <img
            className='phone-icon' 
            src={PhoneIcon} 
            alt="phone icon" 
          /> 
          <p className="phone-text">+2519 11 75 30 88 | +2517 03 93 81 11</p>
        </div>

        <div className="location">
          <img
            className='location-icon' 
            src={LocationIcon} 
            alt="Location icon" 
          /> 
          <p className="location-text">
            Addis Ababa, Ethiopia
            <br /> 
            Hayat Hospital to bole brass road, TGL building, 4th floor. 
          </p>
        </div>
      </div>

      <p className="copyright">© Truth By Will</p>
    </footer>
  )
}

export default Footer