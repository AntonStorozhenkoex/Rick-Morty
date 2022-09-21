import React from "react";
import { Header } from "../components /Header";
import { SearchForm } from "../components /SearchForm";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_BY_FILTERS } from "../query/query";

export const MainPage = () => {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_FILTERS, {
    variables: {
      status: "unknown",
      species: "Robot",
      type: "",
      gender: "Male",
    },
  });

  return (
    <>
      <Header />
      <SearchForm />
    </>
  );
};
