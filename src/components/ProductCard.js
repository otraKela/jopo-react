import React from 'react';
import { Link } from 'react-router-dom';

import formatPrice from '../services/formatPrice.js';
import calculateFinalPrice from '../services/calculateFinalPrice.js';
import calculateInstallments from '../services/calculateInstallments.js';

function ProductCard({ product }) {
  return (
    <React.Fragment>

      <Link className="no-decoration" to={`/productDetail/${product.id}`} >

        <img src={product.img} alt={product.name} />

        <div className="product-description">
          <p className="product-name">{product.name}</p>

          {(!product.discount || product.discount === 0) &&
            <div className="no-discount">
              <p className="price">{formatPrice(product.price, 0)}</p>
              <p className="installments">6 cuotas sin interés de <strong>
                {formatPrice(calculateInstallments(product.price, product.discount), 2)}</strong>
              </p>
            </div>
          }
          {(product.discount && !(product.discount === 0)) &&
            <div className="with-discount">
              <div className="price-discount">
                <span className="orig-price">{formatPrice(product.price, 0)}</span>
                <span className="final-price">
                  {formatPrice(calculateFinalPrice(product.price, product.discount), 2)}
                </span>
              </div>
              <p className="installments">6 cuotas sin interés de <strong>

                {formatPrice(calculateInstallments(product.price, product.discount), 2)}
              </strong>
              </p>
            </div>
          }

          <button>Agregar al carrito</button>
        </div>

      </Link>

    </React.Fragment >

  );
}

export default ProductCard;