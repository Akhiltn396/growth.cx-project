import React from "react";
import "./Footer.scss";
import Wave from "react-wavify";
import SubFooter from "../SubFooter/SubFooter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
<div className="contain">
<Wave
          fill="black"
          paused={true}
          style={{ display: "flex" }}
          options={{
            height: 20,
            amplitude: 200,
            speed: 0.15,
            points: 3,
          }}
        />
        <div className="foot">
          <h1 className="data">See the foundation for an <br/> aggressive growth</h1>
          <button>Hop on a call</button>
        </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
