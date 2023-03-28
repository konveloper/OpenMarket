import React from 'react';
import logoImg from 'assets/img/Logo-hodu.png';
import Input from 'components/Common/Input/Input';
import Button from 'components/Common/Button/Button';
import { ContSection, LogoImg, H2IR, ContInputForm } from './SignupStyle';

export default function Signup() {
  return (
    <ContSection>
      <H2IR>회원가입 페이지</H2IR>
      <LogoImg src={logoImg} />
      <ContInputForm>
        <Input
          label='아이디'
          type='text'
          name='accountname'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          required='required'
        ></Input>
        <Input
          label='비밀번호'
          type='password'
          name='password'
          placeholder='6자리 이상의 비밀번호를 설정해주세요.'
          min='6'
        />
        <Input
          label='비밀번호 재확인'
          type='password'
          name='passwordCheck'
          placeholder='위에서 설정한 비밀번호를 그대로 입력해주세요.'
          min='6'
        />
        <Input
          label='사용자 이름'
          type='text'
          name='username'
          placeholder='2~10자 이내여야 합니다.'
          min='2'
          max='10'
          required='required'
        ></Input>
        <Input
          label='이메일'
          type='email'
          name='email'
          placeholder='이메일 주소를 입력해주세요.'
        />
        <Button go={'/'} size='m'>
          오픈 마켓 시작하기
        </Button>
      </ContInputForm>
    </ContSection>
  );
}
