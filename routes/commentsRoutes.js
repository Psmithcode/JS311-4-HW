const express = require("express");

let router = new express.Router();
let controller = require("../controllers/commentsController");
// router.use(controller);

router.get("/comments", controller.listComments);
router.get("/comments/:id", controller.findComment);
router.post("/comments", controller.createComment);

module.exports = router;
