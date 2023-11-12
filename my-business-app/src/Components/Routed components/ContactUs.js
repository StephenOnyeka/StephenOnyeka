import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import NVBar from "../navbar/NVBar";

import Footer1 from "../footer1/footer1";
import Footer2 from "../footer2/footer2";
import Span from "../../span";

function ContactUs({ cartItems, subtotal }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const Loading = () => {
    return (
      <>
        <NVBar />
        <Skeleton height={360} />

        <div id="ContactUs">
          <div className="ContactUs_container">
            <div className="ContactUs_content-1">
              <section>
                <h3>
                  <Skeleton height={100} width={480} />
                </h3>

                <div>
                  <Skeleton height={250} />
                </div>
              </section>

              <div className="ContactUs_content-2">
                <div className="ContactUs_content-2_container">
                  <section id="mainContent">
                    <Skeleton height={200} />
                  </section>
                  <section>
                    <Skeleton height={600} />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <NVBar cartItems={cartItems} subtotal={subtotal} />
        <div id="contactUs-Background">
          <div className="contactUs-Background_container">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div id="ContactUs">
          <div className="ContactUs_container">
            <div className="ContactUs_content-1">
              <section>
                <span className="contactUs_title">
                  <h3>
                    Have any queries?
                    <p>
                      We're here to help.
                      <div className="element-widget-divider">
                        <span className="element-divider-seperator"></span>
                      </div>
                    </p>
                  </h3>
                </span>

                <section className="grid-Flex_container">
                  <div className="grid-Flex_content">
                    <div className="imageCon">
                      <h2>Sales</h2>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="h4">1800 123 4567</p>
                    </div>
                    <div className="imageCon">
                      <h2>Complaints</h2>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="h4">1900 223 8899</p>
                    </div>
                    <div className="imageCon">
                      <h2>Returns</h2>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="h4">returns@mail.com</p>
                    </div>
                    <div className="imageCon">
                      <h2>Marketing</h2>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="h4">1700 444 5578</p>
                    </div>
                  </div>
                </section>
              </section>

              <div className="ContactUs_content-2">
                <div className="ContactUs_content-2_container">
                  <section id="mainContent">
                    <span>
                      <p id="h4">Don't be a stranger!</p>
                      <p id="h6"> You tell us. We listen.</p>
                    </span>

                    <p id="description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Est, nulla eaque, ipsa veniam repellat consequatur animi
                      quaerat quibusdam facere enim esse aut nemo, repudiandae
                      excepturi dolorem. Libero odio dolorum repellendus?
                    </p>
                  </section>
                  <section>
                    <form action="">
                      <input type="text" placeholder="NAME" />
                      <input type="text" placeholder="SUBJECT" />
                      <input type="text" placeholder="EMAIL" />
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="MESSAGE"
                      ></textarea>
                      <button>SEND MESSAGE</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Span />
        <Footer1 />
        <Footer2 />
      </>
    );
  };
  return <>{loading ? <Loading /> : <ShowProduct />}</>;
}

export default ContactUs;
