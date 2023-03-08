const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SongsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Song = mongoose.model("Song", SongsSchema);

module.exports = Song;
