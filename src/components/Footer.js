import React from 'react';
import CategoryNavBar from './CategoryNavBar';

import '../assets/css/Footer.css';


function Footer() {
  console.log ('footer');
  return (
    <React.Fragment>
      <footer>
        
        <CategoryNavBar />

        <div id="contact">
          <h3>Contacto</h3>

          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
              {/* <a href="mailto:guidoymarcela@hotmail.com" target="_blank"> */}
                <span>grupo4@gmail.com</span>
              {/* </a> */}
            </li>

            <li>
              <i className="fa-brands fa-whatsapp"></i>
              {/* <a href="https://wa.me/5491160021531" target="_blank"> */}
                <span>11-1234-5678</span>
              {/* </a> */}
            </li>

            <li>
              <i className="fa-solid fa-location-dot"></i>
              {/* <a href="https://maps.google.com/?ll=-34.58884772692726, -58.42807398405056" target="_blank"> */}
                <span>Nuestra calle 1234, 1111 CABA</span>
              {/* </a> */}
            </li>
          </ul>
        </div>

        <div id="social-networks">
          <h3>Sigamos conectados</h3>

          {/* <a href="https://www.facebook.com" target="_blank"> */}
            <i className="fa-brands fa-facebook i-fb"></i>
            {/* </a> */}

          {/* <a href="https://www.instagram.com" target="_blank"> */}
            <i className="fa-brands fa-instagram i-ig"></i>
            {/* </a> */}


          {/* <a href="/" className="firma" style="text-decoration:none"> */}
            <h1 id="firma">Tienda JOPO</h1>
          {/* </a> */}

        </div>

        {/* <a href="https://wa.me/5491160021531" target="_blank" aria-label="Comunicate por WhatsApp"> */}
          <i className="fa-brands fa-whatsapp-square i-wa"></i>
          {/* </a> */}

      </footer>


    </React.Fragment>
  )

}

export default Footer;