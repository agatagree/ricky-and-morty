import { useEffect, useState } from "react";
import { API_URL } from "api/consts";
import { ErrorHandler } from "utils/ErrorHandler";
import { Info, Character } from "utils/Types";
import { useFetch } from "utils/useFetch";
import {
  CharacterTableHead,
  CharacterTableRow,
  Pagination,
} from "./components";
import { TableContainer, TableBody, Table, Paper } from "@mui/material";

export const TableCharacter = ({ queryName }: { queryName: string }) => {
  const [currentUrl, setCurrentUrl] = useState(API_URL);
  const fetchResult = useFetch(currentUrl);
  const { data } = fetchResult as { data: Info<Character[]> };
  const { error, loading } = fetchResult;

  const characters = data?.results;

  useEffect(() => {
    setCurrentUrl(`${API_URL}?name=${queryName}`);
  }, [queryName]);

  return (
    <>
      <ErrorHandler error={error} loading={loading} data={data} />
      {data && !data.error ? (
        <Paper sx={{ mb: 2, overflowX: "auto" }}>
          <TableContainer sx={{ mb: 2 }}>
            <Table aria-labelledby="character-table">
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
      ) : null}
    </>
  );
};
