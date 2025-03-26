const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    category: String,
    description: String,
    price: Number,
    mileage: String,
    condition: String,
    images: [String],
    location: String,
    transmission: String,
    fuelType: String,
    rentalPricePerDay: String,
    depositRequired: String,
    mileageLimit: String,
    additionalDriver: String,
    pickupDropoff: String,
    minimumDriverAge: Number,
    seats: Number,
    engine: String,
    horsepower: Number
});

module.exports = mongoose.model('Car', carSchema);