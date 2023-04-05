import React, { createContext, useState, useEffect } from "react";

const CategoryContext = createContext('');

export function CategoryContextProvider ({children}) {

  const [ categoryFilter, setCategoryFilter ] = useState('');

  return  <CategoryContext.Provider value={{ categoryFilter, setCategoryFilter }}>
            {children}
          </CategoryContext.Provider>

}

export default CategoryContext;