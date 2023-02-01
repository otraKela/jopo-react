import {CATEGORY_API_URL} from './settings';

const returnCategories = response => response.data.categories;
 

function getCategories() {

  return fetch(CATEGORY_API_URL)
    .then(response => response.json())
    .then(returnCategories)
}

export default getCategories;