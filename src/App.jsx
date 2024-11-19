import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import library from "./pages/library";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Borrowed from "./pages/Borrowed";
import CartCheckout from "./pages/CartCheckout"; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/library" element={<library />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/borrowed" element={<Borrowed />} />
          <Route path="/checkoutcart" element={<CartCheckout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
