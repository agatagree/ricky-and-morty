import { TableRow, TableCell, Link } from "@mui/material";
import { Character } from "types/Types";

export const CharacterTableRow = ({ character }: { character: Character }) => {
  return (
    <TableRow hover key={character.id}>
      <TableCell>{character.name}</TableCell>
      <TableCell>{character.status}</TableCell>
      <TableCell>{character.species}</TableCell>
      <TableCell>
        <Link href={`/${character.id}`} underline="hover" color="inherit">
          {character.url}
        </Link>
      </TableCell>
    </TableRow>
  );
};
