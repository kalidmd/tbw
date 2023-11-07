import React from 'react'
import Beki from '../assets/image/Beki.png'
import Yoni from '../assets/image/Yoni.png'

function Home() {
  return (
    <main>
      {/* 1ST SECTION QUOTE SECTION*/}
      <p className="quote">Life is not something to be hoped for tomorrow, but to be lived <b>NOW!</b></p>
      
      {/* 2ND SECTION ESSENTIAL THINGS*/}
      <section className="essential-container">
        <div className="essential-content">
          <p className='essential-header'>Essential things in life are given for free.</p>
          <p className='essential-paragraph'>Get the ultimate success in life through our weekly classes for free.</p>
          <button className="register-btn">
            Register Now
          </button>
        </div>
      </section>

      {/* 3RD SECTION LECTURES SECTION*/}
      <section className="lectures-container">
        <p className="lectures-header">
          Keep up with our weekly series of lessons with our lectures.
        </p>
        <div className="lectures-profile">
          <div className="lecture-profile">
            <img 
              className="lecture-image" 
              src={Yoni} alt="Yonatan Gena" 
            />
            <p className="lecture-name yoni">Yonatan Gena</p>
          </div>

          <div className="lecture-profile">
          <img 
              className="lecture-image" 
              src={Beki} alt="Bereket Teka" 
            />
            <p className="lecture-name beki">Bereket Teka</p>
          </div>
        </div>
      </section>

      {/* 4TH SECTION BLOG SECTION*/}
      <section className="blog-container">
        <div className="blog-content">
          <p className="blog-header">Blog</p>
          <p className="blog-paragraph">This a place holder where our daily or weekly blog posts are displayed. it could be a short lesson, quote or articles taken from our videos or from other sources.</p>
          <button className="blog-btn">View More</button>
        </div>
      </section>

      {/* 5TH SECTION LATEST VIDEOS*/}
      <section className="latest-video-container">
        <div className="latest-video-header">
          Latest Video
        </div>
        <iframe 
          src="https://www.youtube.com/embed/UXY4JhHgOfA?si=u5OGtIRfg2l2-cXU" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      </section>

      {/* 6TH SECTION SUBSCRIBE CHANNEL SECTION*/}
      <section className='channels-container'>
        <p className="channels-header">
          Subscribe our channel to stay <span className="tuned">TUNED.</span>
        </p>
        <div className="channels-grid">
          <div className="grid">Youtube iframe</div>
          <div className="grid">Facebook iframe</div>
          <div className="grid">Tiktok iframe</div>
          <div className="grid">Telegram iframe</div>
        </div>
      </section>
    </main>
  )
}

export default Home