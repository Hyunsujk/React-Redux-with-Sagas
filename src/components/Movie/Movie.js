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
  //capture id of the clicked movie and guide the user to the details page with the id
  clickPoster = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    return (
      // in xs size screen, each card takes half of the screen, in small size screen, each card takes 1/4 of the screen
      <Grid item xs={6} sm={3}>
        <Card
          variant="outlined"
          style={{
            margin: "5%",
          }}
        >
          {/* CardActionArea sets an area that will react to hover action */}
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
