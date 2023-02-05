import React from 'react';

import HomePage from '../pages/HomePage.js';

function ContentWrapper ({allData}) {

  return (
    <React.Fragment>

       <HomePage allData={allData}  />

    </React.Fragment>

  );
}

export default ContentWrapper;
