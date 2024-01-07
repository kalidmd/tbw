import React from 'react'
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';
import '../styles/about.css'

function About() {
  const { t } = useTranslation();
  const currentLang = cookies.get('i18next');
  const styleFont = currentLang === 'am' ?  " 'Times New Roman', Times, serif " : " 'Maven Pro', sans-serif "
  document.body.style.fontFamily = styleFont;

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <p className="about-title"> {t('who_we_are')} </p>
        <p className="about-description">
          {t('who_we_are_description')}
        </p>
      </div>


      <div className="about-content">
        <p className="about-title"> {t('our_aim')} </p>
        <p className="about-description">
         {t('our_aim_description')} 
        </p>
      </div>  
    </div>
  )
}

export default About