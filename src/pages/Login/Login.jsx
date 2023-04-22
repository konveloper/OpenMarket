import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logoImg from 'assets/img/logo.svg';
import Button from 'components/Common/Button/Button';
import Input from 'components/Common/Input/Input';
import postLogin from 'api/Login/postLogin';
import {
  ContSection,
  H2IR,
  LogoImg,
  ContInputForm,
  ContUsername,
} from './LoginStyle';

function Login() {
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    login_type: 'BUYER',
  });
  const [usernameErr, setUsernameErr] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [pwErr, setPwErr] = useState('');
  const [pwIsValid, setPwIsValid] = useState(false);

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const usernameHandler = () => {
    if (!signupForm.username) {
      setUsernameErr('username 필드를 추가해주세요 :)');
      setUsernameIsValid(false);
    } else {
      setUsernameErr('');
      setUsernameIsValid(true);
    }
  };

  const passwordHandler = () => {
    if (!signupForm.password) {
      setPwErr('비밀번호는 필수 항목입니다.');
      setPwIsValid(false);
    } else if (signupForm.password.length < 8) {
      setPwErr('비밀번호는 8자 이상이어야 합니다.');
      setPwIsValid(false);
    } else {
      setPwErr('');
      setPwIsValid(true);
    }
  };

  useEffect(() => {
    setUsernameErr();
  }, [signupForm.username]);

  useEffect(() => {
    setPwErr();
  }, [signupForm.password]);

  const LoginHandler = async (userData) => {
    try {
      await postLogin(userData);
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

  const SubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      username: signupForm.username,
      password: signupForm.password,
      login_type: 'BUYER',
    };
    if (usernameIsValid && pwIsValid) {
      LoginHandler(userData);
      alert('환영합니다!');
      navigate('/home');
    }
  };

  return (
    <ContSection>
      <H2IR>로그인 페이지</H2IR>
      <LogoImg src={logoImg} alt='로고 이미지' />
      <ContInputForm onSubmit={SubmitHandler}>
        <ContUsername>
          <Input
            label='아이디'
            type='text'
            name='username'
            max='20'
            defaultValue={signupForm.username}
            onBlur={usernameHandler}
            onChange={inputChangeHandler}
            message={usernameErr}
          />
        </ContUsername>
        <div>
          <Input
            label='비밀번호'
            type='password'
            name='password'
            min='8'
            max='20'
            defaultValue={signupForm.password}
            onBlur={passwordHandler}
            onChange={inputChangeHandler}
            message={pwErr}
          />
        </div>
        <Button
          variant={
            signupForm.username && signupForm.password ? 'abled' : 'disabled'
          }
          disabled={!signupForm.username || !signupForm.password}
          size='m'
        >
          로그인
        </Button>
      </ContInputForm>
      <Link
        to='/login/signup'
        style={{ display: 'block', fontSize: '1.4rem', marginTop: '30px' }}
      >
        회원가입
      </Link>
    </ContSection>
  );
}

export default Login;
