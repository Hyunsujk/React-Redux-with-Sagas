import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

class Movie extends Component {
  render() {
    return (
      <div>
        <Card
          variant="outlined"
          style={{
            width: "30%",
            marginLeft: "35%",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              onClick={this.props.clickPoster(this.props.id)}
              image={this.props.poster}
              alt="poster"
            />

            <CardContent>
              <h3 style={{ fontSize: "30px" }}>{this.props.title}</h3>
              <p style={{ fontSize: "15px" }}>{this.props.description}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default Movie;
