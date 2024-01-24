import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Trabook</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your next vacations
          </span>
          <button className="button" href>
            <a href="https://peaku.co/">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
