import React from "react";
import { useLazyQuery } from "@apollo/client";
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
                status: status,
                species: species,
                type: type,
                gender: gender
            }
        }
    );

    const results = data?.characters?.results;

    const onSubmit = (status, type, species, gender) => {
        getCharacters({ variables: { status, type, species, gender } });
        setSearchParams({
            gender: gender,
            type: type,
            status: status,
            species: species
        });
    };

    return (
        <>
            <Header />
            <Formik
                initialValues={{
                    type: type || "",
                    gender: gender || "",
                    status: status || "",
                    species: species || ""
                }}
                onSubmit={(values, { setSubmitting }) => {
                    onSubmit(
                        values.status,
                        values.type,
                        values.species,
                        values.gender
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
