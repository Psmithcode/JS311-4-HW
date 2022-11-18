const express = require("express");

let router = new express.Router();
let controller = require("../controllers/contactsController");

router.get("/contacts", controller.getContacts);
router.get("/contacts/:id", controller.getContact);
router.post("/contacts", controller.createContact);

module.exports = router;
