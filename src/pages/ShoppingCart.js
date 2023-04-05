import React, { useState, useEffect, useContext } from 'react';

import '../assets/css/ShoppingCart.css';

import UserContext from '../context/UserContext.js';

import ShoppingCartMsg from '../components/ShoppingCartMsg.js';
import ShoppingCartContent from '../components/ShoppingCartContent.js';
import ShoppingCartTotals from '../components/ShoppingCartTotals.js';


function ShoppingCart() {

  const {cart} = useContext(UserContext);

  return (
    <div id="shopping-cart-container">
      <div id="shopping-cart">
        {
          !cart || cart.length === 0
            ?
              <ShoppingCartMsg />
            :
            <>
              <ShoppingCartContent />
              <ShoppingCartTotals />
            </>
        }
      </div>
    </div>

  );
}

export default ShoppingCart;
