import React from "react";
import "./Products.css";

function Product({ image, title, describe, price }) {
  return (
    <div className='product'>
      <div className='items'>
        <div className='image'>
          <img src={image} alt='ProductImage' />
        </div>
        <div className='others'>
          <div className='titleBurger'>
            <h3>{title}</h3>
          </div>
          <div className='descriptionPrice'>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>Describe:</span> {describe}
            </p>

            <p>
              <span style={{ fontWeight: "bold" }}>Price:</span> ${price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
