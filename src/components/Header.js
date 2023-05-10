import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/css/Header.css';

import jopoLogo from '../assets/images/logo/isologo-marron.png';

import UserContext from '../context/UserContext.js';

function Header() {

  const navigate = useNavigate();
  
  const { jwt, setJwt, cartCount, setCartCount, setLoginMessage } = useContext(UserContext);

  const handleLogout = () => {
    setJwt(null);
    setCartCount(0);
    window.sessionStorage.removeItem('jwt');
    window.localStorage.removeItem('currentUserName');
    window.localStorage.removeItem('currentUserId');
    navigate('/');
  };

  const handleCartRequest = () => {
    if (jwt) {
      navigate('/shoppingCart');
    } else {
      setLoginMessage('Por favor ingrese sus credenciales para acceder al carrito de compras');
      navigate('/login');
    }
  }

  const handleProfileRequest = () => {
    if (jwt) {
      navigate('#');
    } else {
      setLoginMessage('');
      navigate('/login');
    }
  }

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
            { jwt &&
                <p>Hola {window.localStorage.getItem('currentUserName')}!</p>
            }
          </div>

          <div id="icons">
            <button onClick={() => handleProfileRequest()}>
                <i className="fa-solid fa-circle-user top-right-icons"></i>      
            </button>

            <button onClick={() => handleCartRequest()}>
              <i className="fa-solid fa-cart-shopping top-right-icons"></i>

              <p className="shopping-cart-count">{cartCount}</p>

            </button>
          
            { jwt &&
              <Link to="/" id="HomePage">
                <button onClick={() => handleLogout()} id="logout-button">
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