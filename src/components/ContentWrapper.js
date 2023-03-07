import React from 'react';
import { Route, Routes } from "react-router-dom";

// import '../assets/css/ContentWrapper.css';

import HomePage from '../pages/HomePage.js';
import ProductDetail from '../pages/ProductDetail.js';
import ProductList from '../pages/ProductList.js';
import ShoppingCart from '../pages/ShoppingCart.js';
import LoginForm from '../pages/LoginForm.js';
import RegistrationForm from '../pages/RegistrationForm.js';
import NotFound from '../pages/NotFound.js';

function ContentWrapper({ allData }) {

  // const id = 15;

  return (
    <React.Fragment>
      <div id="content-wrapper">

        <Routes>
          <Route
            path="/productDetail/:id"
            element={<ProductDetail products={allData.products} />}
          />
          <Route
            path="/productList"
            element={<ProductList allData={allData} />}
          />
          <Route
            path="/login"
            element={<LoginForm />}
          />
          <Route
            path="/registration"
            element={<RegistrationForm />}
          />
          <Route
            path="/shoppingCart"
            element={<ShoppingCart />}
          />
          <Route
            exact path="/"
            element={<HomePage allData={allData} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>

    </React.Fragment>

  );
}

export default ContentWrapper;
