import styled from 'styled-components';

const ProductLi = styled.li`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const ProductImg = styled.img`
  width: 250px;
  height: 250px;
  border: 1px solid var(--sub-grey);
  border-radius: 10px;
`;

const SellerText = styled.p`
  margin-top: 12px;
  font-size: 1.4rem;
`;

const ProductName = styled.p`
  margin-top: 8px;
  font-size: 1.6rem;
`;

const PriceText = styled.strong`
  margin-top: 10px;
  font-weight: 700;
  font-size: 2rem;
`;

export { ProductLi, ProductImg, SellerText, ProductName, PriceText };
