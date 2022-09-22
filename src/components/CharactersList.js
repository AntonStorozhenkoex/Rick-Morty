import React from "react";
import { CharacterCard } from "./CharacterCard";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
  },
}));

export const CharactersList = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} justifyContent="center">
      {data &&
        data.map((item) => (
          <CharacterCard
            key={item.name}
            name={item.name}
            gender={item.gender}
            image={item.image}
            location={item.location.name}
            status={item.status}
            species={item.species}
            episode={"0"}
          />
        ))}
    </Grid>
  );
};
