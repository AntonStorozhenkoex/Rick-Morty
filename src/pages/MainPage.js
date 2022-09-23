import React from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_CHARACTER_BY_FILTERS} from "../graphql/queries/getCharactersByFiltersQuery";
import {Header} from "../components/Header";
import {SearchForm} from "../components/SearchForm";
import {Formik, Form, useFormikContext} from "formik";
import {CharactersList} from "../components/CharactersList";

export const MainPage = () => {
    const [getCharacters, {data, loading, error}] = useLazyQuery(GET_CHARACTER_BY_FILTERS, {
        variables: {
            status: "",
            species: "",
            type: "",
            gender: "",
        },
    });

    const results = data && data.characters && data.characters.results;

    const onSubmit = (status, species, type, gender) => {
        getCharacters({variables: {status, type, species, gender}})
    }

    return (
        <>
            <Header/>
            <Formik initialValues={{type: "", gender: "", status: "", species: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        onSubmit(values.status, values.species, values.type, values.gender, setSubmitting)
                        setSubmitting(false)
                    }}>
                {({handleSubmit}) => (
                    <Form>
                        <SearchForm handleSubmit={handleSubmit}/>
                    </Form>
                )}
            </Formik>
            <CharactersList data={results} loading={loading}/>
        </>
    );
};
