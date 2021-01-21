import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

  body {
    background-color: var(--gray);
  }

  a {
    text-decoration: none;
  }

  :root {
    --black: #1f232a;
    --blue: #61dafb;
    --gray: #eeeeee;
  }
`;
