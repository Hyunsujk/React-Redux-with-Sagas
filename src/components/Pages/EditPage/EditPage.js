import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class EditPage extends Component {
  state = {
    selectedMovie: {
      title: "",
      description: "",
    },
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_LIST" });
  }

  handleChange = (input) => (event) => {
    this.setState({
      selectedMovie: {
        ...this.state.selectedMovie,
        [input]: event.target.value,
      },
    });
  };

  updateDetails = (id) => (event) => {
    console.log("update");
    console.log(id);
    this.props.dispatch({
      type: "UPDATE_DETAILS",
      payload: { id: id, update: this.state.selectedMovie },
    });
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  handleCancel = () => {
    this.setState({
      selectedMovie: {
        title: "",
        description: "",
      },
    });
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    // console.log(this.state);
    const id = Number(this.props.match.params.id);
    // console.log(this.props.match.params.id);
    const selectedMovie = this.props.store.movies.filter((movie) => {
      return movie.id === id;
    });

    const movieTitle = selectedMovie.map((info, index) => {
      return info.title;
    });

    const movieDescription = selectedMovie.map((info, index) => {
      return info.description;
    });

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Edit Details</h1>
        </header>
        <Button
          variant="outlined"
          onClick={this.updateDetails(id)}
          style={{
            backgroundColor: "rgb(13, 13, 59)",
            color: "#fff",
            margin: "15px 30px",
          }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          onClick={this.handleCancel}
          style={{
            backgroundColor: "rgb(13, 13, 59)",
            color: "#fff",
            margin: "15px 30px",
          }}
        >
          Cancel
        </Button>
        <form>
          <label>
            <TextField
              type="text"
              label="title"
              onChange={this.handleChange("title")}
              value={movieTitle}
            />
          </label>
          <label>
            <TextField
              type="text"
              label="description"
              onChange={this.handleChange("description")}
              value={movieDescription}
            />
          </label>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
