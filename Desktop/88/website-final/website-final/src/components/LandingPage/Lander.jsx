import "./lander.scss";

import React from "react";

const Lander = () => {
  return (
    <div className="lander">
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <h3 className="lander-text">WE LEAEN & WE GROW </h3>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Lander;
