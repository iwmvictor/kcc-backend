const express = require("express");
const {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/carControllers");
// const { verifyToken, isAdmin } = require('../middlewares/auth');

const router = express.Router();

// router.post('/', verifyToken, isAdmin, createCar);
router.post("/", createCar);
router.get("/", getAllCars);
router.get("/:id", getCarById);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
