import { useEffect, useState } from "react";
import { API_URL } from "api/consts";
import { ErrorHandler } from "utils/ErrorHandler";
import { Info, Character } from "utils/Types";
import { useFetch } from "utils/useFetch";
import {
  CharacterTableHead,
  CharacterTableBody,
  Pagination,
} from "./components";
import { OrderByType, OrderType } from "./utils/SortType";
import { TableContainer, Table, Paper } from "@mui/material";

export const TableCharacter = ({ queryName }: { queryName: string }) => {
  const [currentUrl, setCurrentUrl] = useState(API_URL);
  const [orderBy, setOrderBy] = useState<OrderByType>("id");
  const [order, setOrder] = useState<OrderType>("asc");
  const [page, setPage] = useState(0);

  const fetchResult = useFetch(currentUrl);
  const { data } = fetchResult as { data: Info<Character[]> };
  const { error, loading } = fetchResult;

  useEffect(() => {
    setCurrentUrl(`${API_URL}?name=${queryName}`);
    setPage(0);
  }, [queryName]);

  return (
    <>
      <ErrorHandler error={error} loading={loading} data={data} />
      {data && !data.error ? (
        <Paper sx={{ mb: 2, overflowX: "auto" }}>
          <TableContainer sx={{ mb: 2 }}>
            <Table aria-labelledby="character-table">
              <CharacterTableHead
                setOrderBy={setOrderBy}
                orderBy={orderBy}
                setOrder={setOrder}
                order={order}
              />
              <CharacterTableBody
                characters={data?.results}
                orderBy={orderBy}
                order={order}
              />
            </Table>
          </TableContainer>
          <Pagination
            data={data}
            setCurrentUrl={setCurrentUrl}
            setOrderBy={setOrderBy}
            setOrder={setOrder}
            page={page}
            setPage={setPage}
          />
        </Paper>
      ) : null}
    </>
  );
};
