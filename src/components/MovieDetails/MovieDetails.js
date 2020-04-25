import React, { Component } from "react";
import { connect } from "react-redux";

class MovieDetails extends Component {
  render() {
    const details = this.props.store.movieDetails.map((detail, index) => {
      return (
        <div key={index}>
          <img src={detail.poster} alt="poster" />
          <h1>{detail.title}</h1>
          <h3>{detail.genre}</h3>
          <p>{detail.description}</p>
        </div>
      );
    });
    return <div>{details}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieDetails);
