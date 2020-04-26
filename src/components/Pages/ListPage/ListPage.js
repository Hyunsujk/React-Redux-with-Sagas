import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../Movie/Movie";
import Grid from "@material-ui/core/Grid";

class ListPage extends Component {
  // when the components are mounted, do GET_LIST
  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }

  render() {
    // get information from movies reducer and display one by one
    const movie = this.props.store.movies.map((movie, index) => {
      return <Movie key={index} movie={movie} />;
    });

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">MOVIE LIST</h1>
        </header>
        <div className="App-body">
          <Grid container spacing={8}>
            {movie}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ListPage);
