import React from "react";
import { data } from "../../data";
import "./SubFooter.scss";

const SubFooter = () => {
  return (
    <div className="subfooter">
      <div className="container">
        {data.map((d) => (
          <div className="contain">
            <h1>{d.header}</h1>
            <h3>{d.content1}</h3>
            <h3>{d.content2}</h3>
            <h3>{d.content3}</h3>
            <h3>{d.content4}</h3>
            <h3></h3>
          </div>
        ))}
      </div>
      <div
        className="copy"
        style={{ textAlign: "center", paddingTop: "130px" }}
      >
        © Copyright 2020 Growth.cx
      </div>
    </div>
  );
};

export default SubFooter;
