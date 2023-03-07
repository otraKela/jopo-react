import React from 'react';
import { Link } from 'react-router-dom';

import formatPrice from '../services/formatPrice.js';
import calculateFinalPrice from '../services/calculateFinalPrice.js';

const ShoppingCartItem = ({item}) => {

  return (

    <React.Fragment>
      <Link to="#" className="go-to-detail">
        <img src={item.img} alt="Item" />
      </Link>

      <p>{item.name}</p>

      {/* <form > */}
        <button id="delete-button">
          <i className="fa-solid fa-trash-can"></i>
        </button>
      {/* </form> */}

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