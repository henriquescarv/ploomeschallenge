import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Styles from './ProductDetail.styles';
import productsList from '../../data/productList.json'

const ProductDetail = () => {
  const [display, setDisplay] = useState(false);

  const params = useParams();
  const product = productsList.find(product => product.ProductID.toString() === params.productId);
  console.log(params.productId);

  return (
    <Styles.Wrapper>
      <Styles.Notification display={display}>
        Product added successfully!
      </Styles.Notification>
      <Styles.ProductInfo>
        <Styles.Image src={product?.PictureURL} />
        <Styles.ProductDescription>
          <Styles.Title>{product?.Name}</Styles.Title>
          <Styles.Text>{product?.RatingAvg}</Styles.Text>
          <Styles.Text>{product?.Description}</Styles.Text>
        </Styles.ProductDescription>
        <Styles.ProductSale>
          <Styles.PriceContainer>
            <Styles.Text>{product?.Price}</Styles.Text>
            <Styles.PriceArrivalText>{product?.['Retail Price']}</Styles.PriceArrivalText>
          </Styles.PriceContainer>
          <Styles.NoStockText>{product?.Stock === 0 && 'Out of Stock!'}</Styles.NoStockText>
          <Styles.Button onClick={() => setDisplay(!display)}>Add to cart!</Styles.Button>
        </Styles.ProductSale>
      </Styles.ProductInfo>
      <Styles.Text>
        <b>{'Brand name: '}</b>
        {product?.Brand}
      </Styles.Text>
      <Styles.Text>
        <b>{'Brand color: '}</b>
        {product?.Color}
      </Styles.Text>
    </Styles.Wrapper>
  );
}

export default ProductDetail;
