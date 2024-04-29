import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400 700;
            src: url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
        }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
`