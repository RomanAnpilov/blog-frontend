import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  a { color: black;}

  body,html { height: 100vh;}

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
