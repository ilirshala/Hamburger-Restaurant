import React from "react";
import "../css/HamburgerProd.css";
import Product from "../constants/Product";
import hamburger1 from "../img/hamburger1.jpg";
import hamburger2 from "../img/hamburger2.jpg";
import hamburger3 from "../img/hamburger3.jpg";

function HamburgerProd() {
  return (
    <div className='hamburgerRow'>
      <div className='hamburgerCol'>
        <h4 style={{ textAlign: "center" }}>You searched for hamburgers</h4>
        <Product
          image={hamburger1}
          title='Home Burger'
          describe='Sometimes, there’s nothing better than a cheeseburger—fresh off the grill, piping hot, and oozing with melted cheese and condiments. In this roundup, we’ve gathered some of our favorite recipes, including creative burgers topped with cheddar, smoked gouda, stilton, and more.  '
          price={21}
        />
        <Product
          image={hamburger2}
          title='Classic Burger'
          describe='A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. '
          price={15}
        />
        <Product
          image={hamburger3}
          title='Fish Sandwich'
          describe='A fish sandwich is, most generally, any kind of sandwich made with fish. The term is frequently used to describe food made with breaded, fried fish, which are commonly found in fast food venues. '
          price={21}
        />
      </div>
    </div>
  );
}

export default HamburgerProd;
