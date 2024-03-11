const express = require("express");
const productoSchema = require("../models/producto.js");

const router = express.Router();

router.post("/", (req, res) => {
    const producto = productoSchema(req.body);
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/", (req, res) => {
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion, src, categoria, subcategoria, stock } =
        req.body;
    productoSchema
        .updateOne(
            { id: id },
            {
                $set: {
                    nombre,
                    precio,
                    descripcion,
                    src,
                    categoria,
                    subcategoria,
                    stock,
                },
            }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
        .deleteOne({ id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
