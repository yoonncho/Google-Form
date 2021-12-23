import { createGlobalStyle } from 'styled-components';
import './reset.scss';

export const GlobalStyle = createGlobalStyle`
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html {
        font-size: 10px;
        -webkit-text-size-adjust: none;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-display: fallback;
        color: "#333333";
        background-color: "#000000";
        -ms-overflow-style: none; 
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        body {
            margin: 0;
        }
    }
`;
