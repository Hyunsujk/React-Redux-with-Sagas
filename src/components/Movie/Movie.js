import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div>
        <img
          onClick={this.props.clickPoster(this.props.id)}
          src={this.props.poster}
          alt="poster"
        />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Movie;
