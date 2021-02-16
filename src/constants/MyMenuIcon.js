import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./MenuIcon.css";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

function MyMenuIcon() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='myMenuIcon'>
      <div className='navigation'>
        <ul style={{ transform: showMenu ? "translateY(0px)" : "" }}>
          <div className='logo'>
            <CloseOutlinedIcon
              style={{
                fontSize: "55px",
                cursor: "pointer",
                marginRight: "10px",
                float: "right",
              }}
              onClick={() => setShowMenu(!showMenu)}
            />
            <br />
            <br />
            <br />
          </div>
          <Link to='/' onClick={() => setShowMenu(!showMenu)}>
            <li>Home</li>
          </Link>
          <Link to='/about' onClick={() => setShowMenu(!showMenu)}>
            <li>About</li>
          </Link>
          <Link to='/menus' onClick={() => setShowMenu(!showMenu)}>
            <li>Menu</li>
          </Link>
          <Link to='/location' onClick={() => setShowMenu(!showMenu)}>
            <li>Location</li>
          </Link>
        </ul>
      </div>

      <div className='menuIcon'>
        {showMenu ? (
          <IconButton>
            <MenuIcon
              onClick={() => setShowMenu(!showMenu)}
              style={{ display: "none" }}
            />
          </IconButton>
        ) : (
          <IconButton>
            <MenuIcon
              onClick={() => setShowMenu(!showMenu)}
              style={{ color: "black" }}
            />
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default MyMenuIcon;
