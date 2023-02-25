import {GET_PRODUCTS_URL} from './settings';

async function getProducts () { 
  const response = await fetch(GET_PRODUCTS_URL);
  const apiProducts = await response.json();
  return await apiProducts;
};


export default getProducts;