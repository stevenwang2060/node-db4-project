const db = require("../data/db-config");

function find() {
  return db("recipes");
}
function findById(id) {
  return db("recipes").where({ id }).first();
}
function getStepId(id) {
  return db("steps").where({ id }).first();
}
function findSteps(recipe_id) {
  return db("steps as st")
    .join("recipes as r", "st.recipe_id", "r.id")
    .select("st.instructions", "st.step_number")
    .where({ recipe_id });
}
function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .join("recipes as r", "i.recipe_id", "r.id")
    .select("i.ingredient_name", "i.quantity")
    .where({ recipe_id });
}

function add(recipe) {
  return db("recipes")
    .insert(recipe)
    .then((ids) => {
      return findById(ids[0]);
    });
}
function addStep(step) {
  return db("steps")
    .insert(step)
    .then((ids) => {
      return getStepId(ids[0]);
    });
}
function update(changes, id) {
  return db("recipes")
    .where({ id })
    .update(changes)
    .then(() => findById(id));
}

function remove(id) {
  return db("recipes").where("id", id).del();
}

module.exports = {
  find,
  findById,
  findSteps,
  getShoppingList,
  add,
  addStep,
  update,
  remove,
};