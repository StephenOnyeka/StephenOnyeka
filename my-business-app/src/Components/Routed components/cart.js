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
              <Skeleton height={500}/>
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
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
              {cartItems.map((item) => (
                <tr className="cart_products">
                  <td data-cell="Product ">
                    <img src={item.image} width={50} height={50} alt="" />{" "}
                  </td>
                  <td data-cell="Price">${item.price} </td>
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
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
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
