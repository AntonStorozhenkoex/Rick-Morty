import React from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = () => {
    // todo
  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  );

  return (
      // todo
    <Grid component="form" justifyContent="center" sx={{ display: "flex" }}>
      <TextField
        placeholder="Find a character"
        sx={{ backgroundColor: "#407772", borderRadius: "7px", width: "50%", padding: 1 }}
        InputProps={{ endAdornment: <SearchButton /> }}
      />
    </Grid>
  );
};
