import { useState } from "react";
import { SearchField, TableCharacter } from "./components";
import { Box } from "@mui/material";

export const HomePage = () => {
  const [queryName, setQueryName] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 3,
        overflow: "hidden",
      }}
    >
      <SearchField queryName={queryName} setQueryName={setQueryName} />
      <TableCharacter queryName={queryName} />
    </Box>
  );
};
