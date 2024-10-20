"use client";

import React, { useContext } from "react";
import CartContext from "./Contexts/cartContext";
import { Typography, Grid2, colors } from "@mui/material";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Typography variant="h4">Your Cart:</Typography>
      {cart.length === 0 ? (
        <Grid2>
          <Typography variant="h3" sx={{ color: "red" }}>
            Your cart is empty!
          </Typography>
        </Grid2>
      ) : (
        cart.map((item, id) => (
          <Grid2
            key={id}
            sx={{
              backgroundColor: "white",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: 4,
              p: 2.5,
              my: 2.5,
            }}
          >
            <Grid2>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "50%", height: "200px", objectFit: "contain" }}
              />
            </Grid2>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="h5">Quantity: {item.count}</Typography>
            <Typography variant="h6">
              Total Price: {item.price * item.count}
            </Typography>
          </Grid2>
        ))
      )}
    </>
  );
};

export default Cart;
