import { instance } from 'api/api';

const postSignup = async (formData) => {
  try {
    console.log(formData);
    const res = await instance.post('/accounts/signup/', formData);
    console.log(res.data);
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

export default postSignup;
