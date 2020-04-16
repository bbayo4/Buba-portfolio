import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const AdventuresList = ({adventures}) => {
  return(
    <>
      {
        adventures.map((adventure, key) =>(
          <div key={key} className={`col-lg-4 col-md-6 portfolio-item ${adventure.filter}`}>
            <div className="portfolio-wrap">
              <img src={adventure.img[0]} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={adventure.img[0]} data-gall="portfolioGallery" className="venobox" title={adventure.name}><i className="bx bx-plus"></i></a>
                <Link to={`/adventure/${adventure.name}`}><i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default AdventuresList;