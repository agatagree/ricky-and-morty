import { Dispatch, SetStateAction } from "react";
import { AlertMessage } from "components";
import { ErrorHandler } from "utils/ErrorHandler";
import { Episode } from "utils/Types";
import { useFetch } from "utils/useFetch";
import { Typography, Paper, Skeleton } from "@mui/material";

type SingleEpisodeTypes = {
  url: string;
  errorState: boolean;
  setErrorState: Dispatch<SetStateAction<boolean>>;
};

export const SingleEpisode = ({
  url,
  errorState,
  setErrorState,
}: SingleEpisodeTypes) => {
  const fetchResult = useFetch(url);
  const { data } = fetchResult as { data: Episode };
  const { error, loading } = fetchResult;

  if (loading === true) {
    return (
      <Skeleton
        variant="rounded"
        animation="wave"
        width={210}
        height={24}
        sx={{ mb: 1 }}
      />
    );
  }
  if (error) {
    setErrorState(true);
    return null;
  }
  return (
    <>
      {data && !data.error ? (
    
        <Typography sx={{ mb: 1 }}>
          {data.episode}, {data.name}
        </Typography>
      ) : null}
    </>
  );
};
