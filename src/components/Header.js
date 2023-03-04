import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/Header.css';

import jopoLogo from '../assets/images/logo/isologo-marron.png';

import UserDataContext from '../context/UserDataContext.js';

function Header() {

  const { userData, setUserData } = useContext(UserDataContext);

  const logout = () => {
    setTimeout(() => { setUserData('') }, 5000);
  };

  return (
    <React.Fragment>
      <div id="header-top">

        <div id="logo">
          <Link to="/">
            <img src={jopoLogo} alt="Logo" />
          </Link>
        </div>


        <div id="search-bar">
          <form method="post" action="/products/search">
            <input type="text" name="keyWords" placeholder="¿Qué estás buscando?" />

            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>

          </form>
        </div>

        <div id="right-header">
          <div id="hello-user">
            { userData &&
              <p>Hola {userData.first_name}!</p>
            }
          </div>


        <div id="icons">

          <Link to="/Login">
            <i className="fa-solid fa-circle-user top-right-icons"></i>
          </Link>

          <Link to="#" id="cart-link">
            <i className="fa-solid fa-cart-shopping top-right-icons"></i>

            <p id="shopping-cart-count">

            </p>
          </Link>

          { userData &&
          <Link to="/" id="HomePage">

            <i class="fa-solid fa-right-from-bracket top-right-icons" onClick={logout}></i>

          </Link>
          }

        </div>
        </div>
      </div>

    </React.Fragment >

  )
}

export default Header;