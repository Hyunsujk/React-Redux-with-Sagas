import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../Movie/Movie";
import "./ListPage.css";
import Grid from "@material-ui/core/Grid";

class ListPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }

  render() {
    const movie = this.props.store.movies.map((movie, index) => {
      return <Movie key={index} movie={movie} />;
    });

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">MOVIE LIST</h1>
        </header>
        <Grid container spacing={2}>
          {movie}
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ListPage);
