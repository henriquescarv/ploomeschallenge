import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const ProductsList = styled.ul`
  align-self: center;
  width: 920px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px;
  padding: 0;
`;

export const Product = styled.li`
  position: relative;
  border: 1px solid #000;
  padding: 16px;
  list-style: none;
  display: flex;
  width: 100%;
`;

export const Image = styled.img``;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 12px
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Text = styled.p`
  margin: 0;
  text-align: start;
`;

export const PriceArrivalText = styled(Text)`
  text-decoration: line-through;
  font-size: 12px;
`;

export const LinkButton = styled.a`
  align-self: center;
  margin: 12px;
  position: absolute;
  right: 0;
  background: green;
  padding: 12px;
  border-radius: 8px;
  height: fit-content;
  text-decoration: none;
  color: white;
`;