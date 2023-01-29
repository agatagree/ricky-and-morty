import { useState, SyntheticEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Snackbar } from "@mui/material";

export const SnackBarMessage = ({ text }: { text: string }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={text}
      action={action}
    />
  );
};
