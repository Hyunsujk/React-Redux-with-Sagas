import React, { Component } from "react";
import { connect } from "react-redux";
import MovieDetails from "../../MovieDetails/MovieDetails";

class DetailsPage extends Component {
  clickBackToList = () => {
    this.props.history.push("/");
  };

  clickEdit = () => {
    this.props.history.push("/edit");
  };

  render() {
    return (
      <div>
        <button onClick={this.clickBackToList}>Back to List</button>
        <button onClick={this.clickEdit}>Edit</button>
        <MovieDetails />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
