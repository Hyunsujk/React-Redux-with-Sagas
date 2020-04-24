const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const queryString = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, "genres".name as "genre" FROM "movies"
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
