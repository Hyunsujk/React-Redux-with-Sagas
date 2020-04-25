import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
  state = {
    selectedMovie: [],
  };

  componentDidMount() {
    this.setState({
      selectedMovie: this.props.store.movieDetails,
    });
  }

  updateDetails = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "UPDATE_DETAILS",
      payload: this.state.selectedMovie,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Edit</h1>
        <form>
          <label>
            Title:
            <input type="text" placeholder="title" />
          </label>
          <label>
            Description:
            <input type="text" placeholder="description" />
          </label>
          <button onSubmit={this.updateDetails}>Save</button>
        </form>
        <button>Cancel</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
