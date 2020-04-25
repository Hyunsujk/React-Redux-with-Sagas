import React, { Component } from "react";
import { connect } from "react-redux";

class DetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }

  clickBackToList = () => {
    this.props.history.push("/");
  };

  clickEdit = () => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    const id = Number(this.props.match.params.id);

    const selectedMovie = this.props.store.movies.filter((movie) => {
      return movie.id === id;
    });

    const genreOfMovie = this.props.store.genres.filter((genre) => {
      return genre.id === id;
    });

    const info = selectedMovie.map((info) => {
      return (
        <div key={info.id}>
          <h1>{info.title}</h1>
          <p>{info.description}</p>
        </div>
      );
    });

    const genre = genreOfMovie.map((genre) => {
      return (
        <div key={genre.id}>
          <div>
            {genre.genre.map((genre, index) => {
              return (
                <div key={index}>
                  <p>{genre}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    console.log(info);

    return (
      <div>
        <button onClick={this.clickBackToList}>Back to List</button>
        <button onClick={this.clickEdit}>Edit</button>
        {info}
        {genre}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
