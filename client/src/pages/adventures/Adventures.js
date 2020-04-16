import React, { useRef } from 'react';
import { NavLink as Link  } from 'react-router-dom';

import adventuresContent from './components/adventures-content';

import OwlCarousel from 'react-owl-carousel2';

const AdventurePage = ({match}) => {
  const imgCarousel = useRef();
  const name = match.params.name;
  const adventure = adventuresContent.find(adventure => adventure.name === name);
  const carouselOptions = {
    items: 2,
    nav: true,
    rewind: true,
    autoplay: true
  };

  if (!adventure) return null;
  
  return(
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Adventure Details</h2>
            <ol>
              <li><Link to="/adventure-list">Adventure</Link></li>
              <li>Adventure Details</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="portfolio-details-container">
            <OwlCarousel ref={imgCarousel} options={carouselOptions} >
              {
                adventure.img.map((img, key) => (
                  <img key={key} src={`/${img}`} className="img-fluid" alt="" />
                ))
              }
            </OwlCarousel>
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>State</strong>: {adventure.title}</li>
                <li><strong>Capitol</strong>: {adventure.capitol}</li>
                <li><strong>Motto</strong>: {adventure.motto}</li>
                <li><strong>Region</strong>: {adventure.region}</li>
              </ul>
            </div>
          </div>
          <div className="portfolio-description">
            <h2>{adventure.title}</h2>
            {adventure.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AdventurePage;