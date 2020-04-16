import React from 'react';

import adventuresContent from './components/adventures-content';
import AdventuresList from './components/AdventuresList';

const AdventureListPage = () => {
  return(
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Adventures</h2>
          <p>Welcome to my typical bold, sometimes risky, exciting experiences around the world.</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-america">America</li>
              <li data-filter=".filter-africa">Africa</li>
              <li data-filter=".filter-europe">Europe</li>
              <li data-filter=".filter-asia">Asia</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <AdventuresList adventures={adventuresContent}/>
        </div>
      </div>
    </section>
  )
}

export default AdventureListPage;