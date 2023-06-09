import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

const ContSection = styled.section`
  ${Cont}
  text-align: center;
  color: var(--main-grey);
  margin-bottom: 100px;
`;

const H2IR = styled.h2`
  ${IR}
`;

const LogoImg = styled.img`
  width: 238px;
  height: 74px;
  margin: 70px 0 70px 0;
`;

const ContInputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 650px;
  margin: 0 auto;
  text-align: left;
  background-color: #fff;
  box-shadow: -1px 0 20px -1px #f2f2f2, 1px 0 20px -1px #f2f2f2;
  border-radius: 10px;
  padding: 35px;
  div {
    margin-bottom: 10px;
  }
  button {
    color: #fff;
  }
  input {
    width: 480px;
    height: 40px;
    border: transparent;
    border-bottom: 1px solid var(--sub-grey);
    outline: none;
    span {
      display: block;
      margin-bottom: 50px;
    }
    &:focus {
      border-bottom: 2px solid var(--point);
    }
  }
`;

const ContUsername = styled.div`
  display: flex;
  margin-bottom: 10px;
  input {
    width: 346px;
    margin-right: 12px;
  }
  button {
    width: 122px;
    height: 50px;
  }
`;

export { ContSection, LogoImg, H2IR, ContInputForm, ContUsername };
