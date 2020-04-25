import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import "./DetailsPage.css";

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
          <div className="detail-genre-container">
            {genre.genre.map((genre, index) => {
              return (
                <div key={index}>
                  <p className="detail-genre">{genre}</p>
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
        <header className="App-header">
          <h1 className="App-title">Movie Details</h1>
        </header>

        <div className="detail-desc">{info}</div>
        {genre}

        <Button
          onClick={this.clickBackToList}
          variant="outlined"
          style={{
            backgroundColor: "rgb(13, 13, 59)",
            color: "#fff",
            margin: "15px 30px",
          }}
        >
          Back to List
        </Button>
        <Button
          onClick={this.clickEdit}
          variant="outlined"
          style={{
            backgroundColor: "rgb(13, 13, 59)",
            color: "#fff",
            margin: "15px 30px",
          }}
        >
          Edit
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
