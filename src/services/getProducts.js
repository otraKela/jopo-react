import {PRODUCT_API_URL} from './settings';

const returnProducts = response => {
  return response.data.products;
}

function getProducts() {

  return fetch(PRODUCT_API_URL)
    .then(response => response.json())
    .then(returnProducts)
}

export default getProducts;