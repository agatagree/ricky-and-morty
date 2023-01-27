import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { SingleCharacter } from "pages/SingleCharacter";
import { AlertMessage } from "components";
import { Container } from "@mui/material";

export const AppRouter = () => {
  return (
    <Container
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        overflow: "hidden",
        my: 4,
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
