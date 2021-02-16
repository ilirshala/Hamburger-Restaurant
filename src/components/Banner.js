import React from "react";
import "../css/Banner.css";
import MyButton from "../constants/MyButton";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className='banner'>
      <div className='banner__content'>
        <div className='banner__title'>
          <h1>LOCAL BURGERS DONE RIGHT</h1>
        </div>
        <div className='banner__paragraph'>
          <p>Join us for your next meal. We get the juices flowing</p>
        </div>
        <div className='banner__button'>
          <Link to='/menus'>
            <MyButton name='OUR MENU' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
