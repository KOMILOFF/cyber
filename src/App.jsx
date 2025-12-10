import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Smartphones from "./components/smartphones/Smartphones";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";

const App = () => {
  const [signet, setSignet] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    navigate("/cart");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  let elementToRender = signet ? <Home /> : <Login setSignet={setSignet} />;

  return (
    <div>
      {signet && (
        <Navbar
          goToCart={goToCart}
          cartCount={cartItems.reduce((total, item) => total + item.qty, 0)}
        />
      )}
      <Routes>
        <Route path="/" element={elementToRender} />
        <Route path="/smartphones" element={<Smartphones addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart items={cartItems} setItems={setCartItems} />} />
        <Route path="/step1" element={<Step1/>}/>
        <Route path="/step2" element={<Step2 />}/>
      </Routes>
      {signet && <Footer />}
    </div>
  );
};

export default App;
