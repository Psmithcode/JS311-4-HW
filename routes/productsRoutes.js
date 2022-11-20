const express = require("express");
let router = new express.Router();

let controller = require("../controllers/productsController");

router.get("/products", controller.getProducts);
router.get("/products/:id", controller.getProduct);
router.post("/products", controller.makeProduct);

module.exports = router;
