import { useQuery } from "react-query";
import { Typography, Skeleton } from "@mui/material";

type SingleEpisodeTypes = {
  url: string;
  setErrorState: (value: boolean) => void;
};

export const SingleEpisode = ({ url, setErrorState }: SingleEpisodeTypes) => {
  const fetchData = (url: string) => {
    return fetch(url).then((res) => res.json());
  };

  const { isLoading, error, data } = useQuery(["episode", url], () =>
    fetchData(url)
  );

  if (isLoading === true) {
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
  if (error || data?.error) {
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
