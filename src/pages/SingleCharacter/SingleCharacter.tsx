import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API_URL } from "api/consts";
import { ErrorHandler } from "components";
import { DetialedSection, EpisodeList } from "./components";
import { Paper, Typography, CardMedia, Box } from "@mui/material";

export const SingleCharacter = () => {
  const { id } = useParams();

  const fetchData = (id: number) => {
    return fetch(`${API_URL}/${id}`).then((res) => res.json());
  };

  const { isLoading, error, data } = useQuery(["character", id], () =>
    fetchData(parseInt(id || "0", 10))
  );

  return (
    <>
      <ErrorHandler error={error} loading={isLoading} data={data} />
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
              alt={data.status}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h3">{data.status}</Typography>
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
