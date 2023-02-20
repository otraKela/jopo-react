import React from 'react';

import formatPrice from '../services/formatPrice.js';
import calculateFinalPrice from '../services/calculateFinalPrice.js';
import calculateInstallments from '../services/calculateInstallments.js';


// function formatPrice (price, decimals) {
//   return new Intl.NumberFormat('ES-AR', 
//                   { style: 'currency', 
//                     currency: 'ARS' ,
//                     maximumFractionDigits: decimals,

//                   }).format(price);
// }

// function calculateFinalPrice (price, discount) {
//   return price * (1 - discount / 100);
// }

// function calculateInstallments (price, discount) {
//   return discount === null? price / 6 : price * (1 - discount / 100) / 6;
// }


function FeaturedElement({ product }) {
  return (
    <React.Fragment>

      {/* <li className="featured-item" key={product.id + index}> */}
      <img src={product.img} alt={product.name} />

      <div className="product-description">
        <p className="product-name">{product.name}</p>

        {(!product.discount || product.discount === 0 ) &&
          <div className="no-discount">
            <p className="price">{formatPrice(product.price, 0)}</p>
            <p className="installments">6 cuotas sin interés de <strong> 
              {formatPrice (calculateInstallments (product.price, product.discount), 2)}</strong>
            </p>
          </div>
        }
        {(product.discount && !(product.discount === 0)) &&
          <div className="with-discount">
            <div className="price-discount">
              <span className="orig-price">{formatPrice(product.price, 0)}</span>
              <span className="final-price">
                {formatPrice (calculateFinalPrice(product.price, product.discount), 2)}
              </span>
            </div>
            <p className="installments">6 cuotas sin interés de <strong>
              
              {formatPrice (calculateInstallments(product.price, product.discount), 2)}
              </strong>
            </p>
          </div>
        }

        <button>Agregar al carrito</button>
      </div>

      {/* </li> */}


    </React.Fragment >

  );
}

export default FeaturedElement;