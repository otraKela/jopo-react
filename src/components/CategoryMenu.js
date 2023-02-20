import React from 'react';

import '../assets/css/CategoryMenu.css';

function CategoryMenu({ categories }) {
  return (
    <React.Fragment>

      <section id="category-menu">

        {
          categories.map(category => {
            return (
              <article key={category.id}>

                <p className="category-name">{category.name}</p>
                <img src={category.img} alt="Category" />

              </article>

            )
          })


        }

      </section>

        <div id="showAllProducts">
          <button >Ver todos los productos</button>
        </div>


    </React.Fragment>

  );
}

export default CategoryMenu;
