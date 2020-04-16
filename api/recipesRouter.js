const express = require("express");

const recipes = require("./recipesModel");

const router = express.Router();

router.get("/", (req, res) => {
  recipes
    .find()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes", err });
    });
});

router.get("/:id/steps", (req, res) => {
  recipes
    .findSteps(req.params.id)
    .then((steps) => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({ msg: "Couldn't find steps for the recipe" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get steps", err });
    });
});

router.get("/:id/ingredients", (req, res) => {
  recipes
    .getShoppingList(req.params.id)
    .then((list) => {
      if (list.length) {
        res.json(list);
      } else {
        res.status(404).json({ msg: "Couldn't find ingredients for the recipe" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get ingredients", err });
    });
});

module.exports = router;