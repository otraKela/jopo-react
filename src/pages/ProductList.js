import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../assets/css/ProductsList.css';

import FilteredProductList from '../components/FilteredProductList.js';

function ProductList({ allData }) {
  const { category } = useParams();
  const { categories, products: allProducts } = allData;

  const [urlCategory, setUrlCategory] = useState(category); //
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [products, setProducts] = useState(allProducts);

  if (!(category === urlCategory)) {setUrlCategory(category)};

  useEffect(() => {
    setSelectedCategory(urlCategory);
  },[urlCategory]);

  useEffect(() => {
    async function getFilteredProducts() {
      if (selectedCategory && !(selectedCategory==='') ) {  
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
      <div id="category-filter">

        <p>Filtrar por categorías</p>

        <div name="category-form" >

          <select name="category" className="category-selector"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value)
            }}
          >

            <option value="">Todas</option>
            {
              categories.map((category, index) => {
                return (
                  <option
                    value={category.id}
                    key={category.id + index}
                  >
                    {category.name}
                  </option>
                )
              })}
          </select>
        </div>
      </div>

      {products &&
        <div id="main-product-list">
          <FilteredProductList products={products}  />
        </div>
      }
    </React.Fragment>

  )

}

export default ProductList;