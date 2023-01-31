import { useContext } from "react";
import { TableContext } from "pages/HomePage/provider/TableProvider";
import { TablePagination } from "@mui/material";
import { Info, Character } from "types/Types";

type PaginationType = {
  data: Info<Character[] | Character>;
};

export const Pagination = ({ data }: PaginationType) => {
  const { page, setPage, setOrder, setOrderBy } = useContext(TableContext);
  const dataInfo = data?.info;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
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
