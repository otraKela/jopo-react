import React from 'react';
import { useState, useEffect } from 'react';

import {CATEGORY_API_URL} from '../services/settings';
import {PRODUCT_API_URL} from '../services/settings';

import '../assets/css/App.css';
import '../assets/css/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header';
import CategoryNavBar from './CategoryNavBar';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';

let categories;
let products;

function App() {

  const [ allData, setAllData ] = useState('');

  useEffect ( () => {   

    // fetch categories from db 
      async function getCategories () {
          const response = await fetch(CATEGORY_API_URL);
          const apiCategories = await response.json();
          return await apiCategories;
      }

    // fetch products from db 
      async function getProducts () { 
          const response = await fetch(PRODUCT_API_URL);
          const apiProducts = await response.json();
          return await apiProducts;
      };

      Promise.all ( [ getCategories(), getProducts() ] )
        .then ( ( [apiCategories, apiProducts ] ) => {
            categories = apiCategories.data.categories;
            products = apiProducts.data.products;

            const propsData = {
              categories: categories,
              products: products, 
            };

            setAllData (propsData);

       })
  }, [] )   



 

  return (
    <div className="App">

        <Header />

        { categories && <CategoryNavBar categories={categories} /> }

        { allData && <ContentWrapper allData={allData} /> } 
        
        { categories && <Footer categories={categories} /> }
      
    </div>
  );
}

export default App;
