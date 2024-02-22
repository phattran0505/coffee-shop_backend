const express = require("express");
const router = express.Router();

const MenuController = require("../app/controllers/MenuController");

router.post("/", MenuController.addMenu);
router.get("/", MenuController.getMenu);

module.exports = router;
