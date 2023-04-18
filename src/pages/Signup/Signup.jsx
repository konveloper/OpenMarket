import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from 'assets/img/logo.svg';
import Input from 'components/Common/Input/Input';
import Button from 'components/Common/Button/Button';
import postUserSignup from 'api/Signup/postUserSignup';
import postUsernameIsValid from 'api/Signup/postUsernameIsValid';
import {
  ContSection,
  LogoImg,
  H2IR,
  ContInputForm,
  ContUserName,
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
    try {
      const usernameData = {
        username: signupForm.username,
      };
      const res = await postUsernameIsValid(usernameData);
      console.log(res);
      if (res.message === '이미 사용 중인 아이디입니다.') {
        setUsernameErr(`${res.message}`);
        setUsernameIsValid(false);
      } else if (res.message === '멋진 아이디네요 :)') {
        setUsernameErr(`${res.message}`);
        setUsernameIsValid(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const passwordHandler = () => {
    if (!signupForm.password) {
      setPasswordErr('비밀번호는 필수 항목입니다.');
      setPasswordIsValid(false);
    } else if (signupForm.password.length < 6) {
      setPasswordErr('비밀번호는 6자 이상이어야 합니다.');
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
    try {
      const res = await postUserSignup(userData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      username: signupForm.username,
      password: signupForm.password,
    };
    if (usernameIsValid && passwordIsValid) {
      signupHandler(userData);
      navigate('/login');
    }
  };

  return (
    <ContSection>
      <H2IR>회원가입 페이지</H2IR>
      <LogoImg src={logoImg} />
      <ContInputForm onSubmit={SubmitHandler}>
        <ContUserName>
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
        </ContUserName>
        <div>
          <Input
            label='비밀번호'
            type='password'
            name='password'
            placeholder='6자리 이상의 비밀번호를 설정해주세요.'
            min='6'
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
