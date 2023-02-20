import React from 'react';
import { useState, useEffect } from 'react';

import getCategories from '../services/getCategories';
import getProducts from '../services/getProducts';

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
