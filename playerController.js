const Player = require("./playerModel");

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
};

exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      res.status(404).json({ error: "Player not found" });
    } else {
      res.json(player);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch player" });
  }
};

exports.createPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error: "Failed to create player" });
  }
};

exports.updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!player) {
      res.status(404).json({ error: "Player not found" });
    } else {
      res.json(player);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update player" });
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) {
      res.status(404).json({ error: "Player not found" });
    } else {
      res.json({ message: "Player deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete player" });
  }
};
