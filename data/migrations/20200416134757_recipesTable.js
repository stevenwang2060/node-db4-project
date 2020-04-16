
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.text("recipe_name", 128).unique().notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.text("ingredient_name", 128).unique().notNullable();
      tbl.text("quantity");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");
    })
    .createTable("steps", (tbl) => {
      tbl.increments();

      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id");

      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};