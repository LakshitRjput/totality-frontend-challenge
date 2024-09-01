
import React from 'react';
import Checkout from '../components/Checkout';
import NavBar from '../components/NavBar';


function CheckoutPage({ cartItems, 
  onCheckout 
}) {
  return (
    <div>
      <NavBar />
      <Checkout 
        cartItems={cartItems} 
        onCheckout={onCheckout} 
      />
    </div>
  );
}

export default CheckoutPage;
