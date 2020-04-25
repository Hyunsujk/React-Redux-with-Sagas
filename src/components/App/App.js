import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListPage from "../Pages/ListPage/ListPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import EditPage from "../Pages/EditPage/EditPage";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={ListPage} />
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/edit/:id" component={EditPage} />
        </Router>
      </div>
    );
  }
}

export default App;
