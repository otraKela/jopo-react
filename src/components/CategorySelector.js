import React, { useState, useEffect, useContext } from 'react';

import CategoryContext from '../context/CategoryContext.js';


function CategorySelector({ categories }) {

  const { categoryFilter, setCategoryFilter } = useContext(CategoryContext);

  return (
    <React.Fragment>

      <div id="category-filter">

        <p>Filtrar por categorías</p>

        <div name="category-form" >

          <select name="category" className="category-selector"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >

            <option value="">Todas</option>
            {
              categories.map((category, index) => {
                return (
                  <option
                    value={category.id}
                    key={category.id + index}
                  >
                    {category.name}
                  </option>
                )
              })}
          </select>

        </div>
      </div>
    </React.Fragment >

  )

}

export default CategorySelector;