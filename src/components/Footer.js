import React from "react";
import "../css/Footer.css";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__titles'>
        <h1 className='subtitle'>come dine in</h1>
        <h1 className='title'>HOURS & LOCATION</h1>
      </div>
      <div className='footer__hours'>
        <div className='days'>
          <h2>Monday — Friday</h2>
          <h4>11pm — 9pm</h4>
        </div>
        <div className='days'>
          <h2>Saturday</h2>
          <h4>12pm — 6pm</h4>
        </div>
        <div className='days'>
          <h2>Sunday</h2>
          <h4>12pm — 5pm</h4>
        </div>
      </div>
      <div className='footer__place'>
        <div className='footer__adress'>
          <h1 className='adresstitle'>Hamburger's</h1>
          <h2 className='content'>1327 East Halik Street</h2>
          <h2 className='content'>Pearland, TX 99387</h2>
          <br />
          <h3 className='content'>​(818) 033-2016</h3>
        </div>
        <div className='footer__location'>
          <iframe
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=Pearland,%20TX%2099387&t=&z=13&ie=UTF8&iwloc=&output=embed'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
