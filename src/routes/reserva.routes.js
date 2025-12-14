const express = require("express");
const controller = require("../controllers/reservaController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/reservas", auth, controller.create);
router.get("/reservas", auth, controller.findAll);
router.get("/reservas/:id", auth, controller.findOne);
router.put("/reservas/:id", auth, controller.update);
router.delete("/reservas/:id", auth, controller.remove);

module.exports = router;