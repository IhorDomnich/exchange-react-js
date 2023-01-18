import { createGlobalStyle } from "styled-components";
import background from "./header.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    #root {
    background-image: url("${background}");
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    font-family: 'Monserat', sans-serif;
    }
`;