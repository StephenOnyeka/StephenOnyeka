import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import Footer1 from "../footer1/footer1";
import Footer2 from "../footer2/footer2";

import Data from "../products.json";


function Women() {
    const [items, setItems] = useState(Data);

  return (
    <>
      <div id="FeaturedProducts">
        <h1>Women</h1>
        <div className="featuredProducts_container">
          {items
            .filter((product) => product.category == "Women")
            .map((product) => (
              <div className="product_cards">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt="" />{" "}
                </Link>
                <h4>{product.title}</h4>
                <span>{product.category}</span>
                <p>${product.price}</p>
              </div>
            ))}
          {/* <div className="product_cards">
              <img src="\images\Products\2.jpg" alt="" />
              <h4>Red Printed T-shirts</h4>
              <span>Men</span>
              <p>$50.00</p>
            </div> */}
        </div>
      </div>

      <hr />

      <Footer1 />
      <Footer2 />
    </>
  );
}

export default Women