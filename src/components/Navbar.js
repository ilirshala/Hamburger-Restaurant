import React, { useState } from "react";
import "../css/Navbar.css";
import MenuIcon from "../constants/MyMenuIcon";
import MySearchIcon from "../constants/MySearchIcon";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <MenuIcon />

        <h3>HAMBURGER'S</h3>
        <MySearchIcon />
      </div>
    </div>
  );
}

export default Navbar;
