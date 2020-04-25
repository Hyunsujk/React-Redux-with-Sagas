import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <h3 className="title">{this.props.title}</h3>
        <div className="grid-container">
          <div className="poster-img">
            <img
              className="grid-item"
              onClick={this.props.clickPoster(this.props.id)}
              src={this.props.poster}
              alt="poster"
            />
          </div>
          <div className="grid-item description">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
