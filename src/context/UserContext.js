import React, { createContext, useState, useEffect } from "react";
import obtainUserFromJwt from '../services/obtainUserFromJwt.js';
import getProducts from '../services/getProducts.js';

const UserContext = createContext({});

export function UserContextProvider ({children}) {

  const [ jwt, setJwt ] = useState(() => JSON.parse(window.sessionStorage.getItem('jwt')));
  const [ cart, setCart ] = useState(null);
  const [ cartCount, setCartCount ] = useState(0);
  const [ loginMessage, setLoginMessage ] = useState('');
  const [ userId, setUserId ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ userImg, setUserImg ] = useState('');

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

      setUserId(userData.userId);
      setUserName(userData.userName);
      setUserImg(userData.userImg);

      allUsersCarts = JSON.parse(window.localStorage.getItem('shoppingCarts'));

      if (allUsersCarts && allUsersCarts[userId]) {
        const cartProducts = updateCartProducts (allUsersCarts[userId]);

        setCart(cartProducts);
      } else {
        setCart(null);
      }
    }
  }, [jwt]);


  useEffect(() => {
    if (cart) {
      setCartCount ( cart.length );

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

  return  <UserContext.Provider value={{ jwt, setJwt, cart, setCart, cartCount, setCartCount, loginMessage, setLoginMessage, userName, setUserName, userImg, setUserImg, userId, setUserId }}>
            {children}
          </UserContext.Provider>
}

export default UserContext;