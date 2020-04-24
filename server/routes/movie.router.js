const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/movie", (req, res) => {
  const queryString = `SELECT * FROM "movies" ORDER BY "movies".id ASC;`;
  pool
    .query(queryString)
    .then((responseDB) => {
      res.send(responseDB.rows);
      console.log(responseDB.rows);
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
      console.log(responseDB.rows);
    })
    .catch((err) => {
      console.log("Error:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
