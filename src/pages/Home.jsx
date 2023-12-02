import React from 'react'
import Register from '../components/Register';
import Bereket from '../assets/image/Bereket-close.png'
import Yonatan from '../assets/image/Yonatan-close.png'
import BlogData from '../data/BlogData'


function Home() {
  
  
  return (
    <main>
      {/* 1ST SECTION QUOTE SECTION*/}
      {/* <p  id="qoute" className="quote">Life is not something to be hoped for tomorrow, but to be lived <b>NOW!</b></p> */}
      
      {/* 2ND SECTION ESSENTIAL THINGS*/}
      <section id="essential" className="essential-container">
        <div className="essential-content">
          <p className='essential-header'>Essential things in life are given for free.</p>
          <p className='essential-paragraph'>Get the ultimate success in life through our weekly classes for free.</p>
          <a href="#reg-form">
            <button className="register-btn"> Register Now </button>
          </a>
        </div>
      </section>

      {/* 3RD SECTION LECTURES SECTION*/}
      <section className="lectures-container">
        <p className="lectures-header">
          Keep up this journey with our teachers.
        </p>
        <div className="lectures-profile">
          <div className="lecture-profile">
            <img 
              className="lecture-image" 
              src={Yonatan} alt="Yonatan Gena" 
            />
            <p className="lecture-name yoni">Yonatan Gena</p>
          </div>

          <div className="lecture-profile">
          <img 
              className="lecture-image" 
              src={Bereket} alt="Bereket Teka" 
            />
            <p className="lecture-name beki">Bereket Teka</p>
          </div>
        </div>
      </section>

      {/* 4TH SECTION BLOG SECTION*/}
      <section className="home--blog-container">
        <div className="home--blog-content">
          <p className="home--blog-header">Most Recent Blog Post</p>
          <p className="home--blog-title"> "{ BlogData[BlogData.length - 1].blogTitle }" </p>
          <p className="home--blog-description"> { BlogData[BlogData.length - 1].blogDescription }</p> 
          <a className="home--blog-link" href="/blog">
            <p className="home--blog-read-more"> Read More </p> <span className="read-more-arrow">→</span>
          </a>
          <div className="date-and-minute"> {BlogData[BlogData.length - 1].date} • {BlogData[BlogData.length - 1].min} READ </div>
          <p className="home--blog-truth-by-will-hash">#truth_by_will</p>
        </div>
      </section>

      {/* 5TH SECTION LATEST VIDEOS*/}
      <section className="latest-video-container">
        <div className="latest-video-header">
          Most Recent Video
        </div>

        <iframe 
          className="youtube-iframe"
          src="https://www.youtube.com/embed/?listType=playlist&list=UUFpXCQ1DeMRJk6rAZadtq8g" 
          loading="lazy"
          title="YouTube video player" 
          // frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      </section>
      
      <div className="home-map map-and-reg-form">
        <iframe 
            className="home-map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1335.9028812292086!2d38.79457822889989!3d8.991662178880802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85632f825785%3A0x6d746b5b49de4dc1!2z4Yql4YuN4YqQ4Ym14YqVIOGJoOGNjeGJg-GLtSB8IFRydXRoIEJ5IFdpbGw!5e0!3m2!1sen!2set!4v1701344232100!5m2!1sen!2set" 
            title="truth by will location"
            allowfullscreen="" 
            style={{border: 0}}
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        
        <Register/>
      </div>
    </main>
  )
}

export default Home