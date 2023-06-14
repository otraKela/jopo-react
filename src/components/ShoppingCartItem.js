import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../context/UserContext.js';

import formatPrice from '../services/formatPrice.js';
import calculateFinalPrice from '../services/calculateFinalPrice.js';

function ShoppingCartItem ({item}) {

  const { cart, setCart } = useContext(UserContext);

  const [ itemToRemove, setItemToRemove ] = useState(null);

  useEffect (() => {
    if (itemToRemove) {   
      let allUsersCarts;
      let userId;

      let newCart = cart.filter ( product => product.id !== itemToRemove);

      if ( newCart.length === 0 ) {
        setCart (null);
        allUsersCarts = JSON.parse(window.localStorage.getItem ('shoppingCarts'));
        delete allUsersCarts[userId];
      } else {
        setCart (newCart);
        allUsersCarts = JSON.parse(window.localStorage.getItem ('shoppingCarts'));
        allUsersCarts[userId] = newCart;
      }  
      
      window.localStorage.setItem ('shoppingCarts', JSON.stringify (allUsersCarts));
    } 
  }, [itemToRemove]);


  return (

    <React.Fragment>
      <Link to={`/productDetail/${item.id}`} className="go-to-detail">
        <img src={item.img} alt="Product" />
      </Link>

      <p>{item.name}</p>

        <button onClick={() => setItemToRemove(item.id)} id="delete-button">
          <i className="fa-solid fa-trash-can"></i>
        </button>
 
      {
        (!item.discount || item.discount === 0)
          ?
          <p className="price">{formatPrice(item.price, 0)}</p>
          :
          <div className="price-discount">
            <span className="orig-price">{formatPrice(item.price, 0)}</span>
            <span className="final-price">{formatPrice(calculateFinalPrice(item.price, item.discount), 2)}</span>
          </div>
      }
    </React.Fragment>
  )
}

export default ShoppingCartItem;