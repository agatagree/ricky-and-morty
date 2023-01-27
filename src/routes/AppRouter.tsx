import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { AlertMessage } from "components";
import { HomePage } from "pages/HomePage";
import { SingleCharacter } from "pages/SingleCharacter";

export const AppRouter = () => {
  return (
    <Container
      sx={{
        flex: 1,
        display: "flex",
        my: 4
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SingleCharacter />} />
        <Route path="*" element={<AlertMessage type={"pageNotFound"} />} />
      </Routes>
    </Container>
  );
};
