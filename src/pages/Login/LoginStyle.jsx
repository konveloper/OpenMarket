import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

const ContSection = styled.section`
  ${Cont}
  text-align: center;
  color: var(--main-grey);
  background-color: #fff;
`;

const H2IR = styled.h2`
  ${IR}
`;

const LogoImg = styled.img`
  width: 238px;
  height: 74px;
  margin: 70px 0;
`;

const ContInputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 320px;
  margin: 0 auto;
  text-align: left;
  box-shadow: -1px 0 20px -1px #f2f2f2, 1px 0 20px -1px #f2f2f2;
  border-radius: 10px;
  padding: 35px;
  button {
    color: #fff;
    margin-top: 20px;
  }
  input {
    width: 480px;
    height: 60px;
    border: transparent;
    border-bottom: 1px solid var(--sub-grey);
    outline: none;
    margin-bottom: 20px;
    &:focus {
      border-bottom: 2px solid var(--point);
    }
  }
`;

export { ContSection, H2IR, LogoImg, ContInputForm };
