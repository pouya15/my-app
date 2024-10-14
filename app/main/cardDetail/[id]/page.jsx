"use client";
import React, { useEffect, useState } from "react";
import { Grid2, Typography } from "@mui/material";

import { useParams } from "next/navigation";

const CardDetail = () => {
  const [detailProduct, setDetailProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setDetailProduct(json);
      });
  }, []);
  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "white",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: 4,
          transition: "0.3s",
          "&:hover": {
            boxShadow: 4,
          },
          display: "flex",
          flexDirection: "row",
          p: 2.5,
          height: "auto",
          width: "auto",
        }}
      >
        <img
          src={detailProduct.image}
          alt="Description"
          style={{ width: "50%", height: "auto" }}
        />
        <Grid2 p={2} sx={{ flexGrow: 1, alignItems: "flex-end" }}>
          <Typography variant="h5" gutterBottom>
            {detailProduct.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detailProduct.description}
          </Typography>
          <Typography mt={2} variant="h5" color="red">
            Price: {detailProduct.price}$
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CardDetail;
