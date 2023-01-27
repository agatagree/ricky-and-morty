import { Alert } from "@mui/material";

const alertType = {
  pageNotFound: {
    text: "Sorry, page not found.",
  },
  emptyData: {
    text: "Sorry, there is no character matching your criteria.",
  },
};

type AlertType = {
  type?: keyof typeof alertType;
  severity?: "error" | "info";
};

export const AlertMessage = ({ type, severity }: AlertType) => {
  return (
    <Alert variant="outlined" severity={severity}>
      {type ? alertType[type].text : "Sorry, an error occurs"}
    </Alert>
  );
};
