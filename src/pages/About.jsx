import React from 'react'
import { useTranslation } from "react-i18next";
import '../styles/about.css'
function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <p className="about-title"> {t('who_we_are')} </p>
        <p className="about-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat odit nulla iure hic maiores quis ullam, fugit ducimus, vel mollitia reiciendis ab dolorum ea. Eligendi nobis voluptas eaque perferendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat odit nulla iure hic maiores quis ullam, fugit ducimus, vel mollitia reiciendis ab dolorum ea. Eligendi nobis voluptas eaque perferendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat odit nulla iure hic maiores quis ullam, fugit ducimus, vel mollitia reiciendis ab dolorum ea. Eligendi nobis voluptas eaque perferendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat odit nulla iure hic maiores quis ullam, fugit ducimus, vel mollitia reiciendis ab dolorum ea. Eligendi nobis voluptas eaque perferendis!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur placeat odit nulla iure hic maiores quis ullam, fugit ducimus, vel mollitia reiciendis ab dolorum ea. Eligendi nobis voluptas eaque perferendis!
        </p>
      </div>


      <div className="about-content">
        <p className="about-title"> {t('our_aim')} </p>
        <p className="about-description">
          This is a place through which we convey teachings from truth to human beings with humility and love, and the purpose is that through the knowledge revealed in this site, they will use their free will to make lifechanging decision. Thus, our primary aim is to present a call of love that presents humanity opportunity to regain its “natural identity” - lost for many generations - through “life lessons”. The lessons are for all mankind regardless of their race, gender, age, standard of living, religion, skin color or political opinion. We use plain language to express profound truths and communicate rather complex concepts; but of course, without compromising the logical explanations of the foundational issues discussed or distorting the content of fundamental ideas; and ensuring the channel is suitable for all types of viewers. We are too familiar with the message we are transferring, that we are confident its articulations are complete and precise. 
        </p>
      </div>  
    </div>
  )
}

export default About