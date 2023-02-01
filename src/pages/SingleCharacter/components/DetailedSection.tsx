import { Typography, Box } from "@mui/material";

export const DetialedSection = ({
  label,
  text,
}: {
  label: string;
  text: string;
}) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">{label}</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};
