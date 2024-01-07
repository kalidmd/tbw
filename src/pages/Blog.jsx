import React from 'react'
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';
import '../styles/blog.css'

function Blog() {      
  const { t } = useTranslation();
  const currentLang = cookies.get('i18next');
  const styleFont = currentLang === 'am' ?  " 'Times New Roman', Times, serif " : " 'Maven Pro', sans-serif "
  document.body.style.fontFamily = styleFont;

  const blogs = t('blog_data', {returnObjects: true})

  const blogEl = blogs.map(blog => {
    return (
      <div key={blog.blog_title} className="blog-content">
        <h1 className="blog-title"> "{ blog.blog_title }" </h1>
        <div className="blog-date-and-minute"> {blog.date} • {blog.min} {t('read')} </div>
        <p className="blog-description"> {blog.blog_content} </p>
        <p className="blog-truth-by-will-hash"> {t('truth_by_will_hash')} </p>
      </div>
    )
  }).reverse();
  
  return (
    <div id="blog" className="blog-container">
      { blogEl }
    </div>
  )
}

export default Blog