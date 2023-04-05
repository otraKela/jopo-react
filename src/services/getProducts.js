import {GET_PRODUCTS_URL} from './settings';

async function getProducts (id) { 

  let url =   id
              ?
              `${GET_PRODUCTS_URL}/${id}`
              :
              GET_PRODUCTS_URL;

  const response = await fetch(url);

  const products = await response.json();

  return await products;
};


export default getProducts;