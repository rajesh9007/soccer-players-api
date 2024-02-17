const express = require("express");
const playerController = require("./playerController");

const router = express.Router();

router.get("/players", playerController.getPlayers);
router.get("/players/:id", playerController.getPlayerById);
router.post("/players", playerController.createPlayer);
router.put("/players/:id", playerController.updatePlayer);
router.delete("/players/:id", playerController.deletePlayer);

module.exports = router;
