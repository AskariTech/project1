import React from "react";
import "../Style/Home.css";

const Home = () => {
  return (
    <div className="Display_half">
      <div className="container_login1">
        <div className="slide">
          <div className="first">
            <i class="fas fa-volume-up"></i>
          </div>
          <div className="second">
            <div class="slider">
              <p class="paragraph">
                Welcome to Universal Studio Free Trial Bonus 208 for every new member!!
              </p>
            </div>{" "}
          </div>
        </div>
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/8ugaeA-nMTc?si=BcifGCTnL4-Fdv9f"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="headbest">Best Explanation</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div className="parah">
            {" "}
            Universal Studio Productions is a multi-award-winning production company which
            produces high quality scripted comedy and drama for television, film and
            digital platforms. It has a reputation for pushing the boundaries of
            established genres, telling compelling and universal stories with
            unconventional characters at their heart.
          </div>
        </div>

        <div style={{ color: "white" }}>
          {" "}
          <img src={require("../assets/stars.png")} />
        </div>
        <div className="extra">Now Showing</div>
        <div className="extra">Coming Soon</div>
      </div>
    </div>

  );
};

export default Home;
