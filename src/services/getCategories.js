import {CATEGORY_API_URL} from './settings';

async function getCategories () {
    const response = await fetch(CATEGORY_API_URL);
    const apiCategories = await response.json();
    return await apiCategories;
}

export default getCategories;