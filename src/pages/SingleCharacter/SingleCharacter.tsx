import { useParams } from "react-router-dom";
import { API_URL } from "api/consts";
import { ErrorHandler } from "utils/ErrorHandler";
import { Character } from "utils/Types";
import { useFetch } from "utils/useFetch";
import { DetialedSection } from "./components/DetailedSection";
import { EpisodeList } from "./components/EpisodeList";
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
          <Paper
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "flex-end" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              p: 2,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "100%",
                maxWidth: "300px",
                maxHeight: "300px",
                objectFit: "cover",
              }}
              src={data.image}
              alt={data.name}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h3">{data.name}</Typography>
              <Typography>
                {data.status} | {data.species}
              </Typography>

              <DetialedSection label={"Origin:"} text={data.origin.name} />
              <DetialedSection
                label={"Last known location:"}
                text={data.location.name}
              />
            </Box>
          </Paper>
          <EpisodeList episodeData={data.episode} />
        </Box>
      ) : null}
    </>
  );
};
