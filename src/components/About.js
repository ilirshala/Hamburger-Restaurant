import React from "react";
import "../css/About.css";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";

function About() {
  return (
    <div className='about'>
      <h1>ONE PATTY AT A TIME</h1>
      <p>
        Edit this text to make it your own. To edit, simply click directly on
        the text to start adding your own words. You can move the text by
        dragging and dropping the text anywhere on the page. Try and keep the
        text under 50 words for readability.
      </p>

      <div className='about__imagesRow'>
        <div className='aboutRreshti'>
          <div className='colonaFoto'>
            <img src={about1} alt='' />
            <h3>WE'RE HERE TO SERVE YOU</h3>
            <p>
              You can move the text by dragging and dropping the Text Element
              anywhere on the page. Keep this text under 100 words for
              aesthetics and readability.
            </p>
          </div>
          <div className='colonaFoto'>
            <img src={about2} alt='' />
            <h3>A FAMILY GATHERING</h3>
            <p>
              Include information about how your company came to be. A strong
              “About” page helps establish credibility and professionalism and
              lets the visitor know more about you.
            </p>
          </div>
        </div>
        <div className='aboutRreshti'>
          <div className='colonaFoto'></div>
          <div className='colonaFoto'></div>
        </div>
      </div>
    </div>
  );
}

export default About;
