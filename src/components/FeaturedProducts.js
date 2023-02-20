import React, { useState, useEffect } from 'react';

import '../assets/css/FeaturedProducts.css';

import FeaturedElement from './FeaturedElement';


function FeaturedProducts({ products }) {

  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {

    async function getFeaturedProducts() {
        let filteredProducts = await products.filter(product => product.featured === 1);
        setFeaturedProducts(await (filteredProducts));
      }

    getFeaturedProducts();

  }, []);


  if (featuredProducts.length > 0) {
    return (
      <React.Fragment>
        <div id="featured-products">

          <h4 id="title">DESTACADOS</h4>

          <section id="featured-carousel">
            <ul className="featured-items">
              {
                featuredProducts.map((product, index) => {
                  return (
                    <li className="featured-item" key={product.id + index}>

                      <FeaturedElement product={product} index={index} />

                    </li>
                  )
                })

              }
            </ul>
          </section>

        </div>
      </React.Fragment >
    )
  };
}


export default FeaturedProducts;