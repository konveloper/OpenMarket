import { instance } from 'api/api';

const postSignup = async (formData) => {
  console.log(formData);
  const res = await instance.post('/accounts/signup/', formData);
  console.log(res.data);
  return res.data;
};

export default postSignup;
