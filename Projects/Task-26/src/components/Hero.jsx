import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <div className="left">
          <div className="stats">
            <div className="stat">
              <h1>+200</h1>
              <p>Projects completed</p>
            </div>
            <div className="stat">
              <h1>+50</h1>
              <p>Startup raised</p>
            </div>
          </div>
          <div className="hello">
            <h1>Hello</h1>
            <p>— It's D.Nove a design wizard.</p>
          </div>
          <div className="scrl-dwn">
            <h3>Scroll down <i class="ri-arrow-down-line"></i></h3>
          </div>
        </div>

          <div className="product">
            <p>Product Designer</p>
            <div className="line"></div>
            <p>2024</p>
          </div>
      </div>
    </main>
  );
};

export default Hero;
