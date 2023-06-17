import { POST_USERS_URL, IMG_API_KEY } from './settings.js';

async function registerUser(userData) {

  let userImg;  // userImg will contain the profile image name or null if no image has been uploaded

  // In a development environment user images will be stored in a local folder
  // The image is appended to formData to be uploaded by multer
  if (process.env.NODE_ENV === 'development') {

    const formData = new FormData();

    if (!userData.img) {
      userImg = null;
    } else {
      userImg = process.env.REACT_APP_IMG_LOCAL_FOLDER + userData.img.name;
      formData.append('image', userData.img);
    }

    formData.append('firstName', userData.firstName);
    formData.append('lastName', userData.lastName);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);
    formData.append('password', userData.password);
    formData.append('date_birth', userData.date_birth);
    formData.append('img', userImg);


    // Upload image and data using multer
    try {
      const request = {
        'method': 'POST',
        'body': formData
      };

      const response = await fetch(POST_USERS_URL, request);
      const result = await response.json();
      return result;
    }
    catch (error) {
      return error;
    }
  };

  // In a production environment user images will be stored in an image server. 
  // After uploading the picture to the server the url is retrieved to be stored for future use
  if (process.env.NODE_ENV !== 'development') {
    if (!userData.img) {
      userImg = null;
    } else {
      const dateNow = Date.now();
      const imgName = dateNow + '_' + userData.img.name;

      const imgFormData = new FormData();

      imgFormData.append('key', IMG_API_KEY);
      imgFormData.append('name', imgName);
      imgFormData.append('image', userData.img);

      try {
        const imgRequest = {
          'method': 'POST',
          'body': imgFormData
        }

        const response = await fetch(process.env.REACT_APP_IMG_API_URL, imgRequest);

        const result = await response.json();

        if (result.status && result.status === 200) {
          userImg = result.data.thumb.url;
        } else {
          userImg = null;
        }
      }
      catch (error) {
        return error;
      }
    }

    let data = {
      'firstName': userData.firstName,
      'lastName': userData.lastName || null,
      'email': userData.email,
      'phone': userData.phone || null,
      'password': userData.password,
      'date_birth': userData.date_birth || null,
      'img': userImg
    }

    try {
      const request = {
        'headers': {
          'Content-Type': 'application/json'
        },
        'method': 'POST',
        'body': JSON.stringify(data)
      };

      const response = await fetch(POST_USERS_URL, request);

      const result = await response.json();

      return result;
    }
    catch (error) {
      return error;
    }
  }
}

export default registerUser;