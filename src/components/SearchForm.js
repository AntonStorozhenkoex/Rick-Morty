import React, { useCallback, useEffect } from "react";
import { debounce, Grid, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field, useFormikContext } from "formik";
import { genders, species, status } from "../data";
import { TextField, Select } from "formik-mui";
import { SearchButton } from "./SearchButton";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { StringParam } from "use-query-params";

const useStyles = makeStyles(() => ({
  select: {
    width: "150px",
    "& .MuiSelect-select": {
      padding: 10,
    },
  },
}));

export const SearchForm = ({ setSearchParams }) => {
  const classes = useStyles();

  const { values, handleSubmit } = useFormikContext();

  const onSubmit = useCallback(debounce(handleSubmit, 3000), []);

  useEffect(() => {
    onSubmit();
    setSearchParams({
      gender: values.gender,
      type: values.type,
      status: values.status,
      species: values.species,
    });
  }, [values]);

  return (
    <Grid container justifyContent="center">
      <Field
        component={TextField}
        name="type"
        placeholder="Character type"
        sx={{ width: "50%", padding: 1 }}
      />
      <Grid container justifyContent="space-between" sx={{ width: "51%" }}>
        <Field name="status" component={Select} className={classes.select}>
          {status.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Field>
        <Field name="species" component={Select} className={classes.select}>
          {species.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Field>
        <Field name="gender" component={Select} className={classes.select}>
          {genders.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Field>
      </Grid>
    </Grid>
  );
};
