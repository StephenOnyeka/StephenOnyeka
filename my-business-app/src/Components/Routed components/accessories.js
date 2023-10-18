import React,{useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Footer1 from "../footer1/footer1";
import Footer2 from "../footer2/footer2";

import Data from "../products.json";

function Accessories() {
  const [items, setItems] = useState(Data);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 1000);
   });
  
  const Loading = () => {
    return (
      <>
        <div id="FeaturedProducts">
          <h1>Accessories</h1>
          <div className="featuredProducts_container">
            {items
              .filter((product) => product.category == "Accessories")
              .map((product) => (
                <div className="product_cards" key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <Skeleton height={240} width={240}/>
                  </Link>
                  <h4><Skeleton/></h4>
                  <span><Skeleton/></span>
                  <p><Skeleton/></p>
                </div>
              ))}
          </div>
        </div>

        {/* <hr /> */}

        <Footer1 />
        <Footer2 />
      </>
    );
  }

  const ShowProduct = () => {
    return (
      <>
      <div id="FeaturedProducts">
        <h1>Accessories</h1>
        <div className="featuredProducts_container">
          {items.filter((product)=> product.category == "Accessories")
            .map((product) => (
            <div className="product_cards" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt="" />
              </Link>
              <h4>{product.title}</h4>
              <span>{product.category}</span>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <Footer1 />
      <Footer2 />
      </>
    )
  }

  return (
    <>
      {loading? <Loading/> : <ShowProduct/>}
    </>
  );
}

export default Accessories;
