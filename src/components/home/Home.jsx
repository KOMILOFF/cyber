import React from "react";
import "../home/Home.css";
import iph from "../../assets/cyberhome.png";
import plays from "../../assets/PlayStation.png";
import pods from "../../assets/airpodmax.png";
import vis from "../../assets/aplevis.png";
import mak from "../../assets/mak.png";
import mix from "../../assets/mix.png"
import ipad64 from "../../assets/image 64.png"
import fold from "../../assets/image 41.png"
import mac from "../../assets/macbuk.png"
import { PiBracketsAngleBold } from "react-icons/pi";
import { SlScreenSmartphone } from "react-icons/sl";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { FaComputer } from "react-icons/fa6";
import { LuGamepad } from "react-icons/lu";
import { products } from "../../data";
import { Navigate, useNavigate } from "react-router-dom";
const Home = ({addToCart}) => {
  const navigate = useNavigate();
  const homeProducts = products.filter((item) =>
    [9, 10, 10, 11, 12, 13, 14, 15, 16].includes(item.id)
  );

  return (
    <div>
      {/* iphone 14 pro */}
      <div className="banner">
        <div className="banner-title">
          <p className="banner-name">Pro.Beyond.</p>
          <h1>IPhone 14 Pro</h1>
          <p className="banner-dis">
            Created to change everything for the better. For everyone
          </p>
          <button className="banner-btn">Shop Now</button>
        </div>
        <img src={iph} alt="iPhone 14 pro" className="banner-img" />
      </div>

      {/* other devices */}
      <div className="devices">
        {/* devices left part */}
        <div className="left">
          {/* Playstation */}
          <div className="playstation">
            <img src={plays} alt="playstation image" />
            <div className="plays-title">
              <h2>Playstation 5</h2>
              <p>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          {/* airPodsMax */}
          <div className="airpods">
            <img src={pods} alt="airpodsmax image" className="air-image" />
            <div className="airpods-title">
              <h3 className="air-nam">Apple</h3>
              <h3 className="dop">AirPods</h3>
              <h3 className="airMax">Max</h3>
              <p>Computational audio. Listen, it's powerful</p>
            </div>
          </div>

          {/* appleVison */}
          <div className="apple-vis">
            <img src={vis} alt="appleVision image" />
            <div className="vis-title">
              <h3 className="vis-nam">Apple</h3>
              <h3 className="vis-pro">Vision Pro</h3>
              <p>An immersive way to experience entertainment</p>
            </div>
          </div>
        </div>

        {/* MacBook right part */}
        <div className="macBook">
          <div className="mac-title">
            <h3 className="mac-name">Macbook Air</h3>
            <h3 className="mak-pos">Air</h3>
            <p>
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="MacBtn">Shop Now</button>
          </div>
          <img src={mak} alt="" />
        </div>
      </div>
      {/* container */}
      <div className="container">
        {/* Category */}
        <div className="category">
          <div className="cate-title">
            <span className="cate-nam">Browse By Category</span>
            <PiBracketsAngleBold className="cate-icon" />
          </div>
          {/* category sections */}
          <div className="sections">
            <div className="phone-sect" onClick={() => navigate("./smartphones")}>
              <p className="sect-icon">
                <SlScreenSmartphone />
              </p>
              <p id="sec-nic">Phones</p>
            </div>

            <div onClick={() => navigate("./smartphones")}>
              <p className="sect-icon">
                <BsSmartwatch />
              </p>
              <p id="sec-nic">Smartwatches</p>
            </div>

            <div onClick={() => navigate("./smartphones")}>
              <p className="sect-icon">
                <IoCameraOutline />
              </p>
              <p id="sec-nic">Cameras</p>
            </div>

            <div onClick={() => navigate("./smartphones")}>
              <p className="sect-icon">
                <FiHeadphones />
              </p>
              <p id="sec-nic">Headphones</p>
            </div>

            <div onClick={() => navigate("./smartphones")}>
              <p className="sect-icon">
                <FaComputer />
              </p>
              <p id="sec-nic">Computers</p>
            </div>

            <div onClick={() => navigate("./smartphones")}>
              <p className="sect-icon">
                <LuGamepad />
              </p>
              <p id="sec-nic">Gaming</p>
            </div>
          </div>
        </div>

        <div className="new-sections">
          <span className="arrival">New Arrival</span>
          <span className="bestseller">Bestseller</span>
          <span className="prod">Featured Products</span>
        </div>

        {/* Products */}
        <div className="products">
          {homeProducts.map((item) => (
            <div key={item.id} className="card">
              <img
                src={item.image}
                alt="product's image"
                className="card-img"
              />
              <h2 className="card-title">{item.title}</h2>
              <p>
                {item.memory} {item.color}
              </p>
              <p className="card-price">{item.price}$</p>
              <p>{item.category}</p>
              <button className="card-btn" onClick={() => addToCart(item)}>Buy Now</button>
            </div>
          ))}
        </div>

      </div>
      {/* popular products */}
      <div className="popular">

        {/* popular 1 */}
        <div className="mix-prod">
          <img className="mix-image" src={mix} alt="mix" />
          <h2 className="mix-title">Popular Products</h2>
          <p className="mix-desc">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <button className="mix-btn">Shop Now</button>
        </div>

        {/* popular2 */}
        <div className="ipad-pro">
          <img src={ipad64} alt="ipad pro image"  className="ipad-pict"/>
          <h2 className="ipad-pro-title">Ipad Pro</h2>
          <p className="ipad-desc">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <div className="ipad-row">
          <button className="ipad-pro-btn">Shop Now</button>
          </div>
        </div>

        {/* popular3 */}
        <div className="foldable">
          <img src={fold} alt="samsung galaxy Zfold" className="foldable-img"/>
          <h2 className="foldable-title">Samsung Galaxy </h2>
          <p className="foldable-desc">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <div className="foldablebtn-div">
          <button className="foldable-btn">Shop Now</button>
          </div>
        </div>
        {/* popular4 */}
        <div className="mac-bro">
          <img src={mac} alt="Macbook Pro image" className="mac-bro-img"/>
          <h2 className="mac-bro-title">Macbook Pro</h2>
          <p className="mac-bro-desc">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>

          <div className="macbro-div">
          <button className="mac-btn">Shop Now</button>
          </div>
        </div>

      </div>
      {/* Big summer sale */}
      <div className="big">
        <div className="play-left">
          <img src={plays} alt="playstation picture" className="play-left-img"/>
        </div>
        <div className="main-big">
          <span className="main-title">Big Summer <p className="main-sale">Sale</p></span>
          <p className="main-desc">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
          <button className="main-btn">Shop Now</button>
        </div>

          <div className="right-mac">
            <img src={mak} alt="mac image" className="right-mac-image"/>
          </div>

      </div>

      </div>
  );
};

export default Home;
