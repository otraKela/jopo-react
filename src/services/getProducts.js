import {PRODUCT_API_URL} from './settings';

async function getProducts () { 
  const response = await fetch(PRODUCT_API_URL);
  const apiProducts = await response.json();
  return await apiProducts;
};


export default getProducts;