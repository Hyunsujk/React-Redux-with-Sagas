import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../Movie/Movie";

class ListPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }
  render() {
    const movie = this.props.store.movies.map((movie, index) => {
      return (
        <Movie
          key={index}
          title={movie.title}
          poster={movie.poster}
          description={movie.description}
          genre={movie.genre}
        />
      );
    });
    return <div>{movie}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ListPage);
