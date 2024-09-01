
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmOrderPage from './pages/ConfirmOrderPage';
import NavBar from './components/NavBar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleUpdateCart = (updatedItems) => {
    setCartItems(updatedItems);
  };
  const handleBook = (property) => {
    setCartItems([...cartItems, { ...property, nights: 1 }]);
  };

  const handleIncrease = (item) => {
    setCartItems(
      cartItems.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, nights: cartItem.nights + 1 } : cartItem
      )
    );
  };

  const handleDecrease = (item) => {
    setCartItems(
      cartItems.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, nights: Math.max(cartItem.nights - 1, 1) } : cartItem
      )
    );
  };

  const handleRemove = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  const handleCheckout = () => {
    
    setCartItems([]);
  };

  return (
    <Router>
      <div className="app">

        <Routes>
          <Route 
            path="/" 
            element={<HomePage onBook={handleBook} setCartItems={setCartItems} />} 
          />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                onIncrease={handleIncrease} 
                onDecrease={handleDecrease} 
                onRemove={handleRemove} 
                onUpdateCart={handleUpdateCart}
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <CheckoutPage 
                cartItems={cartItems} 
                onCheckout={handleCheckout} 
              />
            } 
          />
          <Route 
            path="/confirm-order" 
            element={
              <ConfirmOrderPage />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
