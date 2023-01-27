import { useState } from "react";
import { SearchField, TableCharacter } from "./components";

export const HomePage = () => {
  const [queryName, setQueryName] = useState("");

  return (
    <>
      <SearchField queryName={queryName} setQueryName={setQueryName} />
      <TableCharacter queryName={queryName} />
    </>
  );
};
