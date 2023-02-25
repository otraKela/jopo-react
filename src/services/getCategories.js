import {GET_CATEGORIES_URL} from './settings';

async function getCategories () {
    const response = await fetch(GET_CATEGORIES_URL);
    const apiCategories = await response.json();
    return await apiCategories;
}

export default getCategories;