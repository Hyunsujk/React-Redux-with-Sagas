import React, { Component } from "react";
import { connect } from "react-redux";

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
        {this.props.store.movieDetails.map((detail, index) => {
          return (
            <div key={index}>
              <img src={detail.poster} alt="poster" />
              <h1>{detail.title}</h1>
              <h3>{detail.genre}</h3>
              <p>{detail.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
