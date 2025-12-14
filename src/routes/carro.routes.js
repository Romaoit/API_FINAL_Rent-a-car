const express = require("express");
const controller = require("../controllers/carroController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/carros", auth, controller.create);
router.get("/carros", auth, controller.findAll);
router.get("/carros/:id", auth, controller.findOne);
router.put("/carros/:id", auth, controller.update);
router.delete("/carros/:id", auth, controller.remove);

module.exports = router;