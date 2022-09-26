import React, { memo } from "react";
import logo from "../assets/logo.png";
import { Grid, styled } from "@mui/material";

const CustomImage = styled("img")`
    width: 100%;
    margin-bottom: 20px;
`;

export const Header = memo(() => {
    return (
        <header>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={3}>
                    <CustomImage src={logo} alt="Logo" />
                </Grid>
            </Grid>
        </header>
    );
});
