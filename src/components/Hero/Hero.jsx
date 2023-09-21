import React from "react";
import "./Hero.scss";
import Img1 from "../../assets/img/Image1.jpg"
import Img2 from "../../assets/img/Image2.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="clippy1">
          <img src={Img1} alt="" className="img"/>
        </div>
        <div className="contents">
        <h2 className="content"><b>Somebody told us sharing customer<br/> testimonials adds credibility.</b></h2>
        <p className="para">So sharing some of them for the sake of it</p>
        </div>


        <div className="clippy2">
        <img src={Img2} alt="" className="img"/>

        </div>

      </div>
      <div className="few"><b>A few of our happy customers</b></div>
    </div>
  );
};

export default Hero;
