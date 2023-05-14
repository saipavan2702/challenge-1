import React from "react";
import Memory from "../assets/icon-memory.svg";
import Reaction from "../assets/icon-reaction.svg";
import Verbal from "../assets/icon-verbal.svg";
import Visual from "../assets/icon-visual.svg";

const Display = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="card text-center gradient" style={{ zIndex: `{0.5}` }}>
          <div className="card-body text-white">
            <h3 className="card-title mt-2 score">Your result</h3>
            <div className="circle d-flex align-items-center justify-content-center flex-column">
              <h1 className="increase">76</h1>
              <h6 className="out">of 100</h6>
            </div>
            <h2 style={{ fontSize: `30px` }}>Great</h2>
            <p className="lines">
              Your performance exceeds 65% of the people who have taken these
              tests
            </p>
          </div>
        </div>

        <div class="card another" style={{ width: `${18}rem` }}>
          <div class="card-body">
            <h5 class="card-title mt-3 mb-4 do">Summary</h5>

            <div className="component_1 mb-3 flex-row justify-content-space-between">
              <img className="component_icon" src={Reaction} alt="reac" />
              <p className="reaction felx-fill">Reaction</p>
              <p class="wrapper">
                <span className="got">80</span>
                <span className="max">/100</span>
              </p>
            </div>

            <div className="component_2 mb-3 flex-row justify-content-space-between">
              <img src={Memory} alt="memo" />
              <p className="memory">Memory</p>
              <p class="wrapper">
                <span className="got">92</span>
                <span className="max">/100</span>
              </p>
            </div>

            <div className="component_3 mb-3 flex-row justify-content-space-between">
              <img src={Verbal} alt="verb" />
              <p className="verbal">Verbal</p>
              <p class="wrapper">
                <span className="got">61</span>
                <span className="max">/100</span>
              </p>
            </div>
            <div className="component_4 mb-3 flex-row justify-content-space-between">
              <img src={Visual} alt="vis" />
              <p className="visual">Visual</p>
              <p class="wrapper">
                <span className="got">72</span>
                <span className="max">/100</span>
              </p>
            </div>

            <div className="last-btn">
              <button className="btn">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
