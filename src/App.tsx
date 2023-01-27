import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes/AppRouter";
import { Box, ThemeProvider } from "@mui/material";
import { Header, Footer } from "components";
import "style/global.css";
import { theme } from "style/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
