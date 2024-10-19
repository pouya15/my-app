import React, { useContext, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import CartContext from "@/app/Contexts/cartContext";

const AddToCartCounter = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    cart.map((i) => i.id).includes(item.id)
      ? setCart([
          ...cart.filter((j) => j.id !== item.id),
          {
            ...item,
            count: cart.filter((i) => i.id === item.id)[0]?.count + 1,
          },
        ])
      : setCart([...cart, { ...item, count: 1 }]);
  };

  const handleRemoveFromCart = () => {
    cart.filter((i) => i.id === item.id)[0]?.count < 2
      ? setCart(cart.filter((j) => j.id !== item.id))
      : setCart([
          ...cart.filter((j) => j.id !== item.id),
          {
            ...item,
            count: cart.filter((i) => i.id === item.id)[0]?.count - 1,
          },
        ]);
  };
 

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button variant="outlined" color="success" onClick={handleAddToCart}>
        Add
      </Button>
      <Typography variant="h6">
        {/* {cart.map((i) => i.count).reduce((i, j) => i + j)} */}
        {cart.filter((i) => i.id === item.id)[0]?.count}
      </Typography>
      <Button variant="outlined" color="error" onClick={handleRemoveFromCart}>
        Remove
      </Button>
    </Box>
  );
};

export default AddToCartCounter;
