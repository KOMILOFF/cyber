import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

const App = () => {
  const [signet, setSignet] = useState(false);

  let elementToRender;

  if (signet) {
    elementToRender = <Home />;
  } else {
    elementToRender = <Login setSignet={setSignet} />;
  }

  return (
    <>
      {signet && <Navbar />}
      <Routes>
        <Route path="/" element={elementToRender} />
      </Routes>
    </>
  );
};

export default App;
