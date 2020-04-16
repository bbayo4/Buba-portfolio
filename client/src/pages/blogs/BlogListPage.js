import React from 'react';

import blogContent from '../../data/blog-content';
import BlogList from './components/BlogsList';

const BlogListPage = () => {
  return(
    <>
      <section id="portfolio" className="portfolio section-bg" data-aos="fade-right">
        <div className="container">
          <div className="section-title">
            <h2>Blogs</h2>
            <p>
              I write about web development and life as a developer.
            </p>
          </div>
          <BlogList blogs={blogContent} />
        </div>
      </section>
    </>
  )
}

export default BlogListPage;