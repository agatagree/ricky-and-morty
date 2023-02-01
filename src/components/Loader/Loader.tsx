import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
