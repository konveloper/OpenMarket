import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/img/Logo-hodu.png';
import Button from 'components/Common/Button/Button';
import Input from 'components/Common/Input/Input';
import { ContSection, H2IR, LogoImg, InputForm } from './LoginStyle';

export default function Login() {
  return (
    <ContSection>
      <H2IR>로그인 페이지</H2IR>
      <LogoImg src={logoImg} alt='로고 이미지' />
      <InputForm>
        <Input name='email' label='이메일' type='email' />
        <Input name='pw' label='비밀번호' type='password' />
        <Button go={'/'} size='m'>
          로그인
        </Button>
      </InputForm>
      <Link to='/login/signup' style={{ display: 'block', marginTop: '30px' }}>
        회원가입
      </Link>
    </ContSection>
  );
}
