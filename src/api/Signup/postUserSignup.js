import { instance } from 'api/api';

const postUserSignup = async (formData) => {
  const res = await instance.post('/accounts/signup/', formData);
  return res.data;
};

export default postUserSignup;
