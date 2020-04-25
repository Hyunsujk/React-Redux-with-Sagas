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

const movieDetails = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_DETAILS":
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

const availableGenres = (state = [], action) => {
  switch (action.type) {
    case "SET_AVAIL_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create the rootSaga generator function

function* getList(action) {
  try {
    const response = yield axios.get("/movie");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (err) {
    console.warn("Error with getList, movie", err);
  }
  // try {
  //   const response = yield axios.get("/genre");
  //   yield put({ type: "SET_GENRES", payload: response.data });
  // } catch (err) {
  //   console.warn("Error with getList, genre", err);
  // }
}

// let selectedMovieId;

function* getDetails(action) {
  try {
    // selectedMovieId = action.payload;
    const response = yield axios.get(`/details/${action.payload}`);
    yield put({ type: "SAVE_DETAILS", payload: response.data });
  } catch (err) {
    console.warn("Error with getting details of the movie", err);
  }
}

function* updateDetails(action) {
  try {
    const response = yield axios.put(
      `/update/${this.movieDetails.id}`,
      action.payload
    );
    yield put({ type: "SET_MOVIES", payload: response.data });
    // yield put({ type: "SET_GENRES", payload: response.data });
  } catch (err) {
    console.warn("Error with updating details", err);
  }
}

function* rootSaga() {
  yield takeEvery("GET_LIST", getList);
  yield takeEvery("GET_DETAILS", getDetails);
  yield takeEvery("UPDATE_DETAILS", updateDetails);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    movieDetails,
    genres,
    availableGenres,
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
