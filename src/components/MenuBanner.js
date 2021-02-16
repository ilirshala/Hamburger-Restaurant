import React from "react";
import "../css/MenuBanner.css";

function MenuBanner() {
  return (
    <div className='menuBanner'>
      <div className='titles'>
        <h3 className='subtitle'>only the best</h3>
        <h1 className='title'>BURGERS & SIDES</h1>
      </div>
      <div className='text'>
        <p>
          Our menu ranges from your old school to some mind blowing custom
          burgers and sides.
        </p>
      </div>
      <div className='prices'>
        <ul>
          <li>
            Classic Cheese Burger <span className='price1'>$13</span>
          </li>
          <li>
            Baconator Burger<span className='price2'>$15</span>
          </li>
          <li>
            Slap Your Face Burger<span className='price3'>$12</span>
          </li>
          <li>
            French Fies<span className='price4'>$6</span>
          </li>
          <li>
            Boiled Peanuts<span className='price5'>$2</span>
          </li>
          <li>
            Chilli Slices<span className='price6'>$2</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBanner;
