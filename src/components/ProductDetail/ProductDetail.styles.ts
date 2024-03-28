import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 32px;
`;

export const Image = styled.img``;

export const Product = styled.div`
`;

export const Title = styled.h1`
  text-align: start;
  margin: 0;
  font-weight: 400;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 8px;
  text-align: start;
`;

export const NoStockText = styled(Text)`
  font-weight: 600;
  color: red;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const PriceArrivalText = styled(Text)`
  text-decoration: line-through;
  font-size: 12px;
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 20px;
  margin: 12px;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductSale = styled(ProductInfo)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Notification = styled.div<{
  display: boolean;
}>`
  ${({ display=false }) => css`
    display: ${display ? 'block' : 'none'};
    position: fixed;
    width: 100%;
    padding: 20px;
    margin: 0 120px;
    color: #fff;
    background: green;
  `};
`;

export const Button = styled.button`
  height: fit-content;
`;
