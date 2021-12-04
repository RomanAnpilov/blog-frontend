// @ts-nocheck
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import article from "./reducers/article";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(article, composeEnhancers(applyMiddleware(thunk)));

export default store;