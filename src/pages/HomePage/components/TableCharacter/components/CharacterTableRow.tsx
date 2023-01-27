import { Character } from "utils/Types";
import { TableRow, TableCell } from "@mui/material";

export const CharacterTableRow = ({ character }: { character: Character }) => {
  return (
    <TableRow tabIndex={-1} key={character.id}>
      <TableCell>{character.name}</TableCell>
      <TableCell>{character.status}</TableCell>
      <TableCell>{character.species}</TableCell>
      <TableCell>{character.url}</TableCell>
    </TableRow>
  );
};
