import React from "react";
import { Grid, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = () => {
  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  );

  return (
    <Grid component="form" justifyContent="center" sx={{ display: "flex" }}>
      <TextField
        placeholder="Find a character"
        sx={{ backgroundColor: "#407772", borderRadius: "7px", width: "50%" }}
        InputProps={{ endAdornment: <SearchButton /> }}
      />
    </Grid>
  );
};
