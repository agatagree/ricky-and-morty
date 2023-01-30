import { Dispatch, SetStateAction } from "react";
import { Info, Character } from "utils/Types";
import { OrderByType, OrderType } from "./utils/SortType";
import { TablePagination } from "@mui/material";

type PaginationType = {
  data: Info<Character[] | Character>;
  setCurrentUrl: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<OrderType>>;
  setOrderBy: Dispatch<SetStateAction<OrderByType>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({
  data,
  setCurrentUrl,
  setOrder,
  setOrderBy,
  page,
  setPage,
}: PaginationType) => {
  const dataInfo = data?.info;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    if (newPage > page && dataInfo?.next) {
      setCurrentUrl(dataInfo?.next);
    } else if (newPage < page && dataInfo?.prev) {
      setCurrentUrl(dataInfo?.prev);
    }
    setOrderBy("id");
    setOrder("asc");
  };

  return (
    <TablePagination
      component="div"
      count={dataInfo ? dataInfo.count : 1}
      rowsPerPage={20}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPageOptions={[]}
    />
  );
};
