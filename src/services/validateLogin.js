import { VALIDATE_LOGIN_URL } from './settings.js';

async function validateLogin(credentials) {
  try {
    const userLoginData = {
      'email': credentials.email,
      'password': credentials.password
    }

    const request = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(userLoginData)
    };

    const response = await fetch(VALIDATE_LOGIN_URL, request)

    const result = await response.json();

    return result;
  }
  catch (error) {
    return error;
  }
}

export default validateLogin;