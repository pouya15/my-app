"use client";
import React, { useEffect, useState } from "react";
import { Container, Grid2, Typography } from "@mui/material";

import { useParams } from "next/navigation";
import AddToCartCounter from "@/ui/components/addToCart";

const CardDetail = () => {
  const [detailProduct, setDetailProduct] = useState([]);
  const { id } = useParams();
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setDetailProduct(json);
  //     });
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await response.json();
      setDetailProduct(json);
    };

    fetchProducts();
  }, []);
  return (
    <Container>
      <Grid2
        container
        sx={{
          backgroundColor: "white",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: 4,
          p: 2.5,
        }}
      >
        <Grid2>
          <img
            src={detailProduct.image}
            alt="Description"
            style={{ width: "50%", height: "auto" }}
          />
        </Grid2>
        <Grid2>
          <Grid2>
            <Typography variant="h5" gutterBottom>
              {detailProduct.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {detailProduct.description}
            </Typography>
            <Typography mt={2} variant="h5" color="red">
              Price: {detailProduct.price}$
            </Typography>
            <Grid2>
              <AddToCartCounter item={detailProduct} />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default CardDetail;
