import React from "react";
import * as Styles from './ProductsList.styles';
import productsList from '../../data/productList.json'

const ProductsList = () => {
  return (
    <Styles.Wrapper>
      <Styles.ProductsList>
        {productsList.map(product => (
          <Styles.Product key={product.ProductID}>
            <Styles.Image src={product.ThumbnailURL} />
            <Styles.ProductInfos>
              <Styles.Text>{product.Name}</Styles.Text>
              <Styles.PriceContainer>
                <Styles.Text>
                  {`$ ${product.Price}`}
                </Styles.Text>
                <Styles.PriceArrivalText>
                  {`$ ${product['Retail Price']}`}
                </Styles.PriceArrivalText>
              </Styles.PriceContainer>
            </Styles.ProductInfos>
            <Styles.LinkButton href={`product-detail/${product.ProductID}`}>View details</Styles.LinkButton>
          </Styles.Product>
        ))}
      </Styles.ProductsList>
    </Styles.Wrapper>
  );
}

export default ProductsList;
