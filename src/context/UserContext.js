import React, { createContext, useState, useEffect } from "react";
import obtainUserFromJwt from '../services/obtainUserFromJwt.js';
import getProducts from '../services/getProducts.js';

const UserContext = createContext({});

export function UserContextProvider ({children}) {

  const [ jwt, setJwt ] = useState(() => JSON.parse(window.sessionStorage.getItem('jwt')));
  const [ cart, setCart ] = useState(null);
  const [ cartCount, setCartCount ] = useState(0);
  const [ loginMessage, setLoginMessage ] = useState('');

  let userId;
  let userName;
  let allUsersCarts;

  // Updates the cart products data (price, discount) when the user logs in
  const updateCartProducts = async (cartProducts) => {
    const updatedProductPromises = cartProducts.map (product => getUpdatedProductData(product.id));
    const updatedCartProducts = await Promise.all (updatedProductPromises);

    setCart (updatedCartProducts);

    allUsersCarts[userId] = updatedCartProducts;

    window.localStorage.setItem ('shoppingCarts', JSON.stringify(allUsersCarts))

    return updatedCartProducts;
  }

  const getUpdatedProductData = async (id) => {
    let product = await getProducts(id);
    return await product.data;
  }



  useEffect (() => {
    if (jwt) {
      const userData = obtainUserFromJwt(jwt);
      userId = userData.userId;
      userName = userData.userName;

      allUsersCarts = JSON.parse(window.localStorage.getItem('shoppingCarts'));

      if (allUsersCarts && allUsersCarts[userId]) {
        const cartProducts = updateCartProducts (allUsersCarts[userId]);

        setCart(cartProducts);
      } else {
        setCart(null);
      }
    }
      window.localStorage.setItem ('currentUserName', userName);
      window.localStorage.setItem ('currentUserId', userId);
  }, [jwt]);


  useEffect(() => {
    if (cart) {
      setCartCount ( cart.length );

      userId = window.localStorage.getItem('currentUserId');
      allUsersCarts = JSON.parse(window.localStorage.getItem('shoppingCarts'));
  
      if (allUsersCarts) {
        allUsersCarts[userId] = cart;
      } else {
        allUsersCarts = {
          [userId]: cart
        }
      }
  
      window.localStorage.setItem ('shoppingCarts', JSON.stringify(allUsersCarts))
    } else {
      setCartCount (0);
    };
  }, [cart])

  return  <UserContext.Provider value={{ jwt, setJwt, cart, setCart, cartCount, setCartCount, loginMessage, setLoginMessage }}>
            {children}
          </UserContext.Provider>
}

export default UserContext;