import { useState, Dispatch, SetStateAction } from "react";
import { Info, Character } from "utils/Types";
import { TablePagination } from "@mui/material";

type PaginationType = {
  data: Info<Character[]>;
  setCurrentUrl: Dispatch<SetStateAction<string>>;
};

export const Pagination = ({ data, setCurrentUrl }: PaginationType) => {
  const [page, setPage] = useState(0);
  const dataInfo = data?.info;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    if (newPage > page && dataInfo?.next) {
      setCurrentUrl(dataInfo?.next);
    } else if (newPage < page && dataInfo?.prev) {
      setCurrentUrl(dataInfo?.prev);
    }
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
