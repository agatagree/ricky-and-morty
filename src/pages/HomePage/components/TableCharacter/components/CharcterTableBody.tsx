import { Character } from "utils/Types";
import { CharacterTableRow } from "./CharacterTableRow";
import { OrderByType, OrderType } from "./utils/SortType";
import { TableBody } from "@mui/material";

type CharacterTableType = {
  characters: Character[] | undefined;
  orderBy: OrderByType;
  order: OrderType;
};

export const CharacterTableBody = ({
  characters,
  orderBy,
  order,
}: CharacterTableType) => {
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
