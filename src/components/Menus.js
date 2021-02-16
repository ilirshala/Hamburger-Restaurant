import React from "react";
import "../css/Menus.css";

function Menus() {
  return (
    <div className='menus'>
      <div className='menus__titles'>
        <h1>BURGERS AND SIDES</h1>
        <p>
          Our menu ranges from your old school to some mind blowing custom
          burgers and sides.
        </p>
      </div>
      <div className='menuItems'>
        <h3>The Classic</h3>
        <p>
          <i>angus ground brisket / american cheese/ fixins 13</i>
        </p>
      </div>
      <div className='menuItems'>
        <h3>The Baconator</h3>
        <p>
          <i>applewood smoked bacon/ guyere 15</i>
        </p>
      </div>
      <div className='menuItems'>
        <h3>Slap Your Face</h3>
        <p>
          <i>
            argentinian raised prime black angus chuck / poblano peppers /
            butter 12
          </i>
        </p>
      </div>
      <div className='menuItems'>
        <h3>Fries</h3>
        <p>
          <i>idaho potatoes / salt/ pepper 6</i>
        </p>
      </div>
      <div className='menuItems'>
        <h3>Boiled Peanuts</h3>
        <p>
          <i>not your planter's peanuts 2</i>
        </p>
      </div>
    </div>
  );
}

export default Menus;
