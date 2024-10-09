import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Grid2 } from "@mui/material";

const HomePage = ( {cardDetail}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  
  

  return (
    <>
      <Grid2 container>
        <Card items={products}  />
      </Grid2>
    </>
  );
};

export default HomePage;


