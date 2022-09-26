import React from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_FILTERS } from "../graphql/queries/getCharactersByFiltersQuery";
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Formik, Form } from "formik";
import { CharactersList } from "../components/CharactersList";
import { useSearchParams } from "react-router-dom";

export const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  const gender = searchParams.get("gender");
  const type = searchParams.get("type");
  const species = searchParams.get("species");

  const [getCharacters, { data, loading, error }] = useLazyQuery(
    GET_CHARACTER_BY_FILTERS,
    {
      variables: {
        status: "",
        species: "",
        type: "",
        gender: "",
      },
    }
  );

  const results = data?.characters?.results;

  const onSubmit = (status, species, type, gender) => {
    getCharacters({ variables: { status, type, species, gender } });
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={{
          type: type || "",
          gender: gender || "",
          status: status || "",
          species: species || "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(
            values.status,
            values.species,
            values.type,
            values.gender,
            setSubmitting
          );
          setSubmitting(false);
        }}
      >
        {() => (
          <Form>
            <SearchForm setSearchParams={setSearchParams} />
          </Form>
        )}
      </Formik>
      <CharactersList data={results} loading={loading} />
    </>
  );
};
