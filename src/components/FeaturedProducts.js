import React from 'react';

import '../assets/css/FeaturedProducts.css';

import FeaturedElement from './FeaturedElement';



function FeaturedProducts ({ products }) {

  return (
    <React.Fragment>
      <div id="carousel">

        <h4 id="title">PRODUCTOS DESTACADOS</h4>

        <div id="carouselExample" className="carousel slide">

          <div className="carousel-inner">
            {
              products.map ( (product, index ) => {

                return (

                  <FeaturedElement product={product} key={product.id} />

                )
              })
            }

          </div>





          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

    </React.Fragment>

  );
}

export default FeaturedProducts;