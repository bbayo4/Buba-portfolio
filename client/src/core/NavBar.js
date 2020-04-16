import React from 'react';
import { NavLink as Link  } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-menu">
      <Link exact activeClassName="active" to="/"><i className="bx bx-home"></i> <span>Home</span></Link>
      <Link exact activeClassName="active" to="/resume"><i className="bx bx-file-blank"></i> <span>Resume</span></Link>
      <Link exact activeClassName="active" to="/adventure-list"><i className="bx bx-book-content"></i>Adventure</Link>
      <Link exact activeClassName="active" to="/blogs-list"><i className="bx bx-user"></i>Blog</Link>
      <Link exact activeClassName="active" to="/contacts"><i className="bx bx-envelope"></i>Contact</Link>
      {/* <ul>
        <li className="active"><Link to="/"><i className="bx bx-home"></i> <span>Home</span></Link></li>
        <li><Link to="/resume"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
        <li><Link to="/portfolio"><i className="bx bx-book-content"></i>Portfolio</Link></li>
        <li><Link to="/blogs-list"><i className="bx bx-user"></i>Blog</Link></li>
        <li><Link to="/contacts"><i className="bx bx-envelope"></i>Contact</Link></li>
      </ul> */}
    </nav>
    
  )
}

export default NavBar;