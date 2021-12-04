import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
