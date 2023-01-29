import { useState } from "react";
import { SnackBarMessage } from "components";
import { SingleEpisode } from "./SingleEpisode";
import { Typography, Paper } from "@mui/material";

export const EpisodeList = ({ episodeData }: { episodeData: string[] }) => {
  const [errorState, setErrorState] = useState(false);

  if (errorState) {
    <SnackBarMessage text={"Sorry, some episodes may be missing"} />;
  }
  return (
    <>
      <Paper sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Episode list:{" "}
        </Typography>
        {episodeData.map((episode, index) => (
          <SingleEpisode
            url={episode}
            key={index}
            errorState={errorState}
            setErrorState={setErrorState}
          />
        ))}
      </Paper>
    </>
  );
};
