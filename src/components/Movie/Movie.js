import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <div>
        <p>movie title:{this.props.title}</p>
      </div>
    );
  }
}

export default Movie;
