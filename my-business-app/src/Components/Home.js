import React from "react";
import "../App.css";

import NVBar from "./navbar/NVBar";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Logo from "./swiper/swiper";
import Random from "./random";
import FeaturedProducts from "./featuredProducts";
import Span from "../span";
import Footer1 from "./footer1/footer1";
import Footer2 from "./footer2/footer2";

import ProDes from "./proDes";

function Home({cartItems,subtotal}) {

  return (
    <div>
      <NVBar
        cartItems={cartItems}
        subtotal={subtotal}
      />
      <Header />
      <Logo />
      <Random />
      <FeaturedProducts/>
      <Span />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default Home;
