import React, { useState, useEffect }  from 'react';

// import ShoppingCartContext from '../context/ShoppingCartContext.js';
import {UserContextProvider} from '../context/UserContext.js';
import {CategoryContextProvider} from '../context/CategoryContext.js';

import getCategories from '../services/getCategories';
import getProducts from '../services/getProducts';

import '../assets/css/App.css';
import '../assets/css/colors.css';

import Header from './Header';
import CategoryNavBar from './CategoryNavBar';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';

let categories;
let products;

function App() {

  const [ allData, setAllData ] = useState('');
  const [ loading, setLoading ] = useState(false);

  useEffect ( () => {   
    setLoading (true);

    Promise.all ( [ getCategories(), getProducts() ] )
    .then ( ( [apiCategories, apiProducts ] ) => {
        categories = apiCategories.data.categories;
        products = apiProducts.data.products;

        const propsData = {
          categories: categories,
          products: products, 
        };

        setLoading (false);
        setAllData (propsData);
    })
  }, [] )   


  return (
    <div className="App">
      
      <UserContextProvider>
      <CategoryContextProvider>

        <Header />

        { categories && <CategoryNavBar categories={categories} /> }

        { allData && <ContentWrapper allData={allData} /> } 
        
        { categories && <Footer categories={categories} /> }


      </CategoryContextProvider>
      </UserContextProvider >
    
    </div>
  );
}

export default App;
