

import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function CartPage({ cartItems, onIncrease, onDecrease, onRemove, onUpdateCart }) {
  return (
    <>
    <NavBar />

    <div className="p-6 bg-gray-100 min-h-screen">
     
      
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">Your Cart is Empty</p>
      ) : (
        <div>
        <Cart 
          cartItems={cartItems} 
          onIncrease={onIncrease} 
          onDecrease={onDecrease} 
          onRemove={onRemove} 
          onUpdateCart= {onUpdateCart}
        />
        
         </div>
      )}
      
      
    </div>
    </>
  );
}

export default CartPage;
