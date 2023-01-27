import { Link } from "react-router-dom";
import { Character } from "utils/Types";
import { TableRow, TableCell } from "@mui/material";

export const CharacterTableRow = ({ character }: { character: Character }) => {
  return (
    <TableRow hover key={character.id}>
      <TableCell>{character.name}</TableCell>
      <TableCell>{character.status}</TableCell>
      <TableCell>{character.species}</TableCell>
      <TableCell>
        <Link to={`/${character.id}`}>{character.url}</Link>
      </TableCell>
    </TableRow>
  );
};
