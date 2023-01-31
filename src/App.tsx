import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes/AppRouter";
import { Header, Footer } from "components";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "style/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "secondary.main",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <AppRouter />
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};
