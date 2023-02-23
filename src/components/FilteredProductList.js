import React, {useState, useEffect, useContext} from 'react';

import CategoryContext from '../context/CategoryContext.js';

import ProductCard from './ProductCard.js';

function FilteredProductList({ products: allProducts }) {

  const { categoryFilter } = useContext(CategoryContext);

  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    async function getFilteredProducts() {
      if (categoryFilter && !(categoryFilter === '') ) { 
        let filteredProducts = await allProducts.filter(product => product.categoryId === categoryFilter);
                
        setProducts(await filteredProducts)
      } else {
        setProducts(allProducts);
      }
    }

    getFilteredProducts();
}, [categoryFilter]);

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

