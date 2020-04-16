exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipe_name: "Cereal" },
    { recipe_name: "Hard-Boiled Eggs" },
  ]);
};