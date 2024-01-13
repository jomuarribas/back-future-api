const Character = require('../models/Character');


// GET ALL
const getCharacters = async (req, res, next) => {
  try {
    const allCharacters = await Character.find();

    return res.status(200).json(allCharacters);

  } catch (err) {
    return res.status(400).json(err);

  }
};

// GET BY ID
const getCharactersById = async (req, res, next) => {
  try {

    const characterById = await Character.findById(req.params);

    return res.status(200).json(characterById);

  } catch (err) {
    return res.status(400).json(err);

  }
};

// POST ADD CHARACTER
const addCharacters = async (req, res, next) => {
  try {

    const addCharacter = new Character(req.body)
    const saveCharacter = await addCharacter.save()

    return res.status(200).json("Character has been added")

  } catch (err) {
    return res.status(400).json(err)

  }
};

// UPDATE CHARACTER

const updateCharacter = async (req, res, next) => {
  try {

    const { id } = req.params
    const newCharacter = new Character(req.body)
    newCharacter._id = id

    const addCharacter = await Character.findByIdAndUpdate(id, newCharacter, { new: true })

    return res.status(200).json(addCharacter)


  } catch (err) {
    return res.status(400).json(err)

  }
};

// DELETE CHARACTER

const deleteCharacter = async (req, res, next) => {
  try {

    const { id } = req.params
    const characterDeleted = await Character.findByIdAndDelete(id)

    return res.status(200).json("The character has been eliminated")

  } catch (err) {
    return res.status(404).json(err)

  }
};

module.exports = { getCharacters, getCharactersById, addCharacters, updateCharacter, deleteCharacter };