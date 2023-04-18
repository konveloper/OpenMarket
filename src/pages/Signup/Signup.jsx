import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from 'assets/img/logo.svg';
import Input from 'components/Common/Input/Input';
import Button from 'components/Common/Button/Button';
import postSignup from 'api/Signup/postSignup';
import postUsernameIsValid from 'api/Signup/postUsernameIsValid';
import {
  ContSection,
  LogoImg,
  H2IR,
  ContInputForm,
  ContUsername,
} from './SignupStyle';

const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
  });
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordErr, setPasswordErr] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const usernameHandler = () => {
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!signupForm.username) {
      setUsernameErr('username 필드를 추가해주세요 :)');
      setUsernameIsValid(false);
    } else if (!regExp.test(signupForm.username)) {
      setUsernameErr('아이디는 20자 이내의 영문, 숫자만 사용 가능합니다.');
      setUsernameIsValid(false);
    }
  };

  const usernameValidationHandler = async () => {
    const usernameData = {
      username: signupForm.username,
    };
    const res = await postUsernameIsValid(usernameData);
    if (res.FAIL_Message === '이미 사용 중인 아이디입니다.') {
      setUsernameErr(`${res.FAIL_Message}`);
      setUsernameIsValid(false);
    } else if (res.Success === '멋진 아이디네요 :)') {
      setUsernameErr(`${res.Success}`);
      setUsernameIsValid(true);
    }
  };

  const passwordHandler = () => {
    if (!signupForm.password) {
      setPasswordErr('비밀번호는 필수 항목입니다.');
      setPasswordIsValid(false);
    } else if (signupForm.password.length < 8) {
      setPasswordErr('비밀번호는 8자 이상이어야 합니다.');
      setPasswordIsValid(false);
    } else {
      setPasswordErr('');
      setPasswordIsValid(true);
    }
  };

  useEffect(() => {
    setUsernameErr();
  }, [signupForm.username]);

  useEffect(() => {
    setPasswordErr();
  }, [signupForm.password]);

  const signupHandler = async (userData) => {
    const res = await postSignup(userData);
    console.log(res);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      username: signupForm.username,
      password: signupForm.password,
      password2: signupForm.password,
      phone_number: '01057989241',
      name: 'kon',
    };
    if (usernameIsValid && passwordIsValid) {
      signupHandler(userData);
      alert('환영합니다!');
      navigate('/login');
    }
  };

  return (
    <ContSection>
      <H2IR>회원가입 페이지</H2IR>
      <LogoImg src={logoImg} />
      <ContInputForm onSubmit={SubmitHandler}>
        <ContUsername>
          <Input
            label='아이디'
            type='text'
            name='username'
            placeholder='영문, 숫자만 사용 가능합니다.'
            min='6'
            max='20'
            defaultValue={signupForm.username}
            onBlur={usernameHandler}
            onChange={inputChangeHandler}
            message={usernameErr}
          />
          <Button onClick={usernameValidationHandler} onsize='s'>
            중복 확인
          </Button>
        </ContUsername>
        <div>
          <Input
            label='비밀번호'
            type='password'
            name='password'
            placeholder='8자리 이상의 비밀번호를 설정해주세요.'
            min='8'
            defaultValue={signupForm.password}
            onBlur={passwordHandler}
            onChange={inputChangeHandler}
            message={passwordErr}
          />
        </div>
        <Button size='m'>{'오픈 마켓 시작하기'}</Button>
      </ContInputForm>
    </ContSection>
  );
};

export default Signup;
