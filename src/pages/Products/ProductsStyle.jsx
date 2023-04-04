import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

const ContProductCard = styled.div`
  ${Cont}
  background-color: #fff;
`;

const H2IR = styled.h2`
  ${IR}
`;

const PageWrap = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 150px auto;
`;

const ProductCardUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
`;

const ProductCard = styled.li`
  position: relative;
`;

export { ContProductCard, H2IR, PageWrap, ProductCardUl, ProductCard };
