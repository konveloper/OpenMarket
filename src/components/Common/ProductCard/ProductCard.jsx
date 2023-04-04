import React from 'react';
import img from 'assets/img/img-item.jpg';
import {
  ProductLi,
  ProductImg,
  SellerText,
  ProductName,
  PriceText,
} from './ProductCardStyle';

function ProductCard() {
  return (
    <ProductLi>
      <ProductImg src={img} alt='제품 이미지' />
      <SellerText>풍년 마켓</SellerText>
      <ProductName>싱싱한 야채</ProductName>
      <PriceText>10000원</PriceText>
    </ProductLi>
  );
}

export default ProductCard;
