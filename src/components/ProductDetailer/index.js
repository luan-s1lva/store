import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { responseSingleProduct } from "../../services/singleProduct";
import RatingStars from "../RatingStars";

const ProductDetailer = ({ productId }) => {
  const [productData, setProductData] = useState([]);

  const onGetProductData = async (productId) => {
    if (productId === undefined) {
      const getProductData = await responseSingleProduct(productId);

      setProductData(getProductData);
    } else {
      let id = window.location.pathname.substring(9);

      const getProductData = await responseSingleProduct(id);

      setProductData(getProductData);
    }
  };

  useEffect(() => {
    onGetProductData(productId);
  }, []);

  return (
    <>
      <S.Container>
        <S.Card variant="outlined">
          <S.Grid container spacing={3}>
            <S.Grid item xs={6}>
              <S.Image src={productData.image} />
            </S.Grid>

            <S.Grid item xs={6}>
              <S.Typography>Title: {productData.title}</S.Typography>
              {productData.rating ? (
                <>
                
                <S.Typography>Rate: {productData.rating.rate}</S.Typography>
                <RatingStars />
                </>
              ) : (
                <S.Typography>Rate: -</S.Typography>
              )}
              <S.Typography>R${productData.price}</S.Typography>
              <S.Typography>Category: {productData.category}</S.Typography>
              <S.Typography>Desc: {productData.description}</S.Typography>
            </S.Grid>
          </S.Grid>
        </S.Card>
      </S.Container>
    </>
  );
};

export default ProductDetailer;
