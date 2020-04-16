exports.seed = function (knex) {
  return knex("steps").insert([
    {
      step_number: 1,
      instructions: "pour cereal in a bowl",
      recipe_id: 1,
      ingredients_id: 1,
    },
    {
      step_number: 2,
      instructions: "pour milk in the bowl",
      recipe_id: 1,
      ingredients_id: 2,
    },

    {
      step_number: 1,
      instructions: "place eggs in a pot",
      recipe_id: 2,
      ingredients_id: 3,
    },
    {
      step_number: 2,
      instructions: "add cold water into the pot until the eggs are submerged",
      recipe_id: 2,
      ingredients_id: 4,
    },
    {
      step_number: 3,
      instructions: "bring to full boil, uncovered",
      recipe_id: 2,
      ingredients_id: 4,
    },
    {
      step_number: 4,
      instructions: "immediately turn off heat, remove from the burner and cover",
      recipe_id: 2,
      ingredients_id: 4,
    },
    {
      step_number: 5,
      instructions: "set timer for 10 minutes",
      recipe_id: 2,
      ingredients_id: 4,
    },
    {
      step_number: 6,
      instructions: "wait for the eggs to cool in a cold water bath",
      recipe_id: 2,
      ingredients_id: 3,
    }
  ]);
};
