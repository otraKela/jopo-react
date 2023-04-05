import React, {useContext} from 'react';
import { useParams, Link } from 'react-router-dom';

import '../assets/css/ProductDetail.css';

import formatPrice from '../services/formatPrice.js';
import calculateFinalPrice from '../services/calculateFinalPrice.js';
import calculateInstallments from '../services/calculateInstallments.js';

import UserContext from '../context/UserContext.js';


function ProductDetail(props) {

  const { cart, setCart, setCartCount } = useContext(UserContext);

  const {id} = useParams();

  const addProductToCart = () => {
    let newCart = cart ? cart : [];

    if (!(newCart.some ((item) => item.id === product.id))) {
      newCart.push(product);
      setCart ( newCart );
      setCartCount ( newCart.length );
      let allUsersCarts = JSON.parse(window.localStorage.getItem ('shoppingCarts'));
      let userId = window.localStorage.getItem ('currentUserId')

      if (allUsersCarts) {
        allUsersCarts[userId] = newCart;
      } else {
        allUsersCarts = {
          [userId]: newCart
        }
      }   

      window.localStorage.setItem ('shoppingCarts', JSON.stringify (allUsersCarts));
    }  
  }

  const products = props.products;

  let product = products.find(element => element.id == id);
  
  if (product) {

    return (

      <div className="product-data">

        <article className="product" >

          < div className="product-img" >
            <img src={product.img} alt="telefono-8" />
          </div >

          <div className="product-detail">
            <h4 className="product-name">{product.name}</h4>

            {product.discount && product.discount !== null &&

              <div className="with-discount">
                <p className="price">
                  <small>ANTES </small>
                  <span className="precio">{formatPrice(product.price, 0)}</span>
                </p>
                <p className="discount">{product.discount}% <small>de </small>DESCUENTO</p>
                <h5 className="final-price">
                  {formatPrice(calculateFinalPrice(product.price, product.discount), 2)}
                </h5>
              </div>
            }

            {(!product.discount || product.discount === null) &&

              <div className="no-discount">
                <h5 className="final-price">{formatPrice(product.price, 0)}</h5>
              </div>
            }

            <div className="payment-methods">

              <i className="fa-solid fa-credit-card"></i>
              <span><strong>6 cuotas sin interés</strong> de {formatPrice(calculateInstallments(product.price, product.discount), 2)}</span>

            </div>

            <Link to='/shoppingCart' id="add-to-cart" >
              <button onClick={() => addProductToCart()} >AGREGAR AL CARRITO</button>
            </Link>



            <div className="free-delivery">

              <i className="fa-sharp fa-solid fa-truck"></i>
              <span><strong>Envío gratis</strong> superando los $15.000</span>

            </div>

            <form action="" method="">

              <div className="shipping-cost">
                <input type="number" name="zip-code" placeholder="Tu código postal" />

                <button type="submit">Calcular</button>
              </div>

            </form>

            <div className="search-zip-code">
              <p>No sé mi código postal</p>
            </div>

            <div className="description" >
              <p>{product.description}</p>
            </div>

          </div>
        </article >
      </div >
    )
  }
}

export default ProductDetail;