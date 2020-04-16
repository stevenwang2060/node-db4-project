exports.seed = function (knex) {
  return knex("ingredients").insert([
    { ingredient_name: "Cinnamon Toast Crunch", quantity: "3/4 cups", recipe_id: 1 },
    { ingredient_name: "Milk", quantity: "1/2 cup", recipe_id: 1 },
    { ingredient_name: "Egg", quantity: "4", recipe_id: 2},
    { ingredient_name: "Water", quantity: "6 cups", recipe_id: 2},
  ]);
};