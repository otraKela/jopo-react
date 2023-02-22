import React from 'react';

import ProductCard from './ProductCard.js';

function FilteredProductList({ products }) {

  return (
    <React.Fragment>
      {products &&
        <div id="product-list">

          <section id="products">
            {
              products.map((product, index) => {
                return (
                  <article key={product.id + index}>
                    <ProductCard product={product} />
                  </article>
                )
              })
            }
          </section>
        </div>
      }
    </React.Fragment >
  )
}


export default FilteredProductList;

