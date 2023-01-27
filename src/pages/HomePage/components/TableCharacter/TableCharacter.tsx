import { useEffect, useState } from "react";
import { API_URL } from "api/consts";
import { useFetch } from "utils/useFetch";
import {
  CharacterTableHead,
  CharacterTableRow,
  Pagination,
} from "./components";
import { TableContainer, TableBody, Table, Paper } from "@mui/material";
import { AlertMessage, Loader } from "components";

export const TableCharacter = ({ queryName }: { queryName: string }) => {
  const [currentUrl, setCurrentUrl] = useState(API_URL);
  const { data, error, loading } = useFetch(currentUrl);
  const characters = data?.results;

  useEffect(() => {
    setCurrentUrl(`${API_URL}?name=${queryName}`);
  }, [queryName]);

  if (loading === true) {
    return <Loader />;
  }
  if (!error && data?.error) {
    return <AlertMessage severity={"info"} type={"emptyData"} />;
  }
  if (error) {
    return <AlertMessage severity={"error"} />;
  }
  return (
    <>
      {data ? (
        <Paper sx={{ mb: 2, overflowX: "auto" }}>
          <TableContainer sx={{ mb: 2 }}>
            <Table stickyHeader aria-labelledby="character-table">
              <CharacterTableHead />
              <TableBody>
                {characters?.map((character, index) => {
                  return (
                    <CharacterTableRow character={character} key={index} />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination data={data} setCurrentUrl={setCurrentUrl} />
        </Paper>
      ) : (
        <Loader />
      )}
    </>
  );
};
