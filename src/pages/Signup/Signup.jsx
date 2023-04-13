import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from 'assets/img/logo.svg';
import Input from 'components/Common/Input/Input';
import Button from 'components/Common/Button/Button';
import postUserSignup from 'api/Signup/postUserSignup';
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
    password2: '',
    phone_number: '',
    name: '',
  });
  const [userNameErr, setUserNameErr] = useState('');
  const [IsUserNameValid, setIsUserNameValid] = useState(false);

  const navigate = useNavigate();

  const userNameHandler = async () => {
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!signupForm.username) {
      setUserNameErr('* 아이디는 필수 입력사항입니다.');
      setIsUserNameValid(false);
    } else if (!regExp.test(signupForm.username)) {
      setUserNameErr('* 잘못된 아이디 형식입니다.');
      setIsUserNameValid(false);
    }
    try {
      const userNameData = {
        user: {
          username: signupForm.username,
        },
      };
      const data = await postUserSignup(userNameData);
      if (data.message === '해당 사용자 아이디는 이미 존재합니다.') {
        setUserNameErr(`*${data.message}`);
        setIsUserNameValid(false);
      } else if (data.message === '사용 가능한 아이디입니다.') {
        setUserNameErr('');
        setIsUserNameValid(true);
      }
    } catch (err) {
      console.log(err);
      setIsUserNameValid(false);
    }
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (IsUserNameValid) {
      setIsUserNameValid(true);
      navigate('/login');
    }
  };

  useEffect(() => {
    setUserNameErr();
  }, [signupForm.username]);

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
            defaultValue={signupForm}
            onBlur={userNameHandler}
            onChange={inputChangeHandler}
            message={userNameErr}
            required='required'
          />
          <Button size='s'>중복 확인</Button>
        </ContUserName>
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
          name='name'
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
        <Button
          variant={signupForm.username ? 'abled' : 'disabled'}
          disabled={!signupForm.username}
          size='m'
        >
          오픈 마켓 시작하기
        </Button>
      </ContInputForm>
    </ContSection>
  );
};

export default Signup;
