import React from 'react';

import '../assets/css/ProductList.css';

import CategorySelector from '../components/CategorySelector.js';
import FilteredProductList from '../components/FilteredProductList.js';

function ProductList({ allData }) {

  const { categories, products } = allData;

  return (
    <React.Fragment>

      <div id="main-product-list">

        <CategorySelector categories={categories} />

        <FilteredProductList products={products} />

      </div>
    </React.Fragment>

  )

}

export default ProductList;