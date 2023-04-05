import React, { useContext } from 'react';

import UserContext from '../context/UserContext.js';

import ShoppingCartItem from './ShoppingCartItem.js';

const ShoppingCartContent = () => {

  const { cart } = useContext(UserContext);

  return (

    <section id="cart-content">
      {
        cart.map((item, index) => {
          return (
            <article id="item" key={item.id + index} >

              <ShoppingCartItem item={item} />

            </article>
          )
        })
      }
    </section>
  )
}

export default ShoppingCartContent;