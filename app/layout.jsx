import Container from "@mui/material/Container";
import Header from "../ui/Layout/Header";
import ThemeProvide from "../theme/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvide>
          <Header />
          <Container maxWidth="sm">{children}</Container>
        </ThemeProvide>
      </body>
    </html>
  );
}
