import React from 'react';
import { Link } from 'react-router-dom';

import BlogMetaInfo from './BlogMetaInfo';

const BlogsList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, key) => (
        <div className="blog-list-item" key={key} >
          <div className="blog-list-content">
            <h3><Link to={`/blog/${blog.name}`}>{blog.title}</Link></h3>
            <BlogMetaInfo name={blog.name}/>
            <div className="post-excerpt">
              <p>{blog.content[0].substring(0, 150)}...</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
};

export default BlogsList;