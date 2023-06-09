import styled from 'styled-components';
import { IR } from 'styles/GlobalStyles';

const ContNav = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1;
`;

const H2IR = styled.h2`
  ${IR}
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
`;

const LogoImg = styled.img`
  width: 124px;
  height: 45px;
  margin: 20px;
`;

const ShearchInput = styled.input`
  width: 400px;
  height: 46px;
  padding: 13px 22px;
  margin-top: 20px;
  outline: 2px solid var(--point);
  border: none;
  border-radius: 50px;
  font-size: 1.4rem;
  &::placeholder {
    color: var(--sub-grey);
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 100px;
`;

const CartBtn = styled.button`
  width: 40px;
  height: 50px;
  margin: 20px;
`;

const MyPageBtn = styled.button`
  width: 40px;
  height: 50px;
  margin: 20px;
`;

export {
  ContNav,
  H2IR,
  Div,
  LogoImg,
  ShearchInput,
  InfoDiv,
  CartBtn,
  MyPageBtn,
};
