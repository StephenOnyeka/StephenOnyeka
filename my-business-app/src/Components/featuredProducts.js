import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Data from "./products.json";

import globe from "./logos/globe-free-img.png";
import lock from "./logos/lock-free-img.png";
import quality from "./logos/quality-free-img.png";
import tag from "./logos/tag-free-img.png";

function FeaturedProducts() {
  return (
    <div className="BG">
      <div id="FeaturedProducts">
        <p id="h4">
          Featured Products
          <div className="element-widget-divider">
            <span className="element-divider-seperator"></span>
          </div>
        </p>
        {/* <div className="element-widget-container"> </div> */}
        <div className="featuredProducts_container">
          {Data.map((product) => (
            <div className="product_cards" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt="" />
              </Link>
                <h4>{product.title}</h4>
                <span>{product.category}</span>
                <p>${product.price}</p>
              
            </div>
          ))}

          {/* <div className="product_cards">
            <a href="">
              <img src="\images\Products\A-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div> */}
        </div>
      </div>

      <div id="midBackground">
        <div className="midBackground_container">
          <div className="midBackground_content">
            <h4>Limited Time Offer</h4>
            <h1> Special Edition</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              voluptatem <br />
              nostrum tempora aliquid. Cumque expedita animi nulla reiciendis.
            </p>
            <h4>Buy This T-shirt At 20% Discount, Use Code OFF20</h4>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <div id="whyMe">
        <div className="whyMe_container">
          <div className="description">
            <img src={globe} alt="" />
            <h3>Worldwide Shipping</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
          <div className="description">
            <img src={quality} alt="" />
            <h3>Best Quality</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
          <div className="description">
            <img src={tag} alt="" />
            <h3>Best Offers</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
          <div className="description">
            <img src={lock} alt="" />
            <h3>Secure Payments</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
