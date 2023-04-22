import React from 'react';
import NavBar from 'components/Common/NavBar/NavBar';
import ProductCard from 'components/Common/ProductCard/ProductCard';
import Footer from 'components/Common/Footer/Footer';
import { ContProductCard, H2IR, PageWrap, ProductCardUl } from './HomeStyle';

function Products() {
  return (
    <>
      <NavBar />
      <ContProductCard>
        <H2IR>전체 제품 페이지</H2IR>
        <PageWrap>
          <ProductCardUl>
            <ProductCard />
          </ProductCardUl>
        </PageWrap>
      </ContProductCard>
      <Footer />
    </>
  );
}

export default Products;
