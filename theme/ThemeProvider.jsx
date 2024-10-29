import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({ children }) {
  return (
    <>
      <CssBaseline />

      {children}
    </>
  );
}
