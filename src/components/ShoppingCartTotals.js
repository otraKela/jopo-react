import React from 'react';
import {Link} from 'react-router-dom';

import formatPrice from '../services/formatPrice.js';
import calculateInstallments from '../services/calculateInstallments.js';

const ShoppingCartTotals = ({cartSubtotal}) => {

  let Subtotal = cartSubtotal;
  let Total = cartSubtotal;
  let Installments = calculateInstallments(Total, 0);


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

          <button type="submit">Calcular</button>
        </div>
      </form>

      <div id="searh-postal-code">
        <Link to="https://www.correoargentino.com.ar/formularios/cpa" target="_blank">No sé mi código postal</Link>
      </div>

      <div id="subtotal">
        <p>Subtotal (sin envío):</p>
        <h3 id="subtotal">{formatPrice(Subtotal, 2)}</h3>
      </div>

      <div id="total">
        <h2>Total:</h2>
        <h2 id="total">{formatPrice(Total, 2)}</h2>
      </div>

      <div id="payment-methods">
        <i className="fa-solid fa-credit-card card-icon"></i>
        <strong>6 cuotas sin interés de</strong> $<span id="installments">
          {formatPrice(Installments, 2)}
        </span>
      </div>

      <div id="start-the-purchase">
        {/* <Link id="purchase-link"> */}
          <button>Iniciar Compra</button>
        {/* </Link> */}
      </div>

      <div id="more-products">
        <Link to="/productsList">Ver más productos</Link>
      </div>
    </section>
  )
}

export default ShoppingCartTotals;