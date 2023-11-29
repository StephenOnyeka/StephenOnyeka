import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const handleRefresh = () => {
    window.location.reload();
  };
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let calculatedSubtotal = 0;
    cartItems.forEach((item) => {
      calculatedSubtotal += item.price * item.quantity;
    });
    setSubtotal(calculatedSubtotal);
  }, [cartItems]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  // const total = item.price * item.quantity;
  // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const Loading = () => {
    return (
      <>
        <div id="cart">
          <h2>
            <Skeleton height={40} width={100} />
          </h2>

          <div id="wrapper">
            <table>
              <Skeleton height={500} />
            </table>
          </div>

          <br />
          <div> </div>
          <br />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div id="cart">
          <h2>Cart</h2>

          <div id="wrapper">
            <table>
              <caption> These are the list of our cart items</caption>
              <tr>
                <th>Product</th>
                {/* <th>Price</th> */}
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
              {cartItems.map((item) => (
                <tr className="cart_products">
                  <td data-cell="Product ">
                    <img src={item.image} width={50} height={50} alt="" />{" "}
                    <br />${item.price}
                  </td>
                  {/* <td data-cell="Price">${item.price} </td> */}
                  <td data-cell="Quantity">
                    <button
                      className="btn "
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>{" "}
                    <span>{item.quantity} </span>{" "}
                    <button
                      className="btn "
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                  </td>
                  <td data-cell="Total">${item.price * item.quantity}</td>

                  <td>
                    {/* <button
                      
                      onClick={() => removeFromCart(item)}
                    > */}
                    <svg
                      className="btn-remove"
                      onClick={() => removeFromCart(item)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.3rem"
                      height="1.3rem"
                      fill="currentColor"
                      class="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="16"
                        // height="16"
                        fill="currentColor"
                        class="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg> */}
                    {/* </button> */}
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <br />

          <div className="total">
            <b>Total price:</b>
            <b> ${subtotal} </b>
          </div>

          <div id="btn-refresh">
            <button className="btn-refresh" onClick={handleRefresh}>
              Update Cart
            </button>
          </div>
        </div>
      </>
    );
  };

  return <div> {loading ? <Loading /> : <ShowProduct />}</div>;
}

export default Cart;
