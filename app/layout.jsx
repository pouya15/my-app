"use client";
import Container from "@mui/material/Container";
import Header from "../ui/components/header";
import ThemeProvide from "../theme/ThemeProvider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvide>
          <Header />
          <Container maxWidth="xl">{children}</Container>
        </ThemeProvide>
      </body>
    </html>
  );
}
