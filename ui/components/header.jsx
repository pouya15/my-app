"use client";
import React, { useContext, useState } from "react";
import CartContext from "@/ui/components/Contexts/cartContext";

import { Grid, Typography, Button, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <Grid
      container
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: "white",
        color: "black",
        position: "sticky",
        top: 0,
        boxShadow: 4,
        zIndex:2
      }}
    >
      <Grid item xs={6}>
          <Typography variant="h6" textDecoration='none'>
            My Products
          </Typography>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end">
        <Grid>
          <Link href="/">
            <Button sx={{ color: "black" }}>Home</Button>
          </Link>
          <Link href="/main/about">
            <Button sx={{ textDecoration: "none", color: "black" }}>
              About
            </Button>
          </Link>
        </Grid>
        <Link href="/main/cart">
          <IconButton sx={{ color: "black" }}>
            <Badge
              badgeContent={
                cart.length && cart.map((i) => i.count)?.reduce((i, j) => i + j)
              }
              color="secondary"
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
