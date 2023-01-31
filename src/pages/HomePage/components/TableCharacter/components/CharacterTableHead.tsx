import { useContext } from "react";
import { TableContext } from "../../../provider/TableProvider";
import { OrderByType } from "../../../types/SortType";
import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";

const titleType: OrderByType[] = ["id", "name", "status", "species"];

export const CharacterTableHead = () => {
  const { order, setOrder, orderBy, setOrderBy } = useContext(TableContext);
  const handleSort = (props: OrderByType) => {
    const isAsc = orderBy === props && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(props);
  };

  return (
    <TableHead>
      <TableRow sx={{ textTransform: "uppercase" }}>
        {titleType
          .filter((item) => item !== "id")
          .map((title, index) => (
            <TableCell key={index}>
              <TableSortLabel
                active={orderBy === title}
                direction={orderBy === title ? order : "asc"}
                onClick={() => handleSort(title)}
              >
                {title}
              </TableSortLabel>
            </TableCell>
          ))}
        <TableCell>url</TableCell>
      </TableRow>
    </TableHead>
  );
};
