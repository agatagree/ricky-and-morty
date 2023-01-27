import { TableHead, TableRow, TableCell } from "@mui/material";

export const CharacterTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Species</TableCell>
        <TableCell>URL</TableCell>
      </TableRow>
    </TableHead>
  );
};
