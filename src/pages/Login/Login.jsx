import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/img/logo.svg';
import Button from 'components/Common/Button/Button';
import Input from 'components/Common/Input/Input';
import { ContSection, H2IR, LogoImg, ContInputForm } from './LoginStyle';

function Login() {
  return (
    <ContSection>
      <H2IR>로그인 페이지</H2IR>
      <LogoImg src={logoImg} alt='로고 이미지' />
      <ContInputForm>
        <Input name='email' label='이메일' type='email' />
        <Input name='pw' label='비밀번호' type='password' />
        <Button size='m'>로그인</Button>
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
