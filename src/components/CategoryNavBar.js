import React from 'react';
// import { useState, useEffect } from 'react';
// import getCategories from '../services/getCategories.js';

function CategoryNavBar( {categories}) {

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   async function readCat() {
  //     setCategories(await getCategories());
  //   }
  //   readCat();
  // }, []);


  return (
    <React.Fragment>
      <div id="category-nav-bar">
        <ul>
          {
            categories.map((category, index) => {
              return (
                <li key={category + index}>{category.name}</li>
              )
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )

}

export default CategoryNavBar;