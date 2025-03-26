const Car = require("../models/Car");

// Create a new car
exports.createCar = async (req, res) => {
  try {
    const {
      brand,
      model,
      year,
      category,
      description,
      price,
      mileage,
      condition,
      images,
      location,
      type,
      transmission,
      fuelType,
      rentalPricePerDay,
      depositRequired,
      mileageLimit,
      additionalDriver,
      pickupDropoff,
      minimumDriverAge,
      seats,
      engine,
      horsepower,
    } = req.body;

    const newCar = new Car(req.body);

    await newCar.save();
    res.status(201).json({ message: "Car created successfully!", car: newCar });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found!" });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update car by ID
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!car) {
      return res.status(404).json({ message: "Car not found!" });
    }
    res.status(200).json({ message: "Car updated successfully!", car });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete car by ID
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found!" });
    }
    res.status(200).json({ message: "Car deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
