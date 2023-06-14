import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/css/RegistrationForm.css';

import registerUser from '../services/registerUser.js';

import UserContext from '../context/UserContext.js';

function RegistrationForm() {

  const form = useRef();

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [userDateBirth, setUserDateBirth] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const { setJwt } = useContext(UserContext);

  const navigate = useNavigate();

  

  const editFirstName = (newFirstName) => {
    setUserFirstName(newFirstName);
    if (!newFirstName || newFirstName === '' || newFirstName.length < 3) {
      setFirstNameError('El nombre debe tener al menos 3 caracteres');
    } else {
      setFirstNameError('');
    }
  }

  const editLastName = (newLastName) => {
    setUserLastName(newLastName);
    if (newLastName && newLastName.length < 2) {
      setLastNameError('El apellido debe tener al menos 2 caracteres');
     } else {
      setLastNameError('');
    }
  }

  const editEmail = (newEmail) => {
    setUserEmail(newEmail);
    if (!newEmail || newEmail === '' || !(newEmail.includes('@'))) {
      setEmailError('Debe ingresar una dirección de correo válida');
    } else {
      setEmailError('');
    }
  }

  const editPhone = (newPhone) => {
    setUserPhone(newPhone);
    if (newPhone && (newPhone.length < 8 || isNaN(newPhone))) {
      setPhoneError('Ingrese su teléfono con código de área (sin 0 ni 15) y sin espacios');
    } else {
      setPhoneError('');
    }
  }

  const editPassword = (newPassword) => {
    setUserPassword(newPassword);
    if (!newPassword || newPassword === '' || newPassword.length < 8) {
      setPasswordError('La contraseña debe contener, al menos, 8 caracteres');
    } else {
      if (userConfirmPassword && newPassword !== userConfirmPassword) {
        setPasswordError('Las contraseñas ingresadas no coinciden');
      } else {
        setPasswordError('');
      }
    }
  }

  const editConfirmPassword = (newConfirmPassword) => {
    setUserConfirmPassword(newConfirmPassword);
    if (!(newConfirmPassword  === userPassword )) {
      setConfirmPasswordError('Las contraseñas ingresadas no coinciden');
    } else {
      setConfirmPasswordError('');
    }
  }

  const handleImage = (newImage) => {
    setUserImage(newImage);
  }

  const editDateBirth = (newDateBirth) => { 
    setUserDateBirth(newDateBirth);
  }

  const togglePasswordType = async () => {
    if ( passwordType === 'password' ) { 
      setPasswordType( 'text' );
     } else {
      setPasswordType( 'password' );
    }
  }

  const toggleConfirmPasswordType = async () => {
    if ( confirmPasswordType === 'password' ) { 
      setConfirmPasswordType( 'text' );
     } else {
      setConfirmPasswordType( 'password' );
    }
  }

  const resetForm = () => {
    form.current.reset();
  }

  const handleRegistration = async (event) => {
    event.preventDefault();

    /* Field validations */

    let errorCount = 0;

    if (!userFirstName || userFirstName === '' || userFirstName.length < 3) {
      errorCount += 1;
      setFirstNameError('El nombre debe tener al menos 3 caracteres');
    } else {
      setFirstNameError('');
    }
    if (userLastName && userLastName.length < 2) {
      errorCount += 1;
      setLastNameError('El apellido debe tener al menos 2 caracteres');
     } else {
      setLastNameError('');
    }
    if (!userEmail || userEmail === '' || !(userEmail.includes('@'))) {
      errorCount += 1;
      setEmailError('Debe ingresar una dirección de correo válida');
    } else {
      setEmailError('');
    }
    if (userPhone && (userPhone.length < 8 || isNaN(userPhone))) {
      errorCount += 1;
      setPhoneError('Ingrese su teléfono con código de área (sin 0 ni 15) y sin espacios');
    } else {
      setPhoneError('');
    }
    if (!userPassword || userPassword === '' || userPassword.length < 8) {
      errorCount += 1;
      setPasswordError('La contraseña debe conterner, al menos, 8 caracteres');
    } else {
      setPasswordError('');
    }
    if (!(userConfirmPassword  === userPassword )) {
      errorCount += 1;
      setConfirmPasswordError('Las contraseñas ingresadas no coinciden');
    } else {
      setConfirmPasswordError('');
    }

    if (errorCount <= 0) {

      const userRegistrationData = {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        phone: userPhone,
        password: userPassword,
        img: userImage,
        date_birth: userDateBirth,
      }

      const result = await registerUser(userRegistrationData);
console.log('result', result)
      if (result.jwt) {

        window.sessionStorage.setItem('jwt', JSON.stringify(result.jwt));
      
        setJwt(result.jwt);
        setErrorMessage('');
        navigate('/');
  
      } else {
        if (result.meta.status === 401) {
          setEmailError (result.meta.msg);
        } else {
          setErrorMessage (result.meta.msg);
        }
      }
    }
  }

  return (
    <div id="registration">
      <div id="registration-frame">

        <form ref={form} id="registration-form" encType="multipart/form-data" >
          <input className="message" defaultValue={errorMessage} />

          <div className="form-data">
            <label>Nombre *</label>
            <input type="text" name="first_name" id="first_name" 
              placeholder="Ingrese su nombre"
              onChange={({ target }) => { editFirstName(target.value) }}
              value={userFirstName} 
              autoFocus />
            <p className="first-name-error error">{firstNameError}</p>
          </div>

          <div className="form-data">
            <label>Apellido</label>
            <input type="text" name="last_name" id="last_name" 
              placeholder="Ingrese su apellido"
              onChange={({ target }) => { editLastName(target.value) }}
              value={userLastName} />
            <p className="last-name-error error">{lastNameError}</p>
          </div>

          <div className="form-data">
            <label>Email *</label>
            <input type="email" name="email" id="email"
              autoComplete="new-password"
              placeholder="Ingrese un correo electrónico"
              onChange={({ target }) => { editEmail(target.value) }}
              value={userEmail}  />
            <p className="email-error error">{emailError}</p>
           </div>

          <div className="form-data">
            <label>Teléfono</label>
            <input type="tel" name="phone" id="phone" 
              placeholder="Ingrese su número de teléfono con código de área, sin espacios, 0 o 15"
              onChange={({ target }) => { editPhone(target.value) }} 
              value={userPhone} />
            <p className="phone-error error">{phoneError}</p>
          </div>

          <div className="form-data">
            <label>Contraseña *</label>
            <div className="password-data" >
              <input type={passwordType} name="password" className="password"
                autoComplete="new-password"
                placeholder="Ingrese una password"
                onChange={({ target }) => { editPassword(target.value) }} 
                value={userPassword} />
              <i className={
                passwordType === 'password'
                ?
                "fa-regular fa-eye"
                :
                "fa-regular fa-eye-slash"
                }
                onClick={togglePasswordType}></i>
            </div>            
            <p className="password-error error">{passwordError}</p>
          </div>

          <div className="form-data">
            <label>Confirmar contraseña *</label>
            <div className="password-data" >
              <input type={confirmPasswordType} name="confirm_password" className="password"
                placeholder="Repita la password"
                onChange={({ target }) => { editConfirmPassword(target.value) }} 
                value={userConfirmPassword} />
              <i className={
                confirmPasswordType === 'password'
                ?
                "fa-regular fa-eye"
                :
                "fa-regular fa-eye-slash"
                }
                onClick={toggleConfirmPasswordType}></i>
            </div>            
            <p className="password-error error">{confirmPasswordError}</p>
          </div>

          <div className="form-data">
            <label>Subir foto</label>
            <input type="file" name="image" id="image" 
              accept=".jpg, .png, .jpeg"
              // value={userImage}
              onChange={ ({target}) => { handleImage(target.files[0]) }}
            />
            <p className="image-error error"></p>
          </div>

          <div className="form-data">
            <p id="birthday-proms">Si querés recibir promociones por tu cumpleaños ingresá tu fecha de nacimiento</p>

            <input type="date" name="birthday" 
              enabled="false"
              onChange={({ target }) => { editDateBirth(target.value) }} 
              value={userDateBirth} />
          </div>

          <div id="registration-buttons">
            <button type="reset" onClick={resetForm} >BORRAR</button>

            <button onClick={handleRegistration}>CREAR CUENTA</button>
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