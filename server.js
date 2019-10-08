const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

const accountRoutes = require("./accountsRoutes");

server.use(express.json());
server.use("/api/accounts", accountRoutes);

server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
