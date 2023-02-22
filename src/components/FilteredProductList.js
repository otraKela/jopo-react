import React, {useState, useEffect, useContext} from 'react';

import CategoryContext from '../context/CategoryContext.js';

import ProductCard from './ProductCard.js';

function FilteredProductList({ products: allProducts }) {

  const { categoryFilter, setCategoryFilter } = useContext(CategoryContext);

  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const [products, setProducts] = useState(allProducts);

  if (!(categoryFilter === selectedCategory)) { setSelectedCategory(categoryFilter)}

  useEffect(() => {
    async function getFilteredProducts() {
      if (selectedCategory && !(selectedCategory === '') ) {  
        let filteredProducts = await allProducts.filter(product => product.categoryId == selectedCategory);
        
        setProducts(await filteredProducts)
      } else {
        setProducts(allProducts);
      }
    }

    getFilteredProducts();
  }, [selectedCategory]);


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

