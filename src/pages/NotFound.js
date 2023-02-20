import React from 'react';
import backgroundImg from '../assets/images/fondos/error-404.png';
import { Link } from 'react-router-dom';

import '../assets/css/NotFound.css';

function NotFound() {
    return (

        <React.Fragment>

            <div className="notFound">
                <img style={{ width: 20 + 'rem' }} src={backgroundImg} alt="error-404" />
                <div className= "text-notfound">
                    <h2>
                        404 Not Found
                    </h2>
                    <p>Pruebe ingresando en el siguiente enlace:</p>

                    <Link to="/" className="nav-link collapsed">
                        <span>JOPO Home</span>
                    </Link>
                </div>

            </div>

        </React.Fragment>

    )
}


export default NotFound;

// <React.Fragment>
// <div className= "notFound">
//    <h2>
//        404 Not Found
//    </h2>
//    <p>Pruebe ingresando en el siguiente enlace:</p>

//    <Link to="/" className="nav-link collapsed">
//                 <span>Dashboard-DH Movies</span>
//             </Link>

// </div>

// </React.Fragment>