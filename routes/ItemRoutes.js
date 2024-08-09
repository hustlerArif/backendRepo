const express = require("express");
const router = express.Router();

const { getItems } = require("../controllers/ItemController");
const { registerItems } = require("../controllers/ItemController");

router.get("/items", getItems);
router.post("/register", registerItems);
module.exports = router;
