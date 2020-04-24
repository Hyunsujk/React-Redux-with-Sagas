import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../Movie/Movie";

class ListPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }

  clickPoster = (id) => (event) => {
    console.log(id);
    // this.props.history.push("/details");
  };

  render() {
    const movie = this.props.store.movies.map((movie, index) => {
      return (
        <Movie
          key={index}
          id={movie.id}
          title={movie.title}
          poster={movie.poster}
          description={movie.description}
          clickPoster={this.clickPoster}
        />
      );
    });
    return <div>{movie}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ListPage);
