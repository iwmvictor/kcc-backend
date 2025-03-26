const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    name: String,
    email: String,
    phone: String,
    rentalStartDate: Date,
    rentalEndDate: Date,
    notes: String,
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Booking', bookingSchema);