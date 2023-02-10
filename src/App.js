import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Register from "./Register";

import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [currentForm, setCurrentForm] = useState("login");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={[<Header />, <Home />, <Footer />]}></Route>
          <Route path="/Checkout" element={[<Header />, <Checkout />]}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
