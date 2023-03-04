import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/RegistrationForm.css';

function RegistrationForm() {

  return (
    <div id="registration">
      <div id="registration-frame">
        {/* <form action="/users/new/register" method="POST" className="form-registro" enctype="multipart/form-data"> */}
        <form method="POST" id="registration-form">

          <div className="form-data">
            <label>Nombre</label>
            <input type="text" name="first_name" id="first_name" />
            <p className="first-name-error error"></p>
          </div>

          <div className="form-data">
            <label>Apellido</label>
            <input type="text" name="last_name" id="last_name" />
            <p className="last-name-error error"></p>
          </div>

          <div className="form-data">
            <label>Email</label>
            <input type="email" name="email" id="email" autoComplete="new-password" />
            <p className="email-error error"></p>
          </div>

          <div className="form-data">
            <label>Teléfono</label>
            <input type="tel" name="phone" id="phone" />
            <p className="phone-error error"></p>
          </div>

          <div className="form-data">
            <label>Contraseña</label>
            <input type="password" name="password" id="password" autoComplete="new-password" />
            <p className="password-error error"></p>
          </div>

          <div className="form-data">
            <label>Contraseña</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
            <p className="confirmPassword-error error"></p>
          </div>

          <div className="form-data">
            <label>Subir foto</label>
            <input type="file" name="image" id="image" />
            <p className="image-error error"></p>
          </div>

          <div className="form-data">
            <p id="birthday-proms">Si querés recibir promociones por tu cumpleaños ingresá tu fecha de nacimiento</p>
            {/* <label>Fecha de nacimiento</label> */}
            <input type="date" name="nacimiento" />
          </div>

          <div id="registration-buttons">
            <button type="reset" >BORRAR</button>

            <button>CREAR CUENTA</button>
          </div>

        </form>

        <div id="log-in">
          <p>¿Ya tenés una cuenta? <Link to="/login">  Iniciá sesión</Link></p>
        </div>


      </div>
    </div>
  )
}

export default RegistrationForm;