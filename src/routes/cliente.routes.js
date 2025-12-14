const express = require("express");
const controller = require("../controllers/clienteController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/clientes", auth, controller.create);
router.get("/clientes", auth, controller.findAll);
router.get("/clientes/:id", auth, controller.findOne);
router.put("/clientes/:id", auth, controller.update);
router.delete("/clientes/:id", auth, controller.remove);

module.exports = router;