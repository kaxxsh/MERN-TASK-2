import "./App.css";
import { GiFarmer } from "react-icons/gi";
import masterimg from "./assets/test.png";

import { TbLeaf } from "react-icons/tb";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <GiFarmer className="logo-icon" />
          Vertical Farm
        </div>
        <div className="nav-content">
          <div className="nav-item nav-item-active">Solution</div>
          <div className="nav-item">Department</div>
          <div className="nav-item">Farming Method</div>
          <div className="nav-item">Company</div>
          <div className="nav-item">About</div>
        </div>
        <div className="nav-buttons">
          <div className="button trial">Start Free Trial</div>
          <div className="button account">Account</div>
        </div>
      </div>
      <div className="master">
        <div className="left">
          <div className="title">
            Fresh, Sustainable, <br />
            Plant <span style={{ fontWeight: "600" }}>Grow Vertically</span>
            <br />
            in{" "}
            <span
              style={{
                fontWeight: "600",
                backgroundColor: "var(--ascent-secondary)",
                color: "var(--bg)",
              }}
            >
              Urban Areas
            </span>
          </div>
          <div className="desc">
            Our vertical farming startup brings sustainable, locally grown
            produce to urban areas. With our innovative technology, we're
            revolutionizing the way. we grow and consume fresh food.
          </div>
          <div className="button-container">
            <div className="button start">Start Now</div>
            <div className="button how">HOW IT WORKS?</div>
            <div className="button overlap1"></div>
            <div className="button overlap2"></div>
            <div className="button overlap3"></div>
          </div>
        </div>
        <div className="right">
          <img src={masterimg} alt="Master art" className="master-image" />
        </div>
      </div>
      <div className="step-container">
        <div className="step one">
          <div className="step-icon-container">
            <div className="step-icon">1</div>
          </div>
          <div className="step-content">
            <div className="step-title">Plant</div>
            <div className="step-desc">
              Select the best crops for your vertical farming
            </div>
          </div>
        </div>
        <div className="step two">
          <div className="step-icon-container">
            <div className="step-icon">2</div>
          </div>
          <div className="step-content">
            <div className="step-title">Grow</div>
            <div className="step-desc">
              Install and setup your vertical grow system
            </div>
          </div>
        </div>
        <div className="step three">
          <div className="step-icon-container">
            <div className="step-icon">3</div>
          </div>
          <div className="step-content">
            <div className="step-title">Harvest</div>
            <div className="step-desc">Regularly monitor your crops</div>
          </div>
        </div>
      </div>

      <div className="consult">
        <div className="farm-start-container">
          <div className="farm-start">
            Farm Start At
            <div className="farm-start-time">7 AM</div>
          </div>
          <div className="info-icon">
            <TbLeaf className="info-icon-leaf" />
          </div>
        </div>
        <div className="consult-text">
          We Offer Consulting Services <br /> For Vertical Farming Method
        </div>
        <div className="consult-buttons">
          <div className="button onex">
            <div className="">Don't Wait</div>
          </div>
          <div className="button twox">
            <div className="">Join Us</div>
          </div>
          <div className="button threex">
            <div className="">Act Now</div>
          </div>
        </div>
        <div className="contact">
          <div className="button">Contact Team</div>
        </div>
      </div>
    </div>
  );
}

export default App;
