import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchButton = ({func}) => (
  <IconButton onClick={() => func()}>
    <SearchIcon />
  </IconButton>
);
