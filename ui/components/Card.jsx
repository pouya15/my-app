import { Box, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Card({ items }) {
  return (
    <>
      <Grid2 container>
        {items.map((item, index) => (
          <Grid2 key={index} item md={4} p={2}>
            <Link
              href="/main/cardDetail"
              passHref
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 4,
                  },
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <img
                  src={item.image}
                  alt="Description"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box p={2} sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography mt={2} variant="h5" color="red">
                    Price: {item.price}$
                  </Typography>
                </Box>
              </Box>
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
