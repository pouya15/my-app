"use client";
import Container from "@mui/material/Container";
import Header from "../ui/components/header";
import ThemeProvide from "../theme/ThemeProvider";
import "./globals.css";
import CartContext from "../ui/components/Contexts/cartContext";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <html lang="en">
      <body>
        <CartContext.Provider value={{ cart, setCart }}>
          <ThemeProvide>
            <Header />
            <Container maxWidth="xl">{children}</Container>
          </ThemeProvide>
        </CartContext.Provider>
      </body>
    </html>
  );
}
