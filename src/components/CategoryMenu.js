import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/CategoryMenu.css';

function CategoryMenu({ categories }) {
  return (
    <React.Fragment>

      <section id="category-menu">

        {
          categories.map(category => {
            return (

              <article key={category.id}>
                <Link to={`/productList/${category.id}`}>
                  <p className="category-name">{category.name}</p>
                  <img src={category.img} alt="Category" />
                </Link>
              </article>


            )
          })


        }

      </section>

      <div id="showAllProducts">
        <Link to="/productList" >
          <button >Ver todos los productos</button>
        </Link>
      </div>


    </React.Fragment>

  );
}

export default CategoryMenu;
