import React from 'react';

import Banner from '../components/Banner.js';
import CategoryMenu from '../components/CategoryMenu.js';
import FeaturedProducts from '../components/FeaturedProducts.js';

function HomePage({ allData }) {

  const categories = allData.categories;
  const products = allData.products;

  return (
    <React.Fragment>
      <div id="homepage">

        <Banner />

        <CategoryMenu categories={categories} />

        <FeaturedProducts products={products} />

      </div>
    </React.Fragment>

  );
}

export default HomePage;
