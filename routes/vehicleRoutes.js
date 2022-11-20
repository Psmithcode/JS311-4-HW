const express = require("express");

let router = new express.Router();

let controller = require("../controllers/vehicleController");

router.get("/vehicles", controller.getVehicles);
router.get("/vehicles/:id", controller.getVehicle);
router.post("/vehicles", controller.createVehicle);

module.exports = router;
