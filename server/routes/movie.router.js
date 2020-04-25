const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/movie", (req, res) => {
  const queryString = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, array_agg("genres".name) as "genre" FROM "movies" 
  JOIN "movie_genre" ON "movie_genre".movie_id = "movies".id
  JOIN "genres" ON "movie_genre".genre_id = "genres".id
  GROUP BY "movies".id
  ORDER BY "movies".id ASC;`;
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

// router.get("/genre", (req, res) => {
//   const queryString = `SELECT "movies".id, "movies".title, array_agg("genres".name) as "genre" FROM "movies"
//   JOIN "movie_genre" ON "movie_genre".movie_id = "movies".id
//   JOIN "genres" ON "movie_genre".genre_id = "genres".id
//   GROUP BY "movies".id
//   ORDER BY "movies".id ASC;`;
//   pool
//     .query(queryString)
//     .then((responseDB) => {
//       res.send(responseDB.rows);
//     })
//     .catch((err) => {
//       console.log("Error:", err);
//       res.sendStatus(500);
//     });
// });

router.get("/details/:id", (req, res) => {
  let reqId = req.params.id;
  const queryString = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, array_agg("genres".name) as "genre" FROM "movies"
  JOIN "movie_genre" ON "movie_genre".movie_id = "movies".id
  JOIN "genres" ON "movie_genre".genre_id = "genres".id
  WHERE "movies".id =$1
  GROUP BY "movies".id`;
  pool
    .query(queryString, [reqId])
    .then((responseDB) => {
      console.log(responseDB.rows);
      res.send(responseDB.rows);
    })
    .catch((err) => {
      console.log("Error getting the movie details");
      res.sendStatus(500);
    });
});

router.put("/update/:id", (req, res) => {
  // const itemId = req.body.id;
  const item = req.body;
  const itemId = req.params.id;
  console.log(req.body);
  console.log(req.params.id);
  // const queryString = `UPDATE "movies" set "title" = $1, "description"=$2 WHERE "id"=$3;`;
  // pool
  //   .query(queryString, [item.title, item.description, itemId])
  //   .then((responseDb) => {
  //     res.sendStatus(200);
  //   })
  //   .catch((err) => {
  //     console.log("Error updating details", err);
  //     res.sendStatus(500);
  //   });
});

module.exports = router;
