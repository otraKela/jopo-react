import { POST_USERS_URL, IMG_API_KEY } from './settings.js';

async function registerUser (userData) {
  let userImg;

  const formData = new FormData();

  formData.append ('firstName', userData.firstName);
  formData.append ('lastName', userData.lastName);
  formData.append ('email', userData.email);
  formData.append ('phone', userData.phone);
  formData.append ('password', userData.password);
  formData.append ('date_birth', userData.date_birth);   

  // Determining the value of userImg: this field contains the url to access the user image once it's
  // stored
  if (!userData.img ) {
    userImg = null;

  } else {
    // In a development environment user images will be stored in a local folder
    // The image is appended to formData to be uploaded by multer
    // if (process.env.NODE_ENV === 'development') {
    if (process.env.NODE_ENV === 'development') {
      userImg = process.env.REACT_APP_IMG_LOCAL_FOLDER  + userData.img.name;
      formData.append ('image', userData.img);

    } else {

      // In a production environment user images will be stored in an image server. 
      // After uploading the picture to the server the url is retrieved to be stored for future use
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

        const response = await fetch( process.env.REACT_APP_IMG_API_URL, imgRequest );
        
        const result = await response.json();
   
        if ( result.status && result.status === 200 ) {
          userImg = result.data.thumb.url;
        } else {
          userImg = null;
        }
      }
      catch (error) {
        return error;
      }
    }
  }

    // Complete the user data
  formData.append ('img', userImg);  // user image url

  // Completing the registration process by adding the user to the DB
  try {

    const request = {
      'headers': {
        // 'Referer': 'https://jopo-react.netlify.app/registration',
        'Content-Type': 'application/x-www-form-urlencoded'
         },
      'method': 'POST',
      'body': formData
     };
console.log('request', request);
console.log('linea 73')     
    const response = await fetch(POST_USERS_URL, request);
console.log('linea 75')   
    const result = await response.json();
console.log('result data', result) 
    return result;
  }
  catch (error) { 
    return error;
  }

}

export default registerUser;