import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/css/Header.css';

import jopoLogo from '../assets/images/logo/isologo-marron.png';

import UserDataContext from '../context/UserDataContext.js';

function Header() {

  const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserDataContext);

  const handleLogout = () => {
    setUserData('');
    navigate('/');
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

          { !userData 
            ?
          <Link to="/login">
            <i className="fa-solid fa-circle-user top-right-icons"></i>
          </Link>
          :
          <Link to="#">
            <i className="fa-solid fa-circle-user top-right-icons"></i>
          </Link>
          }

          <Link to="/shoppingCart" id="cart-link">
            <i className="fa-solid fa-cart-shopping top-right-icons"></i>

            <p id="shopping-cart-count">

            </p>
          </Link>

          { userData &&
          <Link to="/" id="HomePage">
            <button onClick={handleLogout} id="logout-button">
            <i className="fa-solid fa-right-from-bracket top-right-icons"></i>
            </button>
          </Link>
          }

        </div>
        </div>
      </div>

    </React.Fragment >

  )
}

export default Header;