import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.cardBgColor,
    borderWidth: 2,
    borderRadius: 7,
    border: `1px solid ${theme.palette.cardBorderColor}`,
    display: "flex",
    flex: "0 0 30%",
    margin: "10px",
    padding: "10px",
  },
  title: {
    width: "100%",
    textAlign: "center",
  },
  image: {
    borderRadius: "50%",
    width: 150,
  },
}));

export const CharacterCard = ({
  gender,
  name,
  status,
  type,
  location,
  episode,
  image,
  species,
}) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.card}>
      <img src={image} alt={name} className={classes.image} />
      <Typography className={classes.title}>{name}</Typography>
      <Grid container justifyContent="space-between">
        <p>{`Status: ${status}`}</p>
        <p>{`Species: ${species}`}</p>
      </Grid>
      <Grid container justifyContent="space-between">
        <p>{`Type: ${type}`}</p>
        <p>{`Gender: ${gender}`}</p>
      </Grid>
      <Grid container justifyContent="space-between">
        <p>{`Location: ${location}`}</p>
        <p>{`Episode: ${episode}`}</p>
      </Grid>
    </Grid>
  );
};
