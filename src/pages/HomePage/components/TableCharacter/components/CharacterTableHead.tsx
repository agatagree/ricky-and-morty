import { Dispatch, SetStateAction } from "react";
import { OrderByType, OrderType } from "./utils/SortType";
import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";

const titleType: OrderByType[] = ["id", "name", "status", "species"];

type SortType = {
  orderBy: OrderByType;
  setOrderBy: Dispatch<SetStateAction<OrderByType>>;
  order: OrderType;
  setOrder: Dispatch<SetStateAction<OrderType>>;
};

export const CharacterTableHead = ({
  setOrderBy,
  setOrder,
  order,
  orderBy,
}: SortType) => {
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
