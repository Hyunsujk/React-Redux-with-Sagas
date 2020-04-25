import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
  state = {
    selectedMovie: {
      title: "",
      description: "",
    },
  };

  handleChange = (input) => (event) => {
    this.setState({
      selectedMovie: {
        ...this.state.selectedMovie,
        [input]: event.target.value,
      },
    });
  };

  updateDetails = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "UPDATE_DETAILS",
      payload: this.state.selectedMovie,
    });
  };

  handleCancel = () => {
    this.setState({
      selectedMovie: {
        title: "",
        description: "",
      },
    });
    this.props.history.push("/details");
  };

  render() {
    console.log(this.state);
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
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              placeholder="description"
              onChange={this.handleChange("description")}
            />
          </label>
          <button onSubmit={this.updateDetails}>Save</button>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
