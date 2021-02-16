import React from "react";
import "../css/FooterNav.css";
import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <div className='footer__navigation'>
      <div className='footer__navItems'>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
        <Link to='/about'>
          <h2>About</h2>
        </Link>
        <Link to='/menus'>
          <h2>Menu</h2>
        </Link>
        <Link to='/location'>
          <h2>Locations</h2>
        </Link>
      </div>
    </div>
  );
}

export default FooterNav;
