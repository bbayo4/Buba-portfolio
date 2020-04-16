import React from 'react';

import NavBar from './NavBar';

const Header = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src="/assets/img/profile-img3.jpg" alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light text-center"><a href="index.html">Buba Bayo</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://www.linkedin.com/in/buba-bayo-734887132/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/bbayo4" className="github"><i className="bx bxl-github"></i></a>
            <a href="https://stackoverflow.com/users/4817782/builda" className="stack-overflow"><i className="bx bxl-stack-overflow"></i></a>
            <a href="https://twitter.com/nabpstar" className="twitter"><i className="bx bxl-twitter"></i></a>
          </div>
        </div>
        <NavBar />
        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
      </div>
    </header>
  )
}

export default Header;