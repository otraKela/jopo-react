import React from 'react';
import { Link } from 'react-router-dom';

function CategoryNavBar({categories}) {

  return (
    <React.Fragment>
      <div id="category-nav-bar">
        <ul>
          {
            categories.map((category, index) => {
              return (
                <Link to={`/productList/${category.id}`} key={category + index}>
                  <li >{category.name}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )

}

export default CategoryNavBar;