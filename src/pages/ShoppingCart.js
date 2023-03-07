import React, { useState, useEffect } from 'react';

import '../assets/css/ShoppingCart.css';

import ShoppingCartMsg from '../components/ShoppingCartMsg.js';
import ShoppingCartContent from '../components/ShoppingCartContent.js';
import ShoppingCartTotals from '../components/ShoppingCartTotals.js';

function ShoppingCart() {

  let products;

  products = [
    { "id": 1, "name": "Vinilo de Leño", "description": "Vinilo del grupo español de culto Leño, editado en 1973. Excelente condición.", "url": "http://localhost:3040/products/1", "img": "/images/products/vinilos/vinilo-2.jpg", "discount": null, "price": "4200.00", "featured": 1 },
    { "id": 2, "name": "Teléfono antiguo marca Bell", "description": "Teléfono antiguo de la fábrica inglesa Bell, de principios de siglo XX, en óptimas condiciones de conservación. Adaptado para conectar\n a línea telefónica actual, funciona correctamente.", "url": "http://localhost:3040/products/2", "img": "/images/products/telefonos/telefono-1.jpg", "discount": null, "price": "4000.00", "featured": 0 },
    { "id": 3, "name": "Radio Esténtor modelo Cathedral", "description": "Radio Esténtor original de los años 40, en el exclusivo modelo Cathedral, usado, en su época, por la aristocracia porteña. Cierre los ojos e imagine que escucha a Oscar Casco en la radionovela de la tarde.", "url": "http://localhost:3040/products/3", "img": "/images/products/radios/radio-1.jpg", "discount": 15, "price": "3500.00", "featured": 0 },
    { "id": 4, "name": "Tocadiscos Steinway con tapa", "description": "Tocadiscos de origen alemán marca Steinway. Pua nueva, mecanismo restaurado, \ncaja lustrada, radio en funcionamiento. ¡Una joya para disfrutar!", "url": "http://localhost:3040/products/4", "categoryId": 4, "categoryName": "Tocadiscos", "img": "/images/products/tocadiscos/tocadiscos-1.jpg", "discount": null, "price": "5000.00", "featured": 1 },
    { "id": 5, "name": "Tocadiscos Steinway con tapa", "description": "Tocadiscos de origen alemán marca Steinway. Pua nueva, mecanismo restaurado, \ncaja lustrada, radio en funcionamiento. ¡Una joya para disfrutar!", "url": "http://localhost:3040/products/4", "categoryId": 4, "categoryName": "Tocadiscos", "img": "/images/products/tocadiscos/tocadiscos-1.jpg", "discount": null, "price": "5000.00", "featured": 1 }]

  const [cartItems, setCartItems] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {
    calculateCartSubtotal(products);
    setCartItems(products);
  }, [])

  
  async function calculateCartSubtotal (cartItems) {
    let subtotal = await cartItems.reduce ( (accumulator, currentValue) => 
        accumulator + Number(currentValue.price * ( 1 - currentValue.discount / 100 )), 0);

    setCartSubtotal(await subtotal);
  }

  return (
    <div id="shopping-cart-container">
      <div id="shopping-cart">
        {
          cartItems.length === 0
            ?
              <ShoppingCartMsg />
            :
            <>
              <ShoppingCartContent cartItems={cartItems} />
              <ShoppingCartTotals cartSubtotal={cartSubtotal} />
            </>
        }
      </div>
    </div>

    // <div id="shopping-cart-container">
    //   {
    //     (!cartItems || cartItems.length === 0) &&
    //     <div id="shopping-cart">
    //       <ShoppingCartMsg />
    //     </div>
    //   }

    //   {cartItems && Array.isArray(cartItems) && cartItems.length > 0 && 
    //     <div id="shopping-cart">
    //       <ShoppingCartContent cartItems={cartItems} />

    //       { cartSubtotal &&
    //       <ShoppingCartTotals cartSubtotal={cartSubtotal} />}
    //     </div>
    //   }
    // </div>

  );
}

export default ShoppingCart;
