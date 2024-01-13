const { getCharacters, getCharactersById, addCharacters, updateCharacter, deleteCharacter } = require("../controllers/character");

const characterRoutes = require("express").Router();

characterRoutes.get("/", getCharacters);
characterRoutes.get("/:_id", getCharactersById);
characterRoutes.post("/", addCharacters);
characterRoutes.put("/:id", updateCharacter);
characterRoutes.delete("/:id", deleteCharacter)

module.exports = characterRoutes