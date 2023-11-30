import React from "react";
import Typewriter from "typewriter-effect";
import "../components/TextAnimation.css"


function TextAnimation() {
  return (
    <div>
          
          <div className="typewriter_container">
       <Typewriter
            options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: [
              "Web Developer", 
              "Search Engine Optimizer",
              "Front-end Developer",
              "Performance Tester",
            ],
          }}
        /></div>
      
    </div>
  );
}

export default TextAnimation;
