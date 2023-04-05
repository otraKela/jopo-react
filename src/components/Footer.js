import React from 'react';
import {Link} from 'react-router-dom';

import '../assets/css/Footer.css';

import CategoryNavBar from './CategoryNavBar';


function Footer({categories}) {
  
  return (
    <React.Fragment>
      <footer>
        
        <CategoryNavBar categories={categories} />

        <div id="contact">
          <h3>Contacto</h3>

          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
            <Link to="mailto:guidoymarcela@hotmail.com" target="_blank"> 
                <span>grupo4@gmail.com</span>
                </Link>
            </li>

            <li>
              <i className="fa-brands fa-whatsapp"></i>
            <Link to="https://wa.me/5491160021531" target="_blank"> 
                <span>11-1234-5678</span>
                </Link>
            </li>

            <li>
              <i className="fa-solid fa-location-dot"></i>
              <Link to="https://maps.google.com/?ll=-34.58884772692726, -58.42807398405056" target="_blank"> 
                <span>Nuestra calle 1234, 1111 CABA</span>
              </Link>
            </li>
          </ul>
        </div>

        <div id="social-networks">
          <h3>Sigamos conectados</h3>

          <Link to="https://www.facebook.com" target="_blank">
            <i className="fa-brands fa-facebook i-fb"></i>
            </Link>

          <Link to="https://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram i-ig"></i>
            </Link>


          <Link to="/" className="firma" > 
            <h1 id="firma">Tienda JOPO</h1>
          </Link> 

        </div>

          <Link to="https://wa.me/5491160021531" target="_blank" aria-label="Comunicate por WhatsApp"> 
          <i className="fa-brands fa-whatsapp-square i-wa"></i>
          </Link>

      </footer>


    </React.Fragment>
  )

}

export default Footer;