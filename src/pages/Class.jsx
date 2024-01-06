import React from 'react'
import { useTranslation } from "react-i18next";
import '../styles/attend.css'
import Register from '../components/Register';
import TglBuilding from '../assets/image/tgl-buil.jpg'
import ClassRoom from '../assets/image/our-classroom.jpg'

function Class() {
  const { t } = useTranslation();

  return (
    <div id="class" className="class-container">
      <div className="classroom-container">
        <div className="classroom">
          <img className="classroom-img" src={ClassRoom} alt="classroom" />
          <p className="classroom-label"> {t('truth_by_will')} {t('classroom')}</p>
        </div>

        <p className="attend-text">
          {t('attend_text')} 
          <br />
          <br />
          {t('attend_for_more_info')}
        </p>
      </div>


      <div className="map-and-reg-form">
        <div className="attend-map-container">
          <p className="attend-map-label"> {t('attend_map_label')} </p>
          <iframe 
            className="attend-map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1335.9028812292086!2d38.79457822889989!3d8.991662178880802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85632f825785%3A0x6d746b5b49de4dc1!2z4Yql4YuN4YqQ4Ym14YqVIOGJoOGNjeGJg-GLtSB8IFRydXRoIEJ5IFdpbGw!5e0!3m2!1sen!2set!4v1701344232100!5m2!1sen!2set" 
            title="truth by will location"
            allowfullscreen="" 
            style={{border: 0}}
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <Register />
      </div>

      <div className="tgl-buil">
          <p className="tgl-buil-label"> {t('tgl_label')} </p>
          <img className="tgl-buil-img" src={TglBuilding} alt="TGL Building" />
        </div>
    </div>
  )
}

export default Class