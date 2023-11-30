import React from "react";

function About() {
  return (
    <div>
      <div id="About">
        <h1>
          About <span>Me</span>
        </h1>
        <div id="about_container">
          <div className="about_content-1">
            <div className="about-img">
              <img src="./images/IMG_20230926_141504_131.jpg" alt="" />
            </div>
          </div>

          <section className="about_content-2">
            <h2>Hi there!</h2>
            <p>
              I'm Onyeka Stephen; lots of my fellas know me as{" "}
              <i>'Don Mizzy'</i>. A Software Engineer working with Javascript,
              React.js and third-party packages to build websites and solve
              problems.
              <br /> <br />
              I'm passionate about creating clean, efficient, and maintainable
              code that is easy to read and understand. I'm confident that my
              skills and experience makes me the perfect candidate for your
              project.
              <br /> <br />
              I'm always looking for new challenges and opportunities to learn
              and grow as a developer. If you're looking for a knowledgeable
              programmer who can help you with web projects, blog site,
              portfolio, e-commerce websites... then look no further!
              <br />
              <br />
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
