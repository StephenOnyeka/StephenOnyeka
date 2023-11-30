import React from "react";
// import TextAnimation from "./TextAnimation";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Portfolio from "./portfolio";
import { useNavigate } from "react-router-dom";
function Home() {
  const [typeEffect] = useTypewriter({
    words: ['Software Developer', 'Front-end Dev', 'Web Developer'],
    loop: {}, 
    typeSpeed: 120,
    deleteSpeed: 40

  })

  return (
    <div>
      {" "}
      <div id="Home">
        <div id="home_container">
          {/* <h3>Hello there.</h3> */}
          <p>
            {" "}
            My name is <span id="name">Stephen O.</span>
            <p>I'm a <span>{typeEffect} </span> <span><Cursor cursorStyle="|"/></span></p>
            
          </p>

          {/* <button onClick={()=> Navigate("#Portfolio")}>Explore</button> */}
          <a href="#Portfolio"><button>Explore</button></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
