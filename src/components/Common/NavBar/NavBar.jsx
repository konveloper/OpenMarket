import React from 'react';
import logoImg from 'assets/img/Logo-hodu.png';
import iconCart from 'assets/img/icon-shopping-cart.svg';
import iconUser from 'assets/img/icon-user.svg';
import {
  ContNav,
  H2IR,
  Div,
  LogoImg,
  ShearchInput,
  InfoDiv,
  CartBtn,
  MyPageBtn,
} from './NavBarStyle';

function NavBar() {
  return (
    <ContNav>
      <H2IR>네비게이션 바</H2IR>
      <Div>
        <LogoImg src={logoImg} alt='로고' />
        <ShearchInput placeholder='상품을 검색해보세요!' />
      </Div>
      <InfoDiv>
        <CartBtn>
          <img src={iconCart} alt='장바구니 이미지' />
          장바구니
        </CartBtn>
        <MyPageBtn>
          <img src={iconUser} alt='마이 페이지 이미지' />
          마이 페이지
        </MyPageBtn>
      </InfoDiv>
    </ContNav>
  );
}

export default NavBar;
