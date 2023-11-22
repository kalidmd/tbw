import React from 'react'
import blogData from '../data/blogData.json'
import '../styles/blog.css'

function Blog() {
  const blogEl = blogData.map(blog => {
    return (
      <div key={blog.id} className="blog-content">
        <h1 className="blog-title"> "{ blog.blogTitle }" </h1>
        <p className="blog-description"> {blog.blogContent} </p>
        <p className="blog-teacher"> Written By: { blog.teacher } </p>
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