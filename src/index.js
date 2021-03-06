import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

import axios from "axios";

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create the rootSaga generator function

// get movies from the database and update movies reducer and get genres from database and update genres reducer
function* getList(action) {
  try {
    const response = yield axios.get("/movie");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (err) {
    console.warn("Error with getList, movie", err);
  }
  try {
    const response = yield axios.get("/genre");
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (err) {
    console.warn("Error with getList, genre", err);
  }
}

// update movie details of the id with the values
function* updateDetails(action) {
  try {
    yield axios.put(`/update/${action.payload.id}`, action.payload.update);
  } catch (err) {
    console.warn("Error with updating details", err);
  }
}

// depends on the call, do function for the call
function* rootSaga() {
  yield takeEvery("GET_LIST", getList);
  yield takeEvery("UPDATE_DETAILS", updateDetails);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
