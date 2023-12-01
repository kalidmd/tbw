import React from 'react'
import '../styles/attend.css'
import Register from '../components/Register';
import TglBuilding from '../assets/image/tgl-buil.jpg'
import ClassRoom from '../assets/image/our-classroom.jpg'

function Attend() {
  return (
    <div id="attend" className="attend-container">
      
      {/* <p className="attend-content">
        ዘውትር እሁድ ከ 4:30 - 6፡00 ሰዓት የአንድ ሰዓት ተኩል ክፍለ ጊዜ የሚወስድ  የመግቢያ ትምህርት ስላለን ምቹ በሆነው የትምህርት ስፍራችን በአካል በመገኘት በነጻ መታደም ይችላሉ። ለበለጠ መረጃ በ +2519 11 75 30 88 ወይም በ +2517 03 93 81 11 ይደውሉልን፤ አልያም ከዚህ በታች ባለው ፎርም በመመዝገብ ቀጥታ የመግቢያ ትምህርታችንን ይካፈሉ።
      </p> */}
      
      <div className="classroom">
        <img className="classroom-img" src={ClassRoom} alt="classroom" />
        <p className="classroom-label">Truth By Will Classroom</p>
      </div>

      <p className="attend-text">
        You can attend our introduction class in person for free at our convenient classroom every Sunday from 10:30 AM - 12:00 AM that lasts for an hour and a half. 
        <br />
        For more information, call us at +2519 11 75 30 88 or +2517 03 93 81 11. You can also <a href="#reg-form">register</a> in the form below to join our introductory class straight away.
      </p>

      <Register />

      <div className="tgl">
        <p className="tgl-label">We are at TGL BLDG, 4th FLOOR</p>
        <img  className="tgl-img" src={TglBuilding} alt="TGL Building" />
      </div>

      <div className="map-container">
        <p className="map-label"> Find Us On Google Map </p>
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
    </div>
  )
}

export default Attend