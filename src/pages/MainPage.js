import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_FILTERS } from "../graphql/queries/query";
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Formik, Form, useFormikContext } from "formik";
import { CharacterCard } from "../components/CharacterCard";
import { CharactersList } from "../components/CharactersList";

export const MainPage = () => {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_FILTERS, {
    variables: {
      status: "unknown",
      species: "Robot",
      type: "",
      gender: "Male",
    },
  });

  const results = data && data.characters && data.characters.results;

  return (
    <>
      <Header />
      <Formik initialValues={{ type: "", gender: "", status: "", species: "" }}>
        <Form>
          <SearchForm />
        </Form>
      </Formik>
      <CharactersList data={results} />
    </>
  );
};
