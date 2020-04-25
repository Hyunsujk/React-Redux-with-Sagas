const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/movie", (req, res) => {
  const queryString = `SELECT * FROM "movies" ORDER BY "movies".id ASC;`;
  pool
    .query(queryString)
    .then((responseDB) => {
      res.send(responseDB.rows);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.sendStatus(500);
    });
});

router.get("/genre", (req, res) => {
  const queryString = `SELECT "movies".id, "movies".title, "genres".name as "genre" FROM "movies"
  JOIN "movie_genre" ON "movie_genre".movie_id = "movies".id
  JOIN "genres" ON "movie_genre".genre_id = "genres".id;`;
  pool
    .query(queryString)
    .then((responseDB) => {
      res.send(responseDB.rows);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.sendStatus(500);
    });
});

router.get("/details/:id", (req, res) => {
  let reqId = req.params.id;
  const queryString = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, "genres".name as "genre" FROM "movies"
      JOIN "movie_genre" ON "movie_genre".movie_id = "movies".id
      JOIN "genres" ON "movie_genre".genre_id = "genres".id
      WHERE "movies".id =$1;`;
  pool
    .query(queryString, [reqId])
    .then((responseDB) => {
      res.send(responseDB.rows);
    })
    .catch((err) => {
      console.log("Error getting the movie details");
      res.sendStatus(500);
    });
});

module.exports = router;
