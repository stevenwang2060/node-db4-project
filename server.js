const express = require("express");

const recipesRouter = require("./api/recipesRouter");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);

module.exports = server;