const express = require("express");
const router = express.Router();

const db = require("./data/dbConfig");

//endpoints using Knex

//Get all post
router.get("/", (req, res) => {
  db.select("*")
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.where(id)
    .first()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.json(err);
    });
});
