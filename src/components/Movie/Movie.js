import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import "../font/fonts.css";

class Movie extends Component {
  clickPoster = (id) => (event) => {
    console.log(id);
    this.props.history.push(`/details/${id}`);
  };
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
              onClick={this.clickPoster(this.props.movie.id)}
              image={this.props.movie.poster}
              alt="poster"
            />

            <CardContent>
              <h3
                style={{
                  fontSize: "30px",
                  fontFamily: "Noto Sans JP",
                  fontWeight: "500",
                }}
              >
                {this.props.movie.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "Noto Sans JP",
                  fontWeight: "300",
                }}
              >
                {this.props.movie.description}
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withRouter(Movie);
