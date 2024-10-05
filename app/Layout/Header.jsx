import { Grid, Typography, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => (
  <Grid
    container
    alignItems="center"
    spacing={2}
    sx={{ padding: 2, backgroundColor: "primary.main", color: "white" }}
  >
    <Grid item xs={6}>
      <Typography variant="h6">My Website</Typography>
    </Grid>
    <Grid item xs={6} container justifyContent="flex-end">
      <Button color="inherit">Home</Button>
      <Button color="inherit">About</Button>
      <Button startIcon={<ShoppingCartOutlinedIcon sx={{ mx: 2 }} />}> </Button>
    </Grid>
  </Grid>
);

export default Header;
