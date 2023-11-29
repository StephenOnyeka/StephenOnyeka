import React, { useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Data from "./products.json";
import Modal from "react-modal";

function ProDes({ addToCart }) {
  const [products, setProducts] = useState(Data);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const product = Data.find((product) => product.id === parseInt(id));

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      width: "260px", 
      height: "90px",
      margin: "auto",
      top: "50px", 
      transform: "translateY(-180%)", 
    },
  };

  const function1 = () => {
    addToCart(product);
  };
  const handleClick = () => {
    function1();
    // showAlert();
    openModal();
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Data.length);
    setProducts(Data[randomIndex]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const Loading = () => {
    return (
      <>
        <div id="productDescription">
          <div className="productDescription_container">
            <div className="productDescription_content-1">
              <section>
                <Skeleton height={450} width={400} />
              </section>

              <section>
                <p>
                  <Skeleton />
                  <p>
                    <Skeleton width={150} />
                    <h1>
                      <Skeleton />
                    </h1>
                  </p>
                </p>
                <h2>
                  <Skeleton />
                </h2>
                <p>
                  <Skeleton height={140} />
                </p>
                <Skeleton width={100} />
              </section>
            </div>

            <div className="productDescription_content-2">
              <nav id="inline-navlink">
                <Link to="description">Description</Link>
                <Link to="reviews">Reviews</Link>
              </nav>
              <Skeleton height={120} />
            </div>

            <div className="productDescription_content-3">
              <p>Related Products</p>
              {products ? (
                <div key={products.id} className="relatedProducts_container">
                  <div className="relatedProducts_cards">
                    <Link to={`/product/${products.id}`}>
                      <Skeleton height={240} width={240} />
                    </Link>
                    <h4>
                      <Skeleton height={60}/>
                    </h4>
                  </div>
                </div>
              ) : (
                <p><b>404 Error...</b> Page Not Found!</p>
              )}
            </div>
          </div>
          {/* <button onClick={() => navigate(-1)}> Go back</button> */}
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div>
          {/* <button onClick={openModal}>Show Alert</button>         */}
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <div className="alert">
              <p> Your product is added to cart!</p>
              <button>
                <Link to="/cart"> See cart</Link>
              </button>
              {/* <button onClick={closeModal}>Close</button> */}
            </div>
          </Modal>

          {product ? (
            <>
              <div id="productDescription">
                <div className="productDescription_container">
                  <div className="productDescription_content-1">
                    <section id="im_sec">
                      <img src={product.image} />
                    </section>

                    <section>
                      <p>
                        Home/ {product.category}/ {product.title}
                        <p>
                          {product.category}
                          <h1>{product.title}</h1>
                        </p>
                      </p>
                      <h2>
                        ${product.price} <span>+ Free Shipping</span>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam aperiam dolorum dolores, rem minima delectus nisi
                        eveniet beatae? Non eligendi laudantium officia dolorum
                        error similique magni, distinctio veritatis molestiae
                        voluptatum.
                      </p>
                      <button onClick={handleClick}>ADD TO CART</button>
                      <br />
                      <hr />
                      <p>Category: {product.category}</p>
                    </section>
                  </div>

                  <div className="productDescription_content-2">
                    <nav id="inline-navlink">
                      <Link to="description">Description</Link>
                      <Link to="reviews">Reviews</Link>
                    </nav>
                    <Outlet />
                  </div>

                  <div className="productDescription_content-3">
                    <p id="title">Related Products</p>
                    {products ? (
                      <div
                        key={products.id}
                        className="relatedProducts_container"
                      >
                        <div className="relatedProducts_cards">
                          <Link to={`/product/${products.id}`}>
                            <img src={products.image} alt="" />
                          </Link>
                          <h4>{products.title}</h4>
                          <span>{products.category}</span>
                          <p>${products.price}</p>
                        </div>
                      </div>
                    ) : (
                      <p> Loading...</p>
                    )}
                  </div>
                </div>
                {/* <button onClick={() => navigate("/")}> Go back</button> */}
                <div id="return"><Link to="/"> ← Go back</Link></div>
              </div>
            </>
          ) : (
            <p>Product not found </p>
          )}
        </div>
      </>
    );
  };

  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
}

export default ProDes;
