import React from 'react';
import { useState, useEffect } from 'react';
import getCategories from '../services/getCategories.js';

import '../assets/css/App.css';
import '../assets/css/colors.css';

import Header from './Header';
import CategoryNavBar from './CategoryNavBar';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';


function App() {

  // get category list
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function readCat() {
      setCategories(await getCategories());
    }
    readCat();
  }, []);

  return (
    <div className="App">

        <Header />

        <CategoryNavBar categories={categories} />

        <ContentWrapper />
        
        <Footer categories={categories} />
      
    </div>
  );
}

export default App;
