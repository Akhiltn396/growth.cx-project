import React from "react";
import growth from "../../assets/img/Screenshot (1).png"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="imgContainer">
          <img src={growth} alt=""  className="img"/>
        </div>
        <div className="infoContainer">
            <h3>Why us?</h3>
            <h3 className="pain"><span>Your pains</span>Our fixes</h3>
            <h3>Growth</h3>
            <h3>Eye-openers</h3>
            <h3>Customers</h3>
            <button >Hop on a call</button>
        </div>


      </div>


    </div>
  );
};

export default NavBar;
