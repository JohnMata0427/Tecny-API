const express = require("express");

const productos = require("./producto");
const users = require("./user");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API - 👋🌎🌍🌏",
    });
});

router.use("/productos", productos);
router.use("/users", users);

module.exports = router;
