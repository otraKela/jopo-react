import React from 'react';

function CategoryNavBar({categories}) {

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