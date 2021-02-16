import React from "react";
import MyButton from "../constants/MyButton";
import "../css/Testimonials.css";
import test1 from "../img/test1.png";
import test2 from "../img/test2.jpg";

function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='row'>
        <div className='colonaFotos'>
          <img src={test1} alt='' />
        </div>
        <div className='colonaTekstit'>
          <h2 className='subtitle'>always expect</h2>
          <h1 className='title'>GREAT TASTE, GOOD TIMES</h1>
          <p className='teksti'>
            Here at Barney’s Burgers we take pride in the quality of the meat
            used for each and every burger. If it’s not perfect and grilled just
            the way you ordered it, we won’t send it out. We guarantee the
            burger delivered to your table is the best burger you could have
            ordered.
          </p>
          <MyButton name='see our fresh ingredients' />
        </div>
      </div>
      <br />
      <br />
      <div className='row2'>
        <div className='colonaTekstit'>
          <h2 className='subtitle'>local craft</h2>
          <h1 className='title'>BARLEY & HOPS</h1>
          <p className='teksti'>
            No good burger is complete without that refreshing taste of local
            Bounder bottle Cola. We have over 20 various drinks on tap, and a
            full bar for your carbonated drinks lovers. From Cola zero to
            Schweppes, we have the liquids to cwinch your thrist.
          </p>
          <MyButton name='see our list of drinks' />
        </div>
        <div className='colonaFotos'>
          <img src={test2} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
