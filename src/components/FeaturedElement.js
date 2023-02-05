import React from 'react';

import '../assets/css/FeaturedElement.css';


function FeaturedElement({ product }) {
  return (
    <React.Fragment>
                return (
                  
                  <img src={product.img} className="d-block w-100" alt={product.name} />
                

                )

    </React.Fragment>

  );
}

export default FeaturedElement;