import React from "react";
import Product from "../constants/Product";
import "../css/PizzaProd.css";
import pizza1 from "../img/pizza1.jpg";
import pizza2 from "../img/pizza2.jpg";
import pizza3 from "../img/pizza3.jpg";

function PizzaProd() {
  return (
    <div className='pizzaRow'>
      <div className='pizzaCol'>
        <h4 style={{ textAlign: "center" }}>You searched for pizza</h4>
        <Product
          image={pizza1}
          title='Pizza with Egg'
          describe='Pizza is the world’s greatest food. Nothing says “I love you,” “I’m sorry,” or “Let’s be friends,” better than pizza. It’s a universal love language, and is perfect at any time, for any occasion, especially when you don’t know what to say.  '
          price={22}
        />
        <Product
          image={pizza2}
          title='Pizza with Egg'
          describe='
          I Love Pizza. I want to marry it but it would just be to eat her family at the weedings. '
          price={22}
        />
        <Product
          image={pizza3}
          title='Cheese Pizza'
          describe='
            I Love Pizza, Meaning: Even when i’m in the middle of eating pizza, I wish I were eating pizza.
          '
          price={22}
        />
      </div>
    </div>
  );
}

export default PizzaProd;
