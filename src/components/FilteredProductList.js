import React, {useState, useEffect, useContext} from 'react';

import CategoryContext from '../context/CategoryContext.js';

import ProductCard from './ProductCard.js';

function FilteredProductList({ products: allProducts }) {

  const { categoryFilter } = useContext(CategoryContext);

  const [ products, setProducts ] = useState(allProducts);
  const [ loading, setLoading ] = useState(false);


  useEffect(() => {

    setLoading (true);

    async function getFilteredProducts() {
      if (categoryFilter && !(categoryFilter === '') ) { 
        let filteredProducts = await allProducts.filter(product => product.categoryId == categoryFilter);
  
        setLoading (false);
        setProducts(await filteredProducts);
      } else {
        setLoading (false);
        setProducts(allProducts);
      }
    }

    getFilteredProducts();
}, [categoryFilter]);

  return (
    <React.Fragment>

      {products &&
        <div id="product-list">

          {loading &&
            <div id="loading">
              <p>Loading...</p>
            </div>
          }

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

