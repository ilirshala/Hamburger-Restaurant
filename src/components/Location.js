import React from "react";
import "../css/Location.css";

function Location() {
  return (
    <div className='location'>
      <div className='top'>
        <h1>3 Locations Ready to Serve You in Pearland</h1>
        <p>Select this theme to customize and add content to this page.</p>
      </div>
      <div className='map'>
        <iframe
          allowtransparency='true'
          frameborder='0'
          scrolling='no'
          src='//www.weebly.com/weebly/apps/generateMap.php?map=google&amp;elementid=655809007870405617&amp;ineditor=0&amp;control=3&amp;width=auto&amp;height=300px&amp;overviewmap=0&amp;scalecontrol=0&amp;typecontrol=0&amp;zoom=15&amp;long=-95.28604740000003&amp;lat=29.5635666&amp;domain=www&amp;point=1&amp;align=1&amp;reseller=false'></iframe>
      </div>
      <div className='adresses'>
        <div className='adress1'>
          <h3>185 Cedar St</h3>
          <p> 713.237.2485</p>
        </div>
        <div className='adress1'>
          <h3>17 Brookside Rd</h3>
          <p> 713.394.2834</p>
        </div>
        <div className='adress1'>
          <h3>124 W Orem Dr</h3>
          <p> 713.364.8462</p>
        </div>
      </div>
      <div className='paragrafiFooter'>
        <p>
          Edit this text to make it your own. To edit, simply click directly on
          the text and start typing. You can move the text by dragging and
          dropping the Text Element anywhere on the page. Break up your text
          with more than one paragraph for better readability.
        </p>
      </div>
    </div>
  );
}

export default Location;
