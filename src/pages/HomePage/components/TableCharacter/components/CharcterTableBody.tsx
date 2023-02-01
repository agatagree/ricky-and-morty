import { useContext } from "react";
import { TableContext } from "pages/HomePage/provider/TableProvider";
import { CharacterTableRow } from "./CharacterTableRow";
import { TableBody } from "@mui/material";
import { Character } from "types/Types";

type TableBodyType = {
  characters: Character[] | undefined;
};

export const CharacterTableBody = ({ characters }: TableBodyType) => {
  const { order, orderBy } = useContext(TableContext);
  if (orderBy !== "id") {
    characters?.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return order === "desc" ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === "desc" ? 1 : -1;
      }
      return 0;
    });
  }

  return (
    <TableBody>
      {characters?.map((character, index) => {
        return <CharacterTableRow character={character} key={index} />;
      })}
    </TableBody>
  );
};
