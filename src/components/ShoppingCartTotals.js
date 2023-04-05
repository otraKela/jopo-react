import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import UserContext from '../context/UserContext.js';

import formatPrice from '../services/formatPrice.js';


function ShoppingCartTotals () {

  const { cart } = useContext(UserContext);
  
  const [subtotal, setSubtotal] = useState(() => calculateSubtotal());
  const [total, setTotal] = useState((0));
  const [installments, setInstallments] = useState((0));

  useEffect(() => {
    setTotal (subtotal);
  }, [subtotal]);

  useEffect(() => {
    setInstallments (total / 6);
  }, [total]);


  async function calculateSubtotal () {
    let sub = await cart.reduce ( (accumulator, currentValue) => 
        accumulator + Number(currentValue.price * ( 1 - currentValue.discount / 100 )), 0);
    setSubtotal(sub);
  }


  return (
    <section id="cart-totals">
      <div id="free-shipping">

        <button><i className="fa-solid fa-truck truck-icon"></i></button>

        <h6>Envío gratis</h6>
        <p>superando los $15.000,00</p>
      </div>

      <form>
        <div id="shipping-cost">
          <input type="number" name="postal-code" placeholder="Tu código postal" />

          <button>Calcular</button>
        </div>
      </form>

      <div id="searh-postal-code">
        <Link to="https://www.correoargentino.com.ar/formularios/cpa" target="_blank">No sé mi código postal</Link>
      </div>

      <div id="subtotal">
        <p>Subtotal (sin envío):</p>
        <h3 id="subtotal">{formatPrice(subtotal, 2)}</h3>
      </div>

      <div id="total">
        <h2>Total:</h2>
        <h2 id="total">{formatPrice(total, 2)}</h2>
      </div>

      <div id="payment-methods">
        <i className="fa-solid fa-credit-card card-icon"></i>
        <strong>6 cuotas sin interés de</strong> <span id="installments">
          {formatPrice(installments, 2)}
        </span>
      </div>

      <div id="start-the-purchase">

          <button>Iniciar Compra</button>

      </div>

      <div id="more-products">
        <Link to="/productList">Ver más productos</Link>
      </div>
    </section>
  )
}

export default ShoppingCartTotals;