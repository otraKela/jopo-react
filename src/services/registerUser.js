import { POST_USERS_URL } from './settings.js';

async function registerUser (userData) {
  try {
    const userRegistrationData = {
      'firstName': userData.firstName,
      'lastName': userData.lastName,
      'email': userData.email,
      'phone': userData.phone,
      'password': userData.password,
      'date_birth': userData.dateBirth
    }

    const request = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(userRegistrationData)
    };

    const response = await fetch(POST_USERS_URL, request)

    const result = await response.json();
    return result;
  }
  catch (error) {
    return error;
  }
}

export default registerUser;