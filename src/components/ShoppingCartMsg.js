import React from 'react';
import {Link} from 'react-router-dom';


const ShoppingCartMsg = () => {

  return (
    <div id="cart-msg">
      <p>El carrito está vacío.</p>

      <div id="more-products">
        <Link to="/productList">Ver todos los productos</Link>
      </div>
    </div>
  )
}


export default ShoppingCartMsg;