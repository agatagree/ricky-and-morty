import { useContext } from "react";
import { TableContext } from "pages/HomePage/provider/TableProvider";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

export const SearchField = () => {
  const { queryName, setQueryName, setPage } = useContext(TableContext);

  const handleSearch = (value: string) => {
    setQueryName(value);
    setPage(0);
  };

  const handleReset = () => {
    setQueryName("");
    setPage(0);
  };

  return (
    <Box>
      <FormControl sx={{ mt: 1 }} variant="outlined" fullWidth>
        <OutlinedInput
          placeholder="Name"
          id="outlined-adornment-search"
          onChange={(e) => handleSearch(e.target.value)}
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
                onClick={handleReset}
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
