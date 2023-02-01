import React from 'react';
import '../assets/css/Header.css';
import jopoLogo from '../assets/images/logo/isologo-marron.png';
import CategoryNavBar from './CategoryNavBar';


function Header() {
  console.log ('header');

  return (
    <React.Fragment>
      <div id="header-top">

        <div id="logo">
          <img src={jopoLogo} alt="Logo" />
        </div>

        <div id="search-bar">
          <form method="post" action="/products/search">
            <input type="text" name="keyWords" placeholder="¿Qué estás buscando?" />

            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>

          </form>
        </div>

        <div id="icons">

          <button id="user-icon">
            <i className="fa-solid fa-circle-user top-right-icons"></i>
          </button>

          <button id="shopping-cart-icon">
            <i className="fa-solid fa-cart-shopping top-right-icons">
              
            </i>

            <p id="shopping-cart-count">

            </p>

          </button>
        </div>

      </div>

      <CategoryNavBar />

    </React.Fragment>

  )
}

export default Header;