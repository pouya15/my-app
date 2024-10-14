"use client";

import React from "react";

const Cart = () => {
  return (
    <>
      <p>This is my Cart page</p>
    </>
  );
};

export default Cart;

// import React from 'react';
// import { Typography, Box } from '@mui/material';

// const Cart = ({ products }) => {
//     return (
//         <Box sx={{ padding: 2 }}>
//             <Typography variant="h4">Your Cart</Typography>
//             {products.length === 0 ? (
//                 <Typography>No products in the cart.</Typography>
//             ) : (
//                 products.map((product, index) => (
//                     <Typography key={index}>{product.name} - Quantity: {product.quantity}</Typography>
//                 ))
//             )}
//         </Box>
//     );
// };

// export default Cart;
