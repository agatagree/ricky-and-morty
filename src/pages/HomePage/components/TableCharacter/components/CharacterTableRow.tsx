import { Link } from "react-router-dom";
import { Character } from "utils/Types";
import { TableRow, TableCell } from "@mui/material";

export const CharacterTableRow = ({ character }: { character: Character }) => {
  return (
    <TableRow
      hover
      tabIndex={-1}
      key={character.id}
      component={Link}
      to={`/${character.id}`}
      sx={{ textDecoration: "none" }}
    >
      <TableCell>{character.name}</TableCell>
      <TableCell>{character.status}</TableCell>
      <TableCell>{character.species}</TableCell>
      <TableCell>{character.url}</TableCell>
    </TableRow>
  );
};
