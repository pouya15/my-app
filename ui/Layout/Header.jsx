"use client";
import { Grid, Typography, Button, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
// import { useRouter } from "next/router";

const Header = () => {
  // const router = useRouter();

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

      }}
    >
      <Grid item xs={6}>
        <Typography variant="h6">My Products</Typography>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end">
        <Grid sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">
            About
          </Button>
        </Grid>

        <IconButton color="inherit">
          <Badge badgeContent={5} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
