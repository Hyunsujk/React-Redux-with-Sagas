import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import "./DetailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DetailsPage extends Component {
  // when the components are mounted, do GET_LIST
  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }

  // take the user back to list page
  clickBackToList = () => {
    this.props.history.push("/");
  };

  // take the user to edit page with the id of the movie
  clickEdit = () => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    //get id from the url
    const id = Number(this.props.match.params.id);

    // if the id matches, get the movie information from movies reducer
    const selectedMovie = this.props.store.movies.filter((movie) => {
      return movie.id === id;
    });

    // if the id matches, get the genre from the genres reducer
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
            {/* go through the genre and display one by one */}
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

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">MOVIE DETAILS</h1>
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
