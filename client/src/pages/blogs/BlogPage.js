import React, { useState, useEffect} from 'react';
import { NavLink as Link  } from 'react-router-dom';

import blogContent from '../../data/blog-content';
import CommentsList from './components/BlogCommentsList';
import AddCommentForm from './components/BlogsAddCommentForm';
import UpvotesSection from './components/BlogsUpvotes';

const BlogPage = ({ match }) => {
  const name = match.params.name;
  const blog = blogContent.find(blog => blog.name === name);
  // const otherBlogs = blogContent.filter(blog => blog.name !== name);
  const [blogInfo, setBlogInfo] = useState({
    upvotes: 0, comments: []
  });

  useEffect(()=> {
    const fetchData = async() => {
      const result = await fetch(`/api/blogs/${name}`)
      const body = await result.json();
      setBlogInfo(body);
    }
    fetchData();
    
  },[name])

  if (!blog) return null;

  return(
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="section-title">
              <h2>{blog.title}</h2>
            </div>
            <ol>
              <li><Link to="/blogs-list">Blogs</Link></li>
              <li>Blog Details</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="portfolio-details-container">
              {blog.content.map((paragraph, key) => (
                  <p key={key}>{paragraph}</p>
              ))}
            <UpvotesSection blogName={name} upvotes={blogInfo.upvotes} setBlogInfo={setBlogInfo} />
            <CommentsList  comments={blogInfo.comments}/>
            <AddCommentForm blogName={name} setBlogInfo={setBlogInfo}/>
            {/* <div className="related-blog">
              <h5>Related Blogs:</h5>
            </div>
            <BlogList blogs={otherBlogs} /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage;