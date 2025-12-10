import React from "react";
import secons from "../assets/secons.png";
import midd from "../assets/midd.png";
import lates from "../assets/Step3.png";
import { FaAngleDown } from "react-icons/fa";
import "../../src/index.css";
import { Link } from "react-router-dom";

const Step2 = () => {
  return (
    <div className="Stepcontainer">
      <div className="levels">
        <img src={secons} alt="" />
        <img src={midd} alt="" />
        <img src={lates} alt="" />
      </div>
      <h3>Shipment Method</h3>
      {/* options */}
      <div className="shippings">
        <div className="price-addres">
          <input type="radio" className="home-inp" />
          <span>Free. Regulary shipment</span>
        </div>
        <div className="ship-date">
          <span>17 Oct, 2023</span>
        </div>
      </div>
      {/* options */}
      <div className="shippings">
        <div className="price-addres">
          <input type="radio" className="home-inp" />
          <span>$8,50 Get your delivery as soon as possible</span>
        </div>
        <div className="ship-date">
          <span>1 Oct, 2023</span>
        </div>
      </div>
      {/* options */}
      <div className="shippings">
        <div className="price-addres">
          <input type="radio" className="home-inp" />
          <span>Schedule Pick a date when you want to get your delivery</span>
        </div>
        <div className="ship-date">
          <span>
            Select Date <FaAngleDown />
          </span>
        </div>
      </div>

      <div className="buttons">
        <Link to="/step1" >
       <button className="next last">Back</button>
        </Link>

        <Link to="/step3" >
        <button className="next again">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Step2;
