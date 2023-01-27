import { Alert } from "@mui/material";

const alertType = {
  pageNotFound: {
    text: "Sorry, page not found.",
  },
  emptyData: {
    text: "Sorry, there is nothing here.Try with diffrent name.",
  },
};

type AlertType = {
  type?: keyof typeof alertType;
  severity?: "error" | "warning" | "info" | "success";
};

export const AlertMessage = ({ type, severity }: AlertType) => {
  return (
    <Alert variant="outlined" severity={severity}>
      {type ? alertType[type].text : "Sorry, an error occurs"}
    </Alert>
  );
};