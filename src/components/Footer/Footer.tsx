import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ p: 2, bgcolor: "secondary.light", boxShadow: 3 }}>
      <Typography variant="caption">
        &copy; {new Date().getFullYear()} xyz
      </Typography>
    </Box>
  );
};
