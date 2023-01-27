import { useParams } from "react-router-dom";
import { API_URL } from "api/consts";
import { ErrorHandler } from "utils/ErrorHandler";
import { Character } from "utils/Types";
import { useFetch } from "utils/useFetch";
import { Paper, Typography, CardMedia, Box } from "@mui/material";

export const SingleCharacter = () => {
  const { id } = useParams();
  const fetchResult = useFetch(`${API_URL}/${id}`);
  const { data } = fetchResult as { data: Character };
  const { error, loading } = fetchResult;

  return (
    <>
      <ErrorHandler error={error} loading={loading} data={data} />
      {data && !data.error ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Paper sx={{ display: "flex", gap: 3, alignItems: "flex-end" }}>
            <CardMedia
              sx={{ height: 140, width: 140 }}
              image={data.image}
              title={data.name}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h3">{data.name}</Typography>
              <Typography>
                {data.status} | {data.species}
              </Typography>
            </Box>
          </Paper>
          <Paper>
            {data.episode.map((episode, index) => (
              <Typography key={index}>{episode}</Typography>
            ))}
          </Paper>
        </Box>
      ) : null}
    </>
  );
};
