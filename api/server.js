const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Reid501:testfreddie@cluster0.lrlwxyy.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Song = require("./models/Song");

// Get Songs
app.get("/songs", async (req, res) => {
  const songs = await Song.find().sort({ votes: -1 });

  res.json(songs);
});

// Add Song
app.post("/song/new", (req, res) => {
  const song = new Song({
    title: req.body.title,
    cover: req.body.cover,
  });

  song.save();

  res.json(song);
});

// Delete Song
app.delete("/song/delete/:id", async (req, res) => {
  const result = await Song.findByIdAndDelete(req.params.id);

  res.json(result);
});

//   Vote Song
app.put("/song/vote/:id", async (req, res) => {
  const song = await Song.findById(req.params.id);

  song.votes = song.votes + 1;

  song.save();

  res.json(song);
});

app.listen(3001, () => console.log("Server started on port 3001"));
