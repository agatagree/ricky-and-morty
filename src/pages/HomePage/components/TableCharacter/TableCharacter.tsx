import { useContext } from "react";
import { useQuery } from "react-query";
import { API_URL } from "api/consts";
import { ErrorHandler } from "components";
import { TableContext } from "../../provider/TableProvider";
import {
  CharacterTableHead,
  CharacterTableBody,
  Pagination,
} from "./components";
import { TableContainer, Table, Paper } from "@mui/material";

export const TableCharacter = () => {
  const { page, queryName } = useContext(TableContext);

  const fetchData = (page: number, queryName = "") => {
    return fetch(`${API_URL}?page=${page + 1}&name=${queryName}`).then((res) =>
      res.json()
    );
  };

  const { isLoading, error, data } = useQuery(
    ["characters", page, queryName],
    () => fetchData(page, queryName),
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      <ErrorHandler error={error} loading={isLoading} data={data} />
      {data && !data.error ? (
        <Paper sx={{ mb: 2, overflowX: "auto" }}>
          <TableContainer sx={{ mb: 2 }}>
            <Table aria-labelledby="character-table">
              <CharacterTableHead />
              <CharacterTableBody characters={data?.results} />
            </Table>
          </TableContainer>
          <Pagination data={data} />
        </Paper>
      ) : null}
    </>
  );
};
