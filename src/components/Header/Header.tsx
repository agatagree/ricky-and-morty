import { AppBar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "secondary.light", p: 2 }}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Rick and Morty
      </Typography>
    </AppBar>
  );
};
