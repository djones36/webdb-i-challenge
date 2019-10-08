const express = require("express");
const router = express.Router();

const db = require("./data/dbConfig");

//endpoints using Knex

//Get all post
router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => {
      res.status(200).json({ data: accounts });
    })
    .catch(err => {
      res.json(err);
    });
});

//Get by ID
// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   db.where(id)
//     .first()
//     .then(account => {
//       res.status(200).json(account);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.select()
    .from("accounts")
    .where({ id: id })
    .first()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//Post
router.post("/", (req, res) => {
  const acountData = req.body;
  db("posts")
    .insert(acountData, "id")
    .into("accounts")
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//put update
router.put("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .update(req.body)
    .then(update => {
      res.status(200).json(update);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//delete
router.delete("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      // remember to handle the error
      res.status(500).json(error);
    });
});

module.exports = router;
