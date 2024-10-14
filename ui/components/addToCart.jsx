import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

const AddToCartCounter = () => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handleRemoveFromCart = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button
        variant="outlined"
        color="success"
        onClick={handleAddToCart}
      >
        Add
      </Button>
      <Typography variant="h6">{count}</Typography>
      <Button
        variant="outlined"
        color="error"
        onClick={handleRemoveFromCart}
      >
        Remove
      </Button>
    </Box>
  );
};

export default AddToCartCounter;
