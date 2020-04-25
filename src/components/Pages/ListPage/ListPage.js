import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "../../Movie/Movie";
import "./ListPage.css";

class ListPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }

  // clickPoster = (id) => (event) => {
  //   console.log(id);
  //   this.props.history.push(`/details/${id}`);
  // };

  render() {
    console.log(this.props.store.movieDetails);
    const movie = this.props.store.movies.map((movie, index) => {
      return <Movie key={index} movie={movie} />;
    });

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Movie List</h1>
        </header>
        {movie}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ListPage);
