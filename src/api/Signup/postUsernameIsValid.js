import { instance } from 'api/api';

const postUsernameIsValid = async (formData) => {
  try {
    const res = await instance.post(
      '/accounts/signup/valid/username/',
      formData
    );
    return res.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export default postUsernameIsValid;
