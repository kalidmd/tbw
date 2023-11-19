import React, {useEffect} from 'react'
import Register from '../components/Register';
import Beki from '../assets/image/Beki.png'
import YoniNew from '../assets/image/Yoni-New.png'

function Home() {
  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js" 
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return (
    <main>
      {/* 1ST SECTION QUOTE SECTION*/}
      <p  id="qoute" className="quote">Life is not something to be hoped for tomorrow, but to be lived <b>NOW!</b></p>
      
      {/* 2ND SECTION ESSENTIAL THINGS*/}
      <section className="essential-container">
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
          Keep up with our weekly series of lessons with our lectures.
        </p>
        <div className="lectures-profile">
          <div className="lecture-profile">
            <img 
              className="lecture-image" 
              src={YoniNew} alt="Yonatan Gena" 
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
        <div id="blog-content" className="blog-content">
          <p className="blog-header">Blog</p>
          <p className="blog-paragraph">This a place holder where our daily or weekly blog posts are displayed. it could be a short lesson, quote or articles taken from our videos or from other sources.</p>
          <button className="blog-btn">View More</button>
        </div>
      </section>

      {/* 5TH SECTION LATEST VIDEOS*/}
      <section className="latest-video-container">
        <div className="latest-video-header">
          Most Recent Video
        </div>
        <iframe 
          src="https://www.youtube.com/embed/?listType=playlist&list=UUFpXCQ1DeMRJk6rAZadtq8g" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      </section>
      <Register/>
    </main>
  )
}

export default Home