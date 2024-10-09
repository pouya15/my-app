import Container from "@mui/material/Container";

export default function RootLayout({ children }) {
  return <Container maxWidth="sm">{children}</Container>;
}
