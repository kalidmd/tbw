import React from 'react'
import BlogData from '../data/BlogData';
import '../styles/blog.css'

function Blog() {   
  // console.log(BlogData[BlogData.length - 1].blogContent);
  // const updatedBlog = BlogData[BlogData.length - 1].blogContent.replace(/n/, "<br />");
  // console.log(updatedBlog);
  // const breakPattern = /n/;
  // const replacement = "<br />";
  const blogEl = BlogData.map(blog => {
    return (
      <div key={blog.id} className="blog-content">
        <h1 className="blog-title"> "{ blog.blogTitle }" </h1>
        {blog.date && <div className="blog-date-and-minute"> {blog.date} • {blog.min} READ </div>}
        <p className="blog-description"> {blog.blogContent} </p>
        <p className="blog-truth-by-will-hash"> #truth_by_will </p>
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