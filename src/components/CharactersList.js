import React from "react";
import { CharacterCard } from "./CharacterCard";
import { makeStyles } from "@mui/styles";
import {CircularProgress, Grid} from "@mui/material";
import {NotResult} from "./NotResult";

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    paddingTop:20
  },
}));

export const CharactersList = ({ data,loading }) => {
  const classes = useStyles();


  if (loading) return  <Grid container justifyContent='center' sx={{paddingTop:25}}>
    <CircularProgress/>
  </Grid>

  return (
    <Grid container className={classes.container} justifyContent="center">
      {data &&
        data.map((item) => (
          <CharacterCard
            key={item.id}
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
