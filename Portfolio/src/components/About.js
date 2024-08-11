import React from "react";

function About() {
  return (
    // <div>
      <div id="About">
        <h1>
          About <span>Me</span>
        </h1>
        <div id="about_container">
          <div className="about_content-1">
            <div className="about-img">
              <img src="./images/t99tur36_400x400.jpg" alt="" />
            </div>
          </div>

          <div className="about_content-2">
            <h2>Hello!</h2>
            <p>
              I'm a tech lover working with available technologies & programing
              languages to engineer functional softwares both dynamic and
              scalable across all platforms.
              <br />
              <br />
              My name is "<b>Stephen Onyeka </b>"{/* <i>'Don Mizzy'</i>. */}
              <br /> <br />
              {/* I am passionate about my craft in creating clean, efficient, and maintainable
              code easy to read and understand.
              <br /> */}
              My skills and experience makes me the perfect candidate for your
              project.
              <br /> <br />
              Always looking for new challenges and opportunities to grow and
              learn as a developer.
              <br /> <br />
              "
              <i>
                If you're in search for a knowledgeable programmar who can help
                you with your web projects and mobile apps... look no further!
              </i>
              "
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default About;
