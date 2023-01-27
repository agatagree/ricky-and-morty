import { Dispatch, SetStateAction } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

type QueryNameType = {
  queryName: string;
  setQueryName: Dispatch<SetStateAction<string>>;
};

export const SearchField = ({ queryName, setQueryName }: QueryNameType) => {
  return (
    <Box>
      <FormControl sx={{ mt: 1 }} variant="outlined" fullWidth>
        <OutlinedInput
          placeholder="Name"
          id="outlined-adornment-search"
          onChange={(e) => setQueryName(e.target.value)}
          value={queryName}
          startAdornment={
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search result"
                onClick={() => setQueryName("")}
                edge="end"
              >
                {queryName ? <ClearRoundedIcon /> : null}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
