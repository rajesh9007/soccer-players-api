const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    playerName: { type: String, required: true },
    position: { type: String, required: true },
    goalsScored: { type: Number, required: true },
    assists: { type: Number, required: true },
    yellowCards: { type: Number, required: true },
    redCards: { type: Number, required: true },
    minutesPlayed: { type: Number, required: true },
  },
  {
    collection: "soccerTeam",
  }
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
