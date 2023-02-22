import React, {useContext} from 'react';
import {NavLink } from 'react-router-dom';

import CategoryContext from '../context/CategoryContext.js';

function CategoryNavBar({categories}) {

  const { categoryFilter, setCategoryFilter } = useContext(CategoryContext);

  return (
    <React.Fragment>
      <div id="category-nav-bar">
        <ul>
          {
            categories.map((category, index) => {
              return (
                <NavLink to="/productList" key={category.id + index} >
                  <li onClick={() => setCategoryFilter(category.id)}>
                    {category.name}
                  </li>
                </NavLink>
              )
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )

}

export default CategoryNavBar;