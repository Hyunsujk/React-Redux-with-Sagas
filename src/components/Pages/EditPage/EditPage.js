import React, { Component } from "react";
import { connect } from "react-redux";

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
        <h1>Edit</h1>
        <form>
          <label>
            Title:
            <input
              type="text"
              placeholder="title"
              onChange={this.handleChange("title")}
              value={movieTitle}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              placeholder="description"
              onChange={this.handleChange("description")}
              value={movieDescription}
            />
          </label>
        </form>
        <button onClick={this.updateDetails(id)}>Save</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
