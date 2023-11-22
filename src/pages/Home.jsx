import React from 'react'
import Register from '../components/Register';
import Beki from '../assets/image/Beki.png'
import YoniNew from '../assets/image/Yoni-New.png'
import blogData from '../data/blogData.json'

function Home() {
  console.log(blogData[blogData.length - 1].blogTitle);
  console.log(blogData[blogData.length - 1].blogContent);


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
          Keep up with our weekly series of lessons with our teachers.
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
      <section className="home--blog-container">
        <div className="home--blog-content">
          <p className="home--blog-header">Most Recent Blog Post</p>
          <p className="home--blog-title"> "{ blogData[blogData.length - 1].blogTitle }" </p>
          <p className="home--blog-description"> { blogData[blogData.length - 1].blogDescription }</p> 
          <a className="home--blog-link" href="/blog">
            <p className="home--blog-read-more"> Read More </p> <span className="read-more-arrow">→</span>
          </a>
          <div className="date-and-minute"> {blogData[blogData.length - 1].date} • {blogData[blogData.length - 1].min} READ </div>
          <p className="home--blog-written-by"> Written By: { blogData[blogData.length - 1].teacher } </p>
        </div>
      </section>

      {/* 5TH SECTION LATEST VIDEOS*/}
      <section className="latest-video-container">
        <div className="latest-video-header">
          Most Recent Video
        </div>

        <iframe 
          src="https://www.youtube.com/embed/?listType=playlist&list=UUFpXCQ1DeMRJk6rAZadtq8g" 
          loading="lazy"
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