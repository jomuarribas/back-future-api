const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(
  {
    character: { type: String, required: true },
    actor: { type: String, required: true },
    movie: { type: String, required: true },
    description: { type: String }
  },
  {
    collection: "characters"
  }
);

const Character = mongoose.model('Character', characterSchema, 'characters');
module.exports = Character;