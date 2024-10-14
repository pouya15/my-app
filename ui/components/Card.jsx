"use client";
import { Grid2, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Card({ items }) {
  return (
    <>
      <Grid2 container>
        {items.map((item) => (
          <Grid2
            key={item.id}
            item
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            p={2}
          >
            <Link
              href={`/main/cardDetail/${item.id}`}
              passHref
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Grid2
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: 4,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 14,
                  },
                  display: "flex",
                  flexDirection: "column",
                  p: 2.5,
                  height: "100%",
                }}
              >
                <img
                  src={item.image}
                  alt="Description"
                  style={{ width: "100%", height: "300px", objectFit: 'contain' }}
                />
                <Grid2 p={2} sx={{ flexGrow: 1, alignItems: "flex-end" }}>
                  <Typography variant="h5" gutterBottom sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2, 
                    lineHeight: '1.5em', 
                    maxHeight: '3em',
                }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2, 
                    lineHeight: '1.5em', 
                    maxHeight: '3em',
                }}>
                    {item.description}
                  </Typography>
                  <Typography mt={2} variant="h5" color="red">
                    Price: {item.price}$
                  </Typography>
                </Grid2>
              </Grid2>
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

// {
/* <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "auto", padding: "10px" }}
          /> */
// }

// <Typography variant="h6" px={2} gutterBottom>{title}</Typography>
// <Typography variant="h6" px={2}gutterBottom color="text.secondary">Price: {price}$</Typography>

//   <Grid2
//   container

//   marginTop={10}

//   sx={{
//     border: 1,
//     borderRadius: "16px",
//     boxShadow: 5,
//     transition: "0.3s",
//     "&:hover": {
//       boxShadow: 8,
//     },
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//   }}>

//   <Grid2
//     size={{ xs: 12, sm: 4, md: 2 }}
//   >

//   </Grid2>

// </Grid2>
