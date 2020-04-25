import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
} from "@material-ui/core/";
import "../font/fonts.css";

class Movie extends Component {
  clickPoster = (id) => (event) => {
    console.log(id);
    this.props.history.push(`/details/${id}`);
  };
  render() {
    return (
      <Grid item xs={6} sm={3}>
        <Card
          variant="outlined"
          style={{
            margin: "5%",
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
      </Grid>
    );
  }
}

export default withRouter(Movie);
