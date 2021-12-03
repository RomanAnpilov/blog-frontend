import React from 'react';
import { createGlobalStyle } from 'styled-components'
import ReactDOM from 'react-dom';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
