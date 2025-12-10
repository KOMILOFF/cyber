import React from "react";
import { Link } from "react-router-dom";
import step1Img from "../assets/step 1.png";
import step2 from "../assets/step 5.png";
import step3 from "../assets/step 3.png";
import { MdModeEdit } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const Step1 = () => {
  return (
    <div className="Stepcontainer">
      {/* levels */}
      <div className="levels">
        <img src={step1Img} alt="step1 image" />
        <img src={step2} alt="step2 image" />
        <img src={step3} alt="step3 image" />
      </div>

      {/* options */}
      <h3 className="opt-addres">Select Address</h3>
      <div className="opt1">
        <div className="opy">
          <input type="radio" className="home-inp" />
          <span>2118 Thornridge</span> <span className="bl-home">Home</span>
          <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
          <p>(209) 555-0104</p>
        </div>

        <div className="opp">
          <MdModeEdit />
          <ImCancelCircle />
        </div>
      </div>
      {/* opt 2 */}
      <div className="opt2">
        <div className="opy">
          <input type="radio" className="home-inp" />
          <span className="addres">2118 Thornridge</span> <span className="bl-home address">Home</span>
          <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          <p>(704) 555-0127</p>
        </div>

        <div className="opp">
          <MdModeEdit />
          <ImCancelCircle />
        </div>
      </div>
      <div className="buttons">
        <Link to="/cart" >
       <button className="next last">Back</button>
        </Link>

        <Link to="/step2" >
        <button className="next again">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
