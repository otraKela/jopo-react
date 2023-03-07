import React from 'react';

import ShoppingCartItem from './ShoppingCartItem.js';

const ShoppingCartContent = ({ cartItems }) => {


  return (

    <section id="cart-content">
      {
        cartItems.map((item, index) => {
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