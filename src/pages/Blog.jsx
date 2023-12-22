import React from 'react'
// import BlogData from '../data/BlogData';
import { useTranslation } from "react-i18next";
import '../styles/blog.css'

function Blog() {     
  // const blogEl = BlogData.map(blog => {
  //   return (
  //     <div key={blog.id} className="blog-content">
  //       <h1 className="blog-title"> "{ blog.blogTitle }" </h1>
  //       {blog.date && <div className="blog-date-and-minute"> {blog.date} • {blog.min} {t('read')} </div>}
  //       <p className="blog-description"> {blog.blogContent} </p>
  //       <p className="blog-truth-by-will-hash"> {t('truth_by_will_hash')} </p>
  //     </div>
  //   )
  // }).reverse();
  
  const { t } = useTranslation();

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