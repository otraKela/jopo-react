import React from 'react';
import { useState, useEffect } from 'react';

import CategoryContext from '../context/CategoryContext.js';
import ShoppingCartContext from '../context/ShoppingCartContext.js';
import UserContext from '../context/UserContext.js';

import getCategories from '../services/getCategories';
import getProducts from '../services/getProducts';
import obtainUserFromJwt from '../services/obtainUserFromJwt.js';

import '../assets/css/App.css';
import '../assets/css/colors.css';

import Header from './Header';
import CategoryNavBar from './CategoryNavBar';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';

let categories;
let products;

function App() {

  const [ categoryFilter, setCategoryFilter ] = useState('');
  const [ allData, setAllData ] = useState('');
  const [ shoppingCart, setShoppingCart ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ jwt, setJwt ] = useState(null);

  useEffect ( () => {   
    setLoading (true);

    if (window.sessionStorage.getItem('jwt')) {

      const storedJwt = JSON.parse(window.sessionStorage.getItem('jwt'));

      setJwt(storedJwt);

      const {userName, userId} = obtainUserFromJwt (storedJwt);

      window.localStorage.setItem ('currentUserName', userName);
      window.localStorage.setItem ('currentUserId', userId);
    };

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
      
      <CategoryContext.Provider value={{ categoryFilter, setCategoryFilter }} >
      <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }} >
      <UserContext.Provider value={{ jwt, setJwt }} >

        <Header />

        { categories && <CategoryNavBar categories={categories} /> }

        { allData && <ContentWrapper allData={allData} /> } 
        
        { categories && <Footer categories={categories} /> }


      </UserContext.Provider >
      </ShoppingCartContext.Provider>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
